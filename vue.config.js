const path = require("path");
module.exports = {
  transpileDependencies: [
    'vuetify',
  ],

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: true,
      },
    },
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        //加上自己的文件路径，不能使用别名
        path.resolve(__dirname, 'src/style/index.scss'),
      ]
    }
  }
}
