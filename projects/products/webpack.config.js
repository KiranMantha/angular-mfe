const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.json'), [
  /* mapped paths to share */
  '@ui'
]);

module.exports = {
  output: {
    uniqueName: 'products',
    publicPath: 'auto'
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases()
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      library: { type: 'module' },
      filename: 'productsRemoteEntry.js',
      exposes: {
        './Module': './projects/products/src/app/remote/remote.module.ts'
      },
      shared: share({
        '@angular/core': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto'
        },
        '@angular/common': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto'
        },
        '@angular/common/http': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto'
        },
        '@angular/router': {
          eager: true,
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto'
        },
        ...sharedMappings.getDescriptors()
      })
    }),
    sharedMappings.getPlugin()
  ]
};
