import React, { Component } from 'react';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

import * as utils from '../utils.js';

export class RegisterForm extends Component {
    constructor (){
        super();

        this.state = {
            username: null,
            email: null,
            password1: null,
            password2: null,
            emailError: null,
            passMatchError: null
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword1 = this.onChangePassword1.bind(this);
        this.onChangePassword2 = this.onChangePassword2.bind(this);
        this.unsetPasswordError = this.unsetPasswordError.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this.setPasswordError = this.setPasswordError.bind(this);
    }

    _handleKeyDown (event) {
        if(event.which == 13) {
            event.preventDefault();
                this.onSubmit();
        }
    }

    componentWillMount () {
        document.addEventListener("keydown", this._handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyDown);
    }

    onChangeAction () {
        if (this.state.status == 'register') {
            this.setState({
                status: 'login',
            });

        } else {
            this.setState({
                status: 'register',
            })
        }
        this.returnToDefault();
    }

    onChangeUsername (e) {
        this.setState({
            username: e.target.value,
            emailError: null
        });
    }

    onChangeEmail (e) {
        this.setState({
            email: e.target.value,
            emailError: null
        });
    }

    onChangePassword1 (e) {
        this.setState({
            password1: e.target.value,
            emailError: null
        });
        this.unsetPasswordError();
    }

    onChangePassword2 (e) {
        this.setState({
            password2: e.target.value,
            emailError: null
        });
        this.unsetPasswordError();
    }

    setPasswordError () {
        this.setState({
            passMatchError: 'Passwords do not match.'
        });
    }

    unsetPasswordError () {
        this.setState({
            passMatchError: null
        });
    }

    onSubmit () {
    
        let data =  {
            username: this.state.username,
            email: this.state.email,
            password1: this.state.password1,
            password2: this.state.password2
        }
        if (utils.validateEmail(data.email)){
            if (this.state.password1 == this.state.password2){
                 $.post('/users/signup/', data, function (response) {
                    if ( !response.error ) {
                        window.location = '/';
                    }
                });
            } else {
                this.setPasswordError();
            }
        } else {
            this.setState({
                emailError: 'Wrong e-mail, use a correct one.'
            })
        }

    }

    _handleKeyDown (event) {
        if(event.which == 13) {
            event.preventDefault();
                this.onSubmit();
        }
    }
    
    render () {
        var header = 'Registration';

        return (
            <MuiThemeProvider>
                <div className="align-center">
                    <TextField hintText="username" onChange={this.onChangeUsername} /><br />
                    <TextField hintText="email" onChange={this.onChangeEmail} errorText={this.state.emailError} /><br />
                    <TextField hintText="password" onChange={this.onChangePassword1} errorText={this.state.assMatchError} type="password"/><br />
                    <TextField hintText="password" onChange={this.onChangePassword2} errorText={this.state.passMatchError} type="password"/><br />
                    <RaisedButton label="Register" onClick={this.onSubmit} backgroundColor="#ffd1dc" /><br /><br />
                </div>
            </MuiThemeProvider>
        )
    }
}

export class LoginForm extends Component {
    constructor () {
        super();
        this.state = {
            open: false,
            username: null, 
            password: null,
            passwordError: null 
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
        this.redirectToRegister = this.redirectToRegister.bind(this);

    }

    redirectToRegister (e) {
        location.href = "/users/auth";
    }

    onSubmit () {
        let data =  {
            username: this.state.username,
            email: this.state.email,
            password1: this.state.password,
            password2: this.state.password
        }

        $.post('/users/login/', data, function (response) {
            if (response.response != 'error') {
                window.location = '/';
            } else {
                this.setState({
                    passwordError: "Wrong password" 
                });
            }
        }.bind(this));
    }

    handleOpen (){
      this.setState({open: true});
    };

    handleClose (){
      this.setState({open: false});
    };

    _handleKeyDown (event) {
        if(event.which == 13) {
            event.preventDefault();
                this.onSubmit();
        }
    }

    componentWillMount () {
        document.addEventListener("keydown", this._handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyDown);
    }

    onChangeUsername (e) {
        this.setState({
            username: e.target.value,
            passwordError: null
        });
    }

    onChangePassword (e) {
        this.setState({
            password: e.target.value,
            passwordError: null
        });
    }

    render() {
      return (
        <MuiThemeProvider>
            <div >
            <span onClick={this.handleOpen}><span className="glyphicon glyphicon-share-alt"></span>Login</span>
            <Dialog
                title="Login"
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                className="align-center"
            >   
            <TextField hintText="username" onChange={this.onChangeUsername} /><br />
            <TextField hintText="password" onChange={this.onChangePassword} errorText={this.state.passwordError} type="password"/><br />
            <RaisedButton label="Login" onClick={this.onSubmit} backgroundColor="#ffd1dc" /><br /><br />
            Not registered yet, Register now <br /><br />
            <RaisedButton label="Register" onClick={this.redirectToRegister} backgroundColor="#ffd1dc" />
            </Dialog>
            </div>
        </MuiThemeProvider>
      );
    }
  }
  



export class LogoutForm extends Component {
    constructor(){
        super();

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout () {
        $.post('/users/logout/', {}, function(response) {
            if ( !response.error ) {
                window.location.href = '/';
                location.reload();
            }
        });
    }

    render () {
        return (
            <span onClick={this.onLogout}><span className="glyphicon glyphicon-share-alt"></span>Logout</span>
        )
    }
}



