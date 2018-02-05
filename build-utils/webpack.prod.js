/**
 * Production config
 * @param env
 * @returns mixed
 */
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');
const commonPaths = require('./common-paths');

module.exports = (env) => {

    return {
        entry: WebpackWatchedGlobEntries.getEntries(
            [
                commonPaths.entryPath
            ],
            {
                ignore: '**/*.test.js'
            }
        ),
        devtool: "source-map",
        plugins: [
            new WebpackWatchedGlobEntries(),
        ],
    };
};
