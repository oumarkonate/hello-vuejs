var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    .addEntry('app', './assets/js/app.js')
    .addEntry('product', './assets/js/products/product.js')
    .addEntry('new-product', './assets/js/products/new-product.js')
    .addEntry('product-list', './assets/js/products/product-list.js')

    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableVueLoader()
    .enableSassLoader()
;

module.exports = Encore.getWebpackConfig();
