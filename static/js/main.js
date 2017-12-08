import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { App, Footer } from './components/App';
import { LoginForm, LogoutForm } from './components/Auth';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import * as utils from './utils.js';

import 'jquery';
import '../styles/base.css';

if (document.getElementById("logout")) {
    ReactDOM.render(<LogoutForm />, document.getElementById("logout"));
}
if (document.getElementById("login")) {
    ReactDOM.render(<LoginForm />, document.getElementById("login"));
}
// ReactDOM.render(<LogoutForm />, document.getElementById("logout"))
ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
