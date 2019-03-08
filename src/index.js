// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

import './sass/index.scss';

import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

const root = document.getElementById('root');

ReactDOM.render(<App />, root);