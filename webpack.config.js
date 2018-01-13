var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    context: __dirname,
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './static/js/main',
        './static/js/auth',
        './static/js/contacts',
        './static/js/about',
        './static/js/lectorium',
        './static/js/science',
        './static/js/phd',
        './static/js/apply',
        './static/js/feedback',
        './statoc/js/news',
        './static/js/welcome'
    ],
    entry: {
        main: './static/js/main',
        auth: './static/js/auth',
        contacts: './static/js/contacts',
        about: './static/js/about',
        lectorium: './static/js/lectorium',
        science: './static/js/science',
        phd: './static/js/phd',
        apply: './static/js/apply',
        feedback: './static/js/feedback',
        news: './static/js/news',
        welcome: './static/js/welcome'
    },
    output: {
        path: path.resolve('./static/bundles/'),
        filename: '[name]-[hash].js',
        publicPath: 'http://localhost:3000/static/bundles/'
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.(jpg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: /\.(pdf|rtf|doc)$/,
                loader: 'file-loader',
              }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    }
}
