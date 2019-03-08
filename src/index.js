// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

import './sass/index.scss';

import { createStore } from 'redux';
import reducers from './reducers';
import {Provider} from "react-redux";

const store = createStore(reducers);

const reactElement = (
	<Provider store={store}>
		<App/>
	</Provider>
);
const root = document.getElementById('root');

ReactDOM.render(reactElement, root);