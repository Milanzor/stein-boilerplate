/**
 * Dev config
 * @param env
 * @returns mixed
 */

const Jarvis = require('webpack-jarvis');
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');

const commonPaths = require('./common-paths');

module.exports = (env) => {


    const config = {
        devtool: "eval-source-map",
    };

    config.entry = WebpackWatchedGlobEntries.getEntries([commonPaths.entryPath], {ignore: '**/*.test.js'})();

    config.plugins = [
        new Jarvis({
            port: 1337
        }),
        new WebpackWatchedGlobEntries(),
    ];

    config.devServer = {
        port: 9000,
        compress: true,
        open: true
    };

    return config;
};
