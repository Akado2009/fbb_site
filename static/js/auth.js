import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { LoginForm, RegisterForm } from './components/Auth';


import 'jquery';
import '../styles/base.css';

if (document.getElementById("login")) {
    ReactDOM.render(<LoginForm />, document.getElementById("login"));
}
ReactDOM.render(<RegisterForm />, document.getElementById("auth"))

