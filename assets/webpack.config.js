const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WildcardsEntryWebpackPlugin = require('wildcards-entry-webpack-plugin');
const webpack = require('webpack');

// Initialize the extract plugin to extract css to a different file
const extractPlugin = new ExtractTextPlugin({
    filename: '[name].min.css',
});

// Config
module.exports = {

    // Entry
    entry: WildcardsEntryWebpackPlugin.entry(path.resolve(__dirname, 'entry/**/*.js'), false, false, {ignore: '**/*.test.js'}),

    // Output
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '..', 'private_html', 'assets'),
        publicPath: '/assets/'
    },

    resolve: {
        modules: [path.resolve(__dirname, 'lib'), path.resolve(__dirname, 'modules'), 'node_modules']
    },

    // Module
    module: {
        rules: [

            // SCSS rule
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },

            // Babel rule
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],

            },

            // Provide plugin, jquery
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },

            // Font rules
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                },
            }

        ],
    },

    // Plugins
    plugins: [
        extractPlugin,
        new WildcardsEntryWebpackPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
            minChunks: 2,
        }),
    ],

    // Devserver
    devServer: {
        contentBase: path.join(__dirname, 'private_html'),
        compress: true,
        open: true,
        port: 8080
    }
};
