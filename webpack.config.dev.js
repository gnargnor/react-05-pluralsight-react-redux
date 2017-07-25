import webpack from 'webpack';
import path from 'path';

module.exports = {
    //debug settings
    devtool: 'inline-source-map',
    //webpack entry point
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, './src/index.js'),
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'app.bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    
    module: {
        rules: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']},
            {
                test: /(\.css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {sourcemap: true}
                    }
                ]
            },
            //bootstrap related
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};