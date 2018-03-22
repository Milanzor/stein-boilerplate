// Get webpack plugins and other deps
const commonPaths = require("./common-paths");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Initialize the extract plugin to extract css to a different file
const extractPlugin = new ExtractTextPlugin({
    filename: '[name].css'
});
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
                    loader: ExtractTextPlugin.extract({
                        use: [
                            "css-loader",
                            "sass-loader",
                        ]
                    })
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
            extractPlugin,
        ]
    };
};
