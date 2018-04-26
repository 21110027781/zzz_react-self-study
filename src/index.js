import React from 'react';
import ReactDOM from 'react-dom';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/semantic-ui-css/semantic.min.css';
import '../node_modules/react-select/dist/react-select.css';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import appReducers from './reducers/indexReducer'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
    appReducers,
    applyMiddleware(thunk)
);
// console.log(store.getState())


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
