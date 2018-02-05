/**
 * Dev config
 * @param env
 * @returns mixed
 */

const Jarvis = require('webpack-jarvis');

const commonPaths = require('./common-paths');

module.exports = (env) => {


    const config = {
        devtool: "eval-source-map",
    };


    config.plugins = [
        new Jarvis({
            port: 1337
        })
    ];

    if (typeof env === 'object' && 'devserver' in env && env.devserver) {
        config.devServer = {
            port: 9000
        };
    }

    return config;
};
