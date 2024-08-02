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




奇风镇的少年，少年的奇风镇

历时半月，一口气读完此书，说说感想。

其实这是一半成长小说而非悬疑小说，这是毋庸置疑的。

《奇风岁月》对比《杀死一只知更鸟》（李育超译），我更喜欢《杀》的文字，《奇》写得也很好，但总感觉文字上差了一点点。当然这里面可能有翻译的原因，我喜欢《杀》是李育超的版本，高红梅译本个人以为是远不如李育超版的，在文本的信达雅上逊色不少，高的版本过于简单直白。可能对比上来，《奇》的译者陈宗琛笔力上没有李育超有感染力，不过找来找去只有这个译本，没法做横向对比。陈宗琛翻译也是很好的，很多语句都很精彩。

此书有两条线，一条是时间线，春夏秋冬，四个季节，一年的发生的故事。这四季，也代表着主人公整个童年时期，这是科里的童年时光的代表，是他成长的历程，是他从小男孩到懂事的小男子汉的蜕变过程，是他关于家乡奇风镇的回忆。这是主线。

另一条线是事故线， 也就是谋杀案的线，从本书一开始就切入，最后结束最终破案。但读完全书下来，你会发现这条线不是主线。它只是恰巧发生在科里十二岁这一年的一件标志性的重要的事情而已。

全书已经不局限于谋杀案，它要表达的家乡的故事，童年时光的故事，成长的故事，成长环境的故事，书里在谋杀案之外讲了奇风镇各色的人，很多善良的勇敢的传奇的人，也有坏人恶人（但这些恶人也有人性中善的一面），黑人和白人，教会，人与动物，校园霸凌，面对死亡，友情。本书以一年未时间线，浓缩了主人公整个童年（少年）时期，记录了主人公宝贵的成长经历，主人成长的过程算是幸福的。他拥有一定成长的自由，有较为开明的父母，有几个好朋友，成长环境也不错，奇风镇上的人都善良友好（个别除外），大家基本都认识熟门熟路互有往来（这个小镇的人口和面积都比不上我们一个村子）。虽然是讲述1960年代一个美国小孩子的成长时代，时代背景还比较契合我们当下，不过那个时候美国人的生活水平和我所成长的90年代00年代相比至少还是领先几十年，冰箱彩电洗衣机对他们而言都是普通的物件了，我那会的村子，电视没几个家庭有，更别提冰箱洗衣机了。地域和生活习俗虽有差异，但很多成长的道理和见地，都让我感同身受。长大后，主人公离开了故乡，结婚生子有了自己新家庭和新生活，当他再次回到奇风镇，已经物是人非，奇风镇已经接近消亡，很多人已经搬离了小镇，房子已经被时间摧残，小镇已经接近消亡。但是那里曾有主人公难忘的童年时光，那是一段永远难忘的岁月。美国小镇的消亡和国内农村的消亡一样，在历史的车轮被碾碎，被风化，谁都无法阻挡。

我们每个人心里都有一个奇风镇，那里有我们永远无法找回的时光和故事，它有美好，有哀伤，但美丽总是多于丑陋。

作者试图在传达，童年最可贵的是拥有没有拘束的想象的能力，幻想的能力，这能力会随着你长大成人逐渐丢失。这能力非常宝贵，值得好好保护，值得所有父母珍视。


摘抄：

世事难料，你永远无法预料你的人生以后出现什么变化。真的。有时候，就像射箭一样，你明明瞄准了，而且很笃定自己百分之百会命中，没想到箭射出去，还没射到红心就被一阵突如其来的风刮走了。每个人在你这个年纪都有梦想，不过，有没有人后来真的百分之百梦想成真的？没有。这辈子我还没碰到过半个。

天底下没有完美的人，所以，两个不完美的人结合，怎么可能会没有摩擦呢？

失去心爱的东西，总是令人心碎，然而，一旦你能够放下那种失落的痛苦，能够欣然面对，那么，你才算真正达到“豁达大度”的境界。

对妈妈来说，整个世界就像一条没缝好的棉被，棉絮总是会漏出来。而她的担心就像针一样，要把那些可怕的裂缝一一缝起来。

眼前的景象如果是电视影片，那么，到了这种紧张的时刻，大概就准备要进广告了。只可惜，真实的世界是无法暂停的。

日常生活中，有时候两个人表面上客客气气，其实可能暗潮汹涌，这种错综复杂的情绪像网一样交缠纠结。这就是所谓的人生吧。

在往后的岁月里，我见识过很多美好的事物，但没有一样比得上它。

人世间就是这么回事。大家都渴望相信这个世界是美好的，可是却老是认定这个世界残酷又丑陋。我不难想象，就算是最纯真无邪的一首歌，要是你心里有鬼，那不管怎么听，你都会听到歌里有魔鬼。

他真正的目的究竟是想保护大家，还是拼命想误导大家，我实在猜不透。不过，可以确定的是，在误导大家这一点上，他是非常成功的，因为没多久，现场绝大多数的人已经开始呐喊阿门阿门。

失去心爱的东西，总是令人心碎，然而，一旦你能够放下那种失落的痛苦，能够欣然面对，那么，你才算真正达到“豁达大度”的境界。
