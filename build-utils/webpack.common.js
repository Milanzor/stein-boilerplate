// Get webpack plugins and other deps
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./common-paths');

// Initialize the extract plugin to extract css to a different file
const extractPlugin = new ExtractTextPlugin({
    filename: '[name].css'
});

// Check to see if we have a template for our apps index.html
const htmlPluginOptions = {
    title: 'Stein.js',
    template: './build-utils/template.index.html'
};

// Config function
module.exports = (env) => {


    return {
        // Output
        output: {
            filename: '[name].js',
            path: commonPaths.outputPath,
            publicPath: '/',
        },

        // Module
        module: {
            rules: [

                // SCSS rule
                {
                    test: /\.scss$/,
                    use: extractPlugin.extract({
                        fallback: 'style-loader',
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
            new webpack.optimize.CommonsChunkPlugin({
                name: "commons",
                filename: "commons.js",
                minChunks: 2
            }),
            new HtmlWebpackPlugin(htmlPluginOptions),
        ]
    }
};
