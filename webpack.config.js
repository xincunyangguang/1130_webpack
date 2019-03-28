/**
 * webpack的核心配置文件：执行webpack命令时，会在当前目录查找webpack.config.js文件读取配置
 * 1.通过Commonjs暴露出去一个对象
 * 2.四个关键的概念：
 *    entry：入口文件，将所有打包资源全部引入
 *    output：输出文件，将资源输出到指定目录下
 *    loader：处理webpack不能够解析的模块
 *    plugins：执行loader做不了的任务
 * 3.如何找到自己想要的loader？
 *   优先去官网找自己想要的loader，没有再去npm官网上找。
 * 4.在终端输入：webpack ./src/js/app.js ./build/js/built.js
 *  问题：这种方式只能够编译打包js、json文件，其他文件处理不了
 * 5.webpack --display-modules可以查看隐藏的任务
 */
//path内置的模块，用来设置路径。
const {resolve} = require('path');
//引入插件----提取css为一个单独的文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  //入口（从哪里进入开始解析）
  entry:'./src/js/index.js',

  //出口（最终加工完的代码输出到哪里）
  output: {// 输出配置
    path: resolve(__dirname, 'build'),//输出文件路径配置
    filename: 'index.js',// 输出文件名
  },

  //配置所有的loader
  module: {
    rules: [
      //1.将less转成css
      /*{
      test: /\.less$/, //匹配项目中所有的less文件
      use: [{
        loader: 'style-loader' // 动态生成一个style标签，然后把css模块注入进来
      }, {
        loader: 'css-loader' // 将css打包成一个CommonJs的模块
      }, {
        loader: 'less-loader' // 将less转css
      }]
    },*/
      {
        test: /\.less$/, //匹配文件的规则，说明该loader对哪个文件生效
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",//如果插件失效，则执行此句话
          use: ["css-loader","less-loader"]
        })
      },
      //2.url-loader处理图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath:'img', //图片最终输出的位置
              publicPath:'../img',  //css资源图片路径
              name:'[hash:5].[ext]', //修改图片名称
              limit: 8192 //当图片小于8KB，将图片转成base64编码
            }
          }
        ]
      },
      //3.使用jshint进行语法检查
      {
        test: /\.js$/, // 涵盖 .js 文件
        enforce: "pre", // 预先加载好 jshint loader
        exclude: /node_modules/, // 排除掉 node_modules 文件夹下的所有文件
        use: [
          {
            loader: "jshint-loader",
            options: {
              //jslint 的错误信息在默认情况下会显示为 warning（警告）类信息
              //将 emitErrors 参数设置为 true 可使错误显示为 error（错误）类信息
              emitErrors: true,

              //jshint 默认情况下不会打断webpack编译
              //如果你想在 jshint 出现错误时，立刻停止编译
              //请设置 failOnHint 参数为true
              failOnHint: false,
              esversion: 6
            }
          }
        ]
      },
      //4.babel-loader用于进行语法转换
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },

  //配置所有的插件
  plugins: [
    //提取css为单独文件
    new ExtractTextPlugin("./css/index.css"),
  ]


};