/**
 * Webpack Plugins
 */
const DefinePlugin = require('./node_modules/webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('./node_modules/webpack-html-plugin');
const UglifyJsPlugin = require('./node_modules/webpack/lib/optimize/UglifyJsPlugin');

//const webpack = require('./node_modules/webpack/lib/webpack.js');
var webpack = require("webpack");
var commonChunkPlugin = webpack.optimize.CommonsChunkPlugin;

/**
 * Webpack Constants
 */
const Environment = 'localhost';
const API_URL = 'http://dev.api.com';


module.exports = {
    entry: {
        app: "./scripts/boot.ts",
        vendor: ["./wwwroot/libs/core-js/client/core.min.js",
                 "./wwwroot/libs/reflect-metadata/Reflect.js",
                 "./wwwroot/libs/systemjs/dist/system-polyfills.js",
                 "./wwwroot/libs/zone.js/dist/zone.js"
        ],
    },
    output: {
        path: __dirname,
        filename: './appScripts/dist/dev.bundle.js',
    },
    devtool:'source-map',
    resolve: { extensions: ['', '.js', '.ts'] },
    module: {
        loaders: [{
            test: /\.ts/, loaders : ['ts-loader'], exclude : /node_modules/
        }]
    },
    plugins: [
                new UglifyJsPlugin({
                    minimize: true,
                    sourceMap: false,
                    output: { comments: false },
                    compressor: { warnings: false }
                }
            ),
       /**
        * Plugin: DefinePlugin
        * Description: Define free variables.
        * Useful for having development builds with debug logging or adding global constants.
        *
        * Environment helpers
        *
        * See: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
        */
       // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
       new DefinePlugin({
        'Environment': JSON.stringify(Environment),
        'API_URL': JSON.stringify(API_URL)
       }),
        //new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
        new commonChunkPlugin({ name: 'vendor', filename: './appScripts/dist/vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            path: __dirname + '/wwwroot',
            filename: 'index.html',
            inject: 'body',
            template: 'wwwroot/index-template.html'
        }),
    ]
};