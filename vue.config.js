const webpack = require('webpack')

module.exports = { chainWebpack: config => { config.optimization.delete('splitChunks') } }
