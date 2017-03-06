var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV || 'dev';
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var appName = 'app';
var host = '0.0.0.0';
var port = '9000';

var plugins = [/*'import-glob' /*'babel-plugin-root-import'*/], outputFile;

if (env === 'build') {
  outputFile = appName + '.min.js';
  plugins.push(new UglifyJsPlugin({ minimize: true }));
} else if (env === 'my')  {
  outputFile = appName + '.min.js';
} else {
  outputFile = appName + '.js';
}

var config = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/../dist/scripts',
    filename: outputFile,
    publicPath: __dirname + '/example'
  },
  module: {
    loaders: [
      {
        test: /\.css$/, loader: "style-loader!css-loader"
      },
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   loaders: ['to-string-loader','style-loader', 'css-loader', 'sass-loader']
      // },
      // {
      //   test: /(\.jsx|\.js)$/,
      //   loader: ['jsx-loader'],
      //   exclude: /(node_modules|bower_components)/,
      //   query: {
      //     presets: ['es2015']
      //   }
      // },
      {
        test: /(\.jsx|\.js)$/,
        loader: ['babel'],
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    // modules: [
    //   "node_modules",
    //   path.resolve('./src')
    //   // path.resolve(__dirname, "app")
    // ],
    extensions: ['', '.js', '.jsx', '.css']
  },
  plugins: plugins
};

if (env === 'dev') {
  new WebpackDevServer(webpack(config), {
    contentBase: './example',
    hot: true,
    debug: true
  }).listen(port, host, function (err, result) {
    if (err) {
      console.log(err);
    }
  });
  console.log('-------------------------');
  console.log('Local web server runs at http://' + host + ':' + port);
  console.log('-------------------------');
}

module.exports = config;
