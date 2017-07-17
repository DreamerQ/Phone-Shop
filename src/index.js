import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import reducers from 'reducers'

import Layout from 'conteiners/layout'
import Phones from 'conteiners/phones'

import Phone from 'conteiners/phone'


const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Phones}/>
                <Route path='/categories/:id' component={Phones}/>
            </Route>
            <Route path='/phones/:id' component={Phone}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);