// Get webpack plugins and other deps
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const commonPaths = require("./common-paths");

// Config function
module.exports = (env) => {

    return {
        // Output
        output: {
            filename: "[name].js",
            path: commonPaths.outputPath,
            chunkFilename: "commons.js",
            publicPath: "/",
        },

        // Module
        module: {
            rules: [

                // SCSS rule
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",

                    ]
                },

                // Babel rule
                {
                    test: /\.js$/,
                    use: [
                        "babel-loader",
                    ],

                },

                // Font rules
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[ext]"
                        }
                    },
                }

            ],
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    commons: {
                        name: "commons",
                        chunks: "all",
                        minChunks: 2,
                        enforce: true
                    },
                },
            }
        },
        // Plugins
        plugins: [
            new MiniCssExtractPlugin(),
        ]
    };
};
