const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "jhn611.github.io" ? "/raschet.com/" : "/",
  transpileDependencies: true,
});
