module.exports = {
  pluginOptions: {
    gitDescribe: {
      variableName: 'GIT_DESCRIBE'
    }
  },
  devServer: {
    port: 4200,
  },
  transpileDependencies: [
    'vuetify'
  ]
}
