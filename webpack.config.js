const webpackMerge = require('webpack-merge');

// Config
module.exports = (env) => {
    if (typeof env !== 'object' || !'env' in env) {
        throw new Error('Provide --env.env=prod or dev in your command');
    }
    const envConfig = require(`./build-utils/webpack.${env.env}`)(env);
    const commonConfig = require(`./build-utils/webpack.common`)(env);
    return webpackMerge(commonConfig, envConfig);
};
