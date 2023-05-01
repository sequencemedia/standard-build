import {
  merge
} from 'webpack-merge'

import TerserPlugin from 'terser-webpack-plugin'

import common from './webpack.common.mjs'

export default (env) => (
  merge(common(env), {
    mode: 'production',
    optimization: {
      minimizer: [
        new TerserPlugin()
      ]
    }
  })
)
