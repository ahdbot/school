const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');
module.exports = {
  mode: "development",
  entry: {
    app: "./src/js/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: false,
    port: 65535,
    open: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
      {

        test: /\.(sass|css|scss)$/,

        use: [

          {

            loader: MiniCssExtractPlugin.loader,

            options: {

              publicPath: '../'

            }

          },

          "css-loader",

          "sass-loader",

        ],
      },
      {
        test: /custom\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // esModule: false,
              publicPath: '../'
            },
          },
          "rtlcss-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: "./images/[name][ext]"
        }
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,

        type: 'asset/resource',
        generator: {
          filename: "./fonts/[name][ext]"
        }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html"
    }),
    new HtmlWebpackPlugin({
      filename: "student.html",
      template: "./src/student.html"
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "./src/login.html"
    }),
    new HtmlWebpackPlugin({
      filename: "register.html",
      template: "./src/register.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),


  ]

};