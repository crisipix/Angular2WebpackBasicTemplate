/**
 * Webpack Plugins
 */
const DefinePlugin = require('./node_modules/webpack/lib/DefinePlugin');


/**
 * Webpack Constants
 */
const Environment = 'production';
const API_URL = 'http://production.api.com'


module.exports = {
    //entry: "./scripts/boot",
    output: {
        path: __dirname,
        filename: 'bundle.js'
        //filename: './wwwroot/appScripts/dist/bundle.js'
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
    ]

};