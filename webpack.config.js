var path = require('path')
module.exports = {
  entry: {
    home:'./app/home/app.js',
    article:'./app/article/app.js',
  },
  output: {
      path: __dirname + "/build",
      filename: '[name].bundle.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'jquery': '$'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
        },
       {
         test: /\.(png|jpg|gif)$/,
         loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
       },
       {
         test: /\.css$/,
         loader: 'style!css'
       }
    ]
  }
}
