/** webpack entry / rendering */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import App from './components/App';
import './styles/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const app = document.getElementById('app');
/** initial state is passed into your reducers - initializing state here would override all of those defaults. */
const store = configureStore();


ReactDOM.render(
    <div className="container-fluid">
        <Provider store={store}>
            <Router>
                <Route path="/" component={App} />
            </Router>
        </Provider>
    </div>
    ,
    app
);