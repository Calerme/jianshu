import React from 'react';
import ReactDOM from 'react-dom';
import 'normalizecss/normalize.css';
import './style.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
