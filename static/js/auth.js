import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { AuthForm } from './components/Auth';


import 'jquery';
import '../styles/base.css';


ReactDOM.render(<AuthForm />, document.getElementById("auth"))

