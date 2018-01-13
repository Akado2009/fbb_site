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
    about: './static/js/about',
    lectorium: './static/js/lectorium',
    science: './static/js/science',
    phd: './static/js/phd',
    feedback: './static/js/feedback',
    news: './static/js/news',
    welcome: './static/js/welcome'
};

module.exports = config;
