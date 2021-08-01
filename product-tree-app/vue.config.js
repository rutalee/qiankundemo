const { name } = require("./package");
module.exports = {
  publicPath: "/productTree/",
  outputDir: "../main-app/WiseDevOps/productTree",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 9001,
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
