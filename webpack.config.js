const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const DotenvFlow = require('dotenv-flow-webpack');

module.exports = {
    entry: {
        index: './src/main.ts',
        print: './src/apiService.ts',
    },
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: process.env.port,
      hot: true,
      open: true
    },
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: [
              { 
                loader: 'ts-loader',
                options: {
                  transpileOnly: true
                }
              }
            ],
          },
          {
            test: /\.(scss)$/,
            use: [
              {
                // Adds CSS to the DOM by injecting a `<style>` tag
                loader: 'style-loader'
              },
              {
                // Interprets `@import` and `url()` like `import/require()` and will resolve them
                loader: 'css-loader'
              },
              {
                // Loader for webpack to process CSS with PostCSS
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      autoprefixer
                    ]
                  }
                }
              },
              {
                // Loads a SASS/SCSS file and compiles it to CSS
                loader: 'sass-loader'
              }
            ]
          }
        ]
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new DotenvFlow({
          path: './config',
          pattern: '.env[.node_env]'
        })
      ],
};