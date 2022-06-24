/* eslint-disable */
module.exports = {
    mode: 'development',
    entry: {
        acnlyzer: './src/acnlyzer.ts',
        cli: './src/cli.ts'
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};
