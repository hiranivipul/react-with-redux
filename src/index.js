import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'

import {combineReducers, createStore} from 'redux'
import productsReducer from './reducers/product-reducer'
import userReducer from './reducers/user-reducer'



const allReducers = combineReducers({
    user: userReducer,
    products: productsReducer
})

const store = createStore(
    allReducers,
    {
        products: [{name: 'iphone'}],
        user: 'vipul'
    },
    window.devToolsExtension && window.devToolsExtension(),
);

ReactDOM.render(<Provider store={store}><App aRendomProps='whatever'/></Provider>, document.getElementById('root'));
registerServiceWorker();
