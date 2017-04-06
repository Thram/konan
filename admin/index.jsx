/**
 * Created by thram on 3/04/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { addMiddleware } from 'thrux';
import logger from 'thrux-logger';
import './stylesheets/index.css';
import App from './components/App';

addMiddleware(logger());

ReactDOM.render(<App />, document.getElementById('konan'));
