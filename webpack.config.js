const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const { CleanWebpackPlugin }=require('clean-webpack-plugin');

module.exports={
  mode:'development',
  entry:'src/index.js',
  output:{
    path:path.resolve(__dirname,'dists'),
    filename:'burble.js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath:'images',
              // publicPath:'assets',
              name:'[name].[ext]',
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'lesson-webpack',
      filename:'index.html',
      template:'./public/index.html',
      meta:{viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
    }),
    new CleanWebpackPlugin()
  ]
}                         