const { name } = require("./package");
module.exports = {
  publicPath: "/projectManagement/",
  outputDir: "../main-app/WiseDevOps/projectManagement",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 9000,
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
