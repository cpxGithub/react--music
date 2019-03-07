const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      src: resolve('src'),
      assets: 'src/assets'
    }
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        include: /src/,
        loader: "eslint-loader"
      },
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        // exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        include: /src/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'img/[name].[hash:8].[ext]'
        }
      }
    ]
  }
}