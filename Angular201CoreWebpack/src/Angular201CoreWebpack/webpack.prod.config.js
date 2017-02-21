/**
 * Webpack Plugins
 */
const DefinePlugin = require('./node_modules/webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('./node_modules/webpack-html-plugin');
var webpack = require("webpack");
var commonChunkPlugin = webpack.optimize.CommonsChunkPlugin;
    

/**
 * Webpack Constants
 */
const Environment = 'production';
const API_URL = 'http://production.api.com'


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
        filename: './appScripts/dist/prod.[chunkhash].bundle.js'
    },
    devtool:'source-map',
    resolve: { extensions: ['', '.js', '.ts'] },
    module: {
        loaders: [{
            test: /\.ts/, loaders : ['ts-loader'], exclude : /node_modules/
        }]
    },
    plugins: [

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
        new commonChunkPlugin({ name: 'vendor', filename: './appScripts/dist/vendor.[chunkhash].bundle.js' }),

       /*
        * https://offering.solutions/blog/articles/2016/08/27/how-to-set-up-angular-and-webpack-in-visual-studio-with-asp-net-core/
        * 
        * 
        */
        new HtmlWebpackPlugin({
            path: __dirname + '/wwwroot',
            filename: 'index.html',
            inject: 'body',
            template: 'wwwroot/index-template.html'
        }),
    ]
};