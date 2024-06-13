
const util = require("util");
const child_process = require("child_process");
const exec = util.promisify(child_process.exec); /

function getCreateTimeAsFileName() {
  var d = new Date();
  var year = d.getFullYear();
  var month = (d.getMonth() + 1).toString().padStart(2, '0');
  var day = (d.getDate()).toString().padStart(2, '0');
  var hour = d.getHours();
  var minute = d.getMinutes();
  var second = d.getSeconds();
  var time =
    year +
    "-" +
    month +
    "-" +
    day +
    "-" +
    hour +
    "-" +
    minute +
    "-" +
    second;

  return time;
}

//year + "m" + month + "d" + day + "h" + hour + "m" + minute + "s" + second;
// execute command function

async function executeCommand() {
  const fileName = getCreateTimeAsFileName() + ".md";
  const { stdout, stderr } = await exec("hugo new posts/" + fileName, {
    cwd: app.fileManager.vault.adapter.basePath,
  });
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
  if (stdout) {
    new Notice("New Blog Created[" + fileName + "]");
  } else {
    new Notice("New Blog Create Faild. " + stderr);
  }
}

module.exports = async function (context, req) {
  await executeCommand();
};
