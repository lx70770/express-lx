import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.css';

import 'antd/dist/antd.css';
import FormPage from "./container/form-page/form-page";
import InfoConcer from './container/info-concer-page/info-concer-page';

import reducer from './reducer';

/** @namespace window.devToolsExtension */
const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={FormPage}/>
                    <Route path="/infopage" component={InfoConcer}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));