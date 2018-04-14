import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';


var initialState = {
    status: false
};

var reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer);
console.log(store.getState())


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
