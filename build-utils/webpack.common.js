// Get webpack plugins and other deps
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./common-paths');

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
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',

                    ]
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
        optimization: {
            splitChunks: {
                chunks: "all",
                minChunks: 2,
            }
        },
        // Plugins
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin(htmlPluginOptions),
        ]
    };
};
