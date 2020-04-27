// eslint-disable-next-line
const path = require('path');

module.exports = {
    target: 'node',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [/node_modules/, /setupTests\.ts/, /\.test\./],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
};
