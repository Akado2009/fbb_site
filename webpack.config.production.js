var config = require('./webpack.config.js');
var BundleTracker = require('webpack-bundle-tracker');
var webpack = require('webpack');

config.output.publicPath = '/static/bundles/';

config.plugins = [
    new BundleTracker({filename: './webpack-stats-prod.json'}),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    })
];

config.entry = {
    main: './static/js/main',
    auth: './static/js/auth',
    contacts:  './static/js/contacts',
};

module.exports = config;
