require('module-alias/register')
require('@babel/register')({
  ignore: [
    /node_modules/
  ]
})

const path = require('path')

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

const {
  EnvironmentPlugin,
  SourceMapDevToolPlugin
} = require('webpack')

const {
  sourcePath,
  publicPath
} = require('~/source/build/paths/assets')

const {
  getPackage,
  getPackageVersion
} = require('~/source/build/args')

const PACKAGE = getPackage()
const VERSION = getPackageVersion(PACKAGE)

module.exports = ({ NODE_ENV = 'production' } = process.env) => ({
  mode: NODE_ENV,
  entry: {
    app: path.resolve(sourcePath, 'js/app.js')
  },
  output: {
    path: path.join(publicPath, 'js'),
    filename: `[name]-${VERSION}.js`
  },
  stats: {
    colors: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/env', {
                  targets: {
                    node: '12.19.0',
                    browsers: [
                      'last 4 versions',
                      'safari >= 9',
                      'ios >= 8',
                      'ie >= 9',
                      '> 2%'
                    ]
                  },
                  useBuiltIns: 'usage',
                  corejs: 3
                }
              ]
            ],
            plugins: [
              '@babel/proposal-export-default-from',
              '@babel/proposal-export-namespace-from',
              [
                '@babel/proposal-class-properties',
                {
                  loose: false
                }
              ],
              [
                'minify-dead-code-elimination',
                {
                  optimizeRawSize: true
                }
              ],
              [
                'module-resolver', {
                  root: ['../../..'],
                  cwd: 'babelrc',
                  alias: {
                    '~': '../../..'
                  }
                }
              ]
            ]
          }
        },
        exclude: /node_modules/ //  Required!
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: false,
      cleanOnceBeforeBuildPatterns: [
        path.join(publicPath, 'js').concat('/*.js'),
        path.join(publicPath, 'js').concat('/*.js.LICENSE.txt'),
        path.join(publicPath, 'js').concat('/*.js.map')
      ],
      dangerouslyAllowCleanPatternsOutsideProject: true,
      dry: false
    }),
    new EnvironmentPlugin({ NODE_ENV }),
    new SourceMapDevToolPlugin({ filename: `[name]-${VERSION}.js.map` })
  ]
})
