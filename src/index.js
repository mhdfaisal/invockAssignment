import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import {createStore,compose, applyMiddleware} from 'redux';
import reducers from './Components/reducers/index';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.querySelector("#root"));