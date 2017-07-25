/** express server */
import express from 'express';
import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import config from './webpack.config.dev';
import open from 'open';

const port = process.env.PORT || 5000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
    console.log('Serving ', req.url);
    res.sendFile(path.join( __dirname + '/src/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`)
    }
});