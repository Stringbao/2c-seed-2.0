const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const compressing = require("compressing");
const config = require('./config')
const resolve = dir => path.join(__dirname, dir);
const zipDir = config('production')[0].componentName
const publishPath = resolve("../publish");
const zipName = (() => `${zipDir}.zip`)();

// 判断是否存在当前publish路径，没有就新增
if (!fs.existsSync(publishPath)) {
  fs.mkdirSync(publishPath);
}

compressing.zip
  .compressDir(resolve(`../dist/${zipDir}`), resolve(`../publish/${zipName}`))
  .then(() => {
    console.log(chalk.yellow(`Tip: component build success, path: ${resolve(zipName)}`));
  })
  .catch(err => {
    console.log(chalk.red("Tip: compress error"));
    console.error(err);
  });