import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import { LogoutForm } from './components/Auth';

import * as utils from './utils.js';

import 'jquery';
import '../styles/base.css';

ReactDOM.render(<LogoutForm />, document.getElementById("logout"));
ReactDOM.render(<App />, document.getElementById("app"));

