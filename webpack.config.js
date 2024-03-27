const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

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
    mode: 'development',
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 4200,
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
      ],
};