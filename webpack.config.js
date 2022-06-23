module.exports = {
    mode: 'development',
    entry: './acnlyzer.ts',
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