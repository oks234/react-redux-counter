// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import './sass/index.scss';

const testFunction = () => {
	[1, 2, 3].forEach(number => console.log(number));
};

testFunction();

ReactDOM.render(<App />, document.getElementById('root'));