/** webpack entry / rendering */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import App from './components/App';
import './styles/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const app = document.getElementById('app');


ReactDOM.render(
    <div className="container-fluid">
        <Router>
            <Route path="/" component={App} />
        </Router>
    </div>
    ,
    app
);