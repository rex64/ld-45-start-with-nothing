const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.ts', //cosa fa entry?
    devtool: "eval-source-map",
    module: { //cosa e un module?
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/ // questo e necessario?
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader'
            }
        ]
    },
    resolve: { // resolve?? ha altre opzioni oltre le estensioni??
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') //perche entry non ha bisogno di usare path.resolve??
    },
    devServer: {
        port: 8080
    },
    plugins: [
        new CopyPlugin([
            {
                from: 'assets',
                to: 'assets',
                ignore: ['.DS_Store']
            },
        ])
    ],
}
