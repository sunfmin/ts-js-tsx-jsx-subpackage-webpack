'use strict';

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.(ts|js)?x?$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js', '.tsx', '.jsx']
    }
};
