import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './reducers/index';
import App from './components/app';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let store = createStore(Reducers);

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
