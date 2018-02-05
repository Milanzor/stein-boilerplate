const path = require('path');

module.exports = {
    entryPath: path.resolve(__dirname, '..', 'entry', '**', '*.js'),
    outputPath: path.resolve(__dirname, '..', 'public')
};
