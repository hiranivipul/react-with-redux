import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'

import thunk from 'redux-thunk'
import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import productsReducer from './reducers/product-reducer'
import userReducer from './reducers/user-reducer'



const allReducers = combineReducers({
    user: userReducer,
    products: productsReducer
})

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension(),
)

const store = createStore(
    allReducers,
    {
        products: [{name: 'iphone'}],
        user: 'Admin'
    },
   allStoreEnhancers
);

ReactDOM.render(<Provider store={store}><App aRendomProps='whatever'/></Provider>, document.getElementById('root'));
registerServiceWorker();
