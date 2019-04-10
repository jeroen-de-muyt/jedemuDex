const webpack = require('webpack');

module.exports = {
    entry: './src/main/react/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/src/main/resources/static/js',
        publicPath: '/',
        filename: 'bundle.js'
    },
    externals: {
        'react': 'React'
    },
    devtool: 'source-map'
};