---
title: "个人服务器配置"
subtitle: ""
date: 2024-06-26T14:54:19+08:00

lastmod: 2024-06-27T14:54:19+08:00
draft: true
description: "linux服务器配置nps，nginx proxy manager，alist，青龙面板等"
keywords: 
- linux
- nps
- nginx
- 青龙
tags:
- linux 
categories:
- draft
featuredImage: ""
featuredImagePreview: ""

password: ""
message: "提示信息"

author: "Kingpo"
authorLink: ""
authorEmail: ""

comment: true
weight: 0

toc:
  enable: true

seo:
  images: []
# See details front matter: /theme-documentation-content/#front-matter
---

<!--more-->
## linux上一些服务配置

最近重新整理了下，将要跑的服务重装了下，主要是基于docker compose，通过portainer管理平台统一进行安装管理。

有遇到了不少问题，记录一下过程。

### 1、docker仓库镜像CF代理

docker hub国内已经被墙，各种代理基本也不可用。GitHub上开源的一个项目，基于 Cloudflare Workers 的 Docker 镜像代理工具。它能够中转对 Docker 官方镜像仓库的请求，解决一些访问限制和加速访问的问题。

我采用workers部署，直接CF上创建一个workers，js代码复制上去，添加自定义域名，然后修改docker的设置配置文件镜像加速，改文件 `/etc/docker/daemon.json`

#### 部署方式

- **Workers** 部署：复制 [_worker.js](https://github.com/cmliu/CF-Workers-docker.io/blob/main/_worker.js) 代码，`保存并部署`即可
- **Pages** 部署：`Fork` 后 `连接GitHub` 一键部署即可
```js
// _worker.js

// Docker镜像仓库主机地址
let hub_host = 'registry-1.docker.io'
// Docker认证服务器地址
const auth_url = 'https://auth.docker.io'
// 自定义的工作服务器地址
let workers_url = 'https://你的域名'

// 根据主机名选择对应的上游地址
function routeByHosts(host) {
		// 定义路由表
	const routes = {
		// 生产环境
		"quay": "quay.io",
		"gcr": "gcr.io",
		"k8s-gcr": "k8s.gcr.io",
		"k8s": "registry.k8s.io",
		"ghcr": "ghcr.io",
		"cloudsmith": "docker.cloudsmith.io",
		
		// 测试环境
		"test": "registry-1.docker.io",
	};

	if (host in routes) return [ routes[host], false ];
	else return [ hub_host, true ];
}

/** @type {RequestInit} */
const PREFLIGHT_INIT = {
	// 预检请求配置
	headers: new Headers({
		'access-control-allow-origin': '*', // 允许所有来源
		'access-control-allow-methods': 'GET,POST,PUT,PATCH,TRACE,DELETE,HEAD,OPTIONS', // 允许的HTTP方法
		'access-control-max-age': '1728000', // 预检请求的缓存时间
	}),
}

/**
 * 构造响应
 * @param {any} body 响应体
 * @param {number} status 响应状态码
 * @param {Object<string, string>} headers 响应头
 */
function makeRes(body, status = 200, headers = {}) {
	headers['access-control-allow-origin'] = '*' // 允许所有来源
	return new Response(body, { status, headers }) // 返回新构造的响应
}

/**
 * 构造新的URL对象
 * @param {string} urlStr URL字符串
 */
function newUrl(urlStr) {
	try {
		return new URL(urlStr) // 尝试构造新的URL对象
	} catch (err) {
		return null // 构造失败返回null
	}
}

function isUUID(uuid) {
	// 定义一个正则表达式来匹配 UUID 格式
	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	
	// 使用正则表达式测试 UUID 字符串
	return uuidRegex.test(uuid);
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

export default {
	async fetch(request, env, ctx) {
		const getReqHeader = (key) => request.headers.get(key); // 获取请求头

		let url = new URL(request.url); // 解析请求URL
		workers_url = `https://${url.hostname}`;
		const pathname = url.pathname;
		const hostname = url.searchParams.get('hubhost') || url.hostname; 
		const hostTop = hostname.split('.')[0];// 获取主机名的第一部分
		const checkHost = routeByHosts(hostTop);
		hub_host = checkHost[0]; // 获取上游地址
		const fakePage = checkHost[1];
		console.log(`域名头部: ${hostTop}\n反代地址: ${hub_host}\n伪装首页: ${fakePage}`);
		const isUuid = isUUID(pathname.split('/')[1].split('/')[0]);
		
		const conditions = [
			isUuid,
			pathname.includes('/_'),
			pathname.includes('/r'),
			pathname.includes('/v2/user'),
			pathname.includes('/v2/orgs'),
			pathname.includes('/v2/_catalog'),
			pathname.includes('/v2/categories'),
			pathname.includes('/v2/feature-flags'),
			pathname.includes('search'),
			pathname.includes('source'),
			pathname === '/',
			pathname === '/favicon.ico',
			pathname === '/auth/profile',
		];

		if (conditions.some(condition => condition) && (fakePage === true || hostTop == 'docker')) {
			if (env.URL302){
				return Response.redirect(env.URL302, 302);
			} else if (env.URL){
				if (env.URL.toLowerCase() == 'nginx'){
					//首页改成一个nginx伪装页
					return new Response(await nginx(), {
						headers: {
							'Content-Type': 'text/html; charset=UTF-8',
						},
					});
				} else return fetch(new Request(env.URL, request));
			}
			
			const newUrl = new URL("https://registry.hub.docker.com" + pathname + url.search);

			// 复制原始请求的标头
			const headers = new Headers(request.headers);

			// 确保 Host 头部被替换为 hub.docker.com
			headers.set('Host', 'registry.hub.docker.com');

			const newRequest = new Request(newUrl, {
					method: request.method,
					headers: headers,
					body: request.method !== 'GET' && request.method !== 'HEAD' ? await request.blob() : null,
					redirect: 'follow'
			});

			return fetch(newRequest);
		}

		// 修改包含 %2F 和 %3A 的请求
		if (!/%2F/.test(url.search) && /%3A/.test(url.toString())) {
			let modifiedUrl = url.toString().replace(/%3A(?=.*?&)/, '%3Alibrary%2F');
			url = new URL(modifiedUrl);
			console.log(`handle_url: ${url}`)
		}

		// 处理token请求
		if (url.pathname.includes('/token')) {
			let token_parameter = {
				headers: {
					'Host': 'auth.docker.io',
					'User-Agent': getReqHeader("User-Agent"),
					'Accept': getReqHeader("Accept"),
					'Accept-Language': getReqHeader("Accept-Language"),
					'Accept-Encoding': getReqHeader("Accept-Encoding"),
					'Connection': 'keep-alive',
					'Cache-Control': 'max-age=0'
				}
			};
			let token_url = auth_url + url.pathname + url.search
			return fetch(new Request(token_url, request), token_parameter)
		}

		// 修改 /v2/ 请求路径
		if (/^\/v2\/[^/]+\/[^/]+\/[^/]+$/.test(url.pathname) && !/^\/v2\/library/.test(url.pathname)) {
			url.pathname = url.pathname.replace(/\/v2\//, '/v2/library/');
			console.log(`modified_url: ${url.pathname}`)
		}

		// 更改请求的主机名
		url.hostname = hub_host;

		// 构造请求参数
		let parameter = {
			headers: {
				'Host': hub_host,
				'User-Agent': getReqHeader("User-Agent"),
				'Accept': getReqHeader("Accept"),
				'Accept-Language': getReqHeader("Accept-Language"),
				'Accept-Encoding': getReqHeader("Accept-Encoding"),
				'Connection': 'keep-alive',
				'Cache-Control': 'max-age=0'
			},
			cacheTtl: 3600 // 缓存时间
		};

		// 添加Authorization头
		if (request.headers.has("Authorization")) {
			parameter.headers.Authorization = getReqHeader("Authorization");
		}

		// 发起请求并处理响应
		let original_response = await fetch(new Request(url, request), parameter)
		let original_response_clone = original_response.clone();
		let original_text = original_response_clone.body;
		let response_headers = original_response.headers;
		let new_response_headers = new Headers(response_headers);
		let status = original_response.status;

		// 修改 Www-Authenticate 头
		if (new_response_headers.get("Www-Authenticate")) {
			let auth = new_response_headers.get("Www-Authenticate");
			let re = new RegExp(auth_url, 'g');
			new_response_headers.set("Www-Authenticate", response_headers.get("Www-Authenticate").replace(re, workers_url));
		}

		// 处理重定向
		if (new_response_headers.get("Location")) {
			return httpHandler(request, new_response_headers.get("Location"))
		}

		// 返回修改后的响应
		let response = new Response(original_text, {
			status,
			headers: new_response_headers
		})
		return response;
	}
};

/**
 * 处理HTTP请求
 * @param {Request} req 请求对象
 * @param {string} pathname 请求路径
 */
function httpHandler(req, pathname) {
	const reqHdrRaw = req.headers

	// 处理预检请求
	if (req.method === 'OPTIONS' &&
		reqHdrRaw.has('access-control-request-headers')
	) {
		return new Response(null, PREFLIGHT_INIT)
	}

	let rawLen = ''

	const reqHdrNew = new Headers(reqHdrRaw)

	const refer = reqHdrNew.get('referer')

	let urlStr = pathname

	const urlObj = newUrl(urlStr)

	/** @type {RequestInit} */
	const reqInit = {
		method: req.method,
		headers: reqHdrNew,
		redirect: 'follow',
		body: req.body
	}
	return proxy(urlObj, reqInit, rawLen)
}

/**
 * 代理请求
 * @param {URL} urlObj URL对象
 * @param {RequestInit} reqInit 请求初始化对象
 * @param {string} rawLen 原始长度
 */
async function proxy(urlObj, reqInit, rawLen) {
	const res = await fetch(urlObj.href, reqInit)
	const resHdrOld = res.headers
	const resHdrNew = new Headers(resHdrOld)

	// 验证长度
	if (rawLen) {
		const newLen = resHdrOld.get('content-length') || ''
		const badLen = (rawLen !== newLen)

		if (badLen) {
			return makeRes(res.body, 400, {
				'--error': `bad len: ${newLen}, except: ${rawLen}`,
				'access-control-expose-headers': '--error',
			})
		}
	}
	const status = res.status
	resHdrNew.set('access-control-expose-headers', '*')
	resHdrNew.set('access-control-allow-origin', '*')
	resHdrNew.set('Cache-Control', 'max-age=1500')

	// 删除不必要的头
	resHdrNew.delete('content-security-policy')
	resHdrNew.delete('content-security-policy-report-only')
	resHdrNew.delete('clear-site-data')

	return new Response(res.body, {
		status,
		headers: resHdrNew
	})
}

```


#### 如何使用？

例如您的Workers项目域名为：`docker.fxxk.dedyn.io`；

##### 1.官方镜像路径前面加域名

```shell
docker pull docker.fxxk.dedyn.io/stilleshan/frpc:latest
```

```shell
docker pull docker.fxxk.dedyn.io/library/nginx:stable-alpine3.19-perl
```

##### 2.一键设置镜像加速

修改文件 `/etc/docker/daemon.json`（如果不存在则创建）

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://docker.fxxk.dedyn.io"]  # 请替换为您自己的Worker自定义域名
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

#### 变量说明

|变量名|示例|必填|备注|
|---|---|---|---|
|URL302|[https://t.me/CMLiussss](https://t.me/CMLiussss)|❌|主页302跳转|
|URL|[https://www.baidu.com/](https://www.baidu.com/)|❌|主页伪装(设为`nginx`则伪装为nginx默认页面)|

#### 第三方 DockerHub 镜像服务

**注意:**
- 以下内容仅做镜像服务的整理与搜集，未做任何安全性检测和验证。
- 使用前请自行斟酌，并根据实际需求进行必要的安全审查。
- 本列表中的任何服务都不做任何形式的安全承诺或保证。

|DockerHub 镜像仓库|镜像加地址|
|---|---|
|[bestcfipas镜像服务](https://t.me/bestcfipas/1900)|`https://docker.registry.cyou`|
||`https://docker-cf.registry.cyou`|
|[zero_free镜像服务](https://t.me/zero_free/80)|`https://docker.jsdelivr.fyi`|
||`https://dockercf.jsdelivr.fyi`|
||`https://dockertest.jsdelivr.fyi`|
|[docker proxy](https://dockerpull.com/) docker 代理|`https://dockerpull.com`|
|[docker proxy](https://dockerproxy.cn/) docker 代理|`https://dockerproxy.cn`|
|[Docker镜像加速站](https://hub.uuuadc.top/)|`https://hub.uuuadc.top`|
||`https://docker.1panel.live`|
||`https://hub.rat.dev`|
|[DockerHub 镜像加速代理](https://docker.anyhub.us.kg/)|`https://docker.anyhub.us.kg`|
||`https://docker.chenby.cn`|
||`https://dockerhub.jobcher.com`|
|[镜像使用说明](https://dockerhub.icu/)|`https://dockerhub.icu`|
|[Docker镜像加速站](https://docker.ckyl.me/)|`https://docker.ckyl.me`|
|[镜像使用说明](https://docker.awsl9527.cn/)|`https://docker.awsl9527.cn`|
|[镜像使用说明](https://docker.hpcloud.cloud/)|`https://docker.hpcloud.cloud`|
|[DaoCloud 镜像站](https://github.com/DaoCloud/public-image-mirror)|`https://docker.m.daocloud.io`|
|[AtomHub 可信镜像仓库平台](https://atomhub.openatom.cn/) (只包含基础镜像，共336个)|`https://atomhub.openatom.cn`|


### 2、青龙面板


### 3、nps

https://github.com/yisier/nps/

### nginx proxy manager





参考
https://engapi.com/article/3646





