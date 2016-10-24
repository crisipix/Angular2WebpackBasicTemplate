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
    }

};