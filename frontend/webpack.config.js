const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.css$/, use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            },
            {
                test: /\.(png|jp(e*)g)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: "./build/",
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new ExtractTextPlugin('./styles.css'),
        new HtmlWebpackPlugin({
            title: 'Jobi React',
            template: './src/index.html'
        })
    ]
}
