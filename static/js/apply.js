import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { App, Footer } from './components/App';
import { LoginForm, LogoutForm } from './components/Auth';
import { ProfileForm } from './components/Profile';
import { ApplyForm } from './components/Apply';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import * as utils from './utils.js';

import 'jquery';
import '../styles/base.css';

if (document.getElementById("logout")) {
    ReactDOM.render(<LogoutForm />, document.getElementById("logout"));
    ReactDOM.render(<ProfileForm />, document.getElementById("profile"));
}
if (document.getElementById("login")) {
    ReactDOM.render(<LoginForm />, document.getElementById("login"));
}
ReactDOM.render(<ApplyForm />, document.getElementById("apply"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
