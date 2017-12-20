// Path
const path = require('path');

// Define options
const options = {
    outputPath: path.resolve(__dirname, 'test', 'assets'),
    moduleDirs: [path.resolve(__dirname, 'lib'), path.resolve(__dirname, 'modules'), 'node_modules'],
};


// Get webpack and some plugins
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WildcardsEntryWebpackPlugin = require('wildcards-entry-webpack-plugin');

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
        path: options.outputPath,
        publicPath: '/assets/'
    },

    // Resolve
    resolve: {
        modules: options.moduleDirs
    },

    // Devserver
    devServer: {
        contentBase: path.resolve(__dirname, 'test'),
        compress: true,
        open: true,
        port: 8080
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
    ]
};