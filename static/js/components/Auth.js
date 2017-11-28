import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';


import * as utils from '../utils.js';

export class AuthForm extends Component {
    constructor (){
        super();

        this.state = {
            status: 'login',

            username: null,
            email: null,
            password: null,


        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onChangeAction = this.onChangeAction.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.returnToDefault = this.returnToDefault.bind(this);
        this._handleKeyDown = this._handleKeyDown.bind(this);
    }

    returnToDefault () {
        $('.email').removeClass('border-error');
        $('.password').removeClass('border-error');
        $('#auth-password-fail').hide();
        $('#register-email-fail').hide();
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
            username: e.target.value
        });
        this.returnToDefault();
    }

    onChangeLogin (e) {
        this.setState({
            email: e.target.value
        });
        this.returnToDefault();
    }

    onChangePassword (e) {
        this.setState({
            password: e.target.value
        });
        this.returnToDefault();
    }

    onSubmit () {
    
        let data =  {
            username: this.state.username,
            email: this.state.email,
            password1: this.state.password,
            password2: this.state.password
        }

        let urlMap = {
            register: '/users/signup/',
            login: '/users/login/'
        }

        if (this.state.status == 'register') {
            if (utils.validateEmail(data.email)){
                $.post(urlMap[this.state.status], data, function (response) {
                    if ( !response.error ) {
                        window.location = '/';
                    }
                });
            } else {
                $('.email').addClass('border-error');
                $('#register-email-fail').show();
            }

        }
        else {
            $.post(urlMap[this.state.status], data, function (response) {
                if (response.response != 'error') {
                    window.location = '/';
                } else {
                    $('.password').addClass('border-error');
                    $('#auth-password-fail').show();
                }
            }.bind(this));
        }

    }

    render () {
        let textMap = {
            register: {
                header: 'Registration',
                action: 'Register',
                changeActionTitle: 'Sign In'
            },
            login: {
                header: 'Sign In',
                action: 'Sign In',
                changeActionTitle: 'Register'
            }
        }

        return (
            <Form className="auth-form" horizontal bsSize="small">
                <Col mdOffset={2} md={10}>
                    <h4>{textMap[this.state.status].header}</h4>
                </Col>

                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} md={2}>Username</Col>
                    <Col md={8}>
                        <FormControl onChange={this.onChangeUsername} type="username" className="username" placeholder="Username" /> 
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} md={2}>Email</Col>
                    <Col md={8}>
                        <FormControl onChange={this.onChangeLogin} type="email" className="email" placeholder="Email" /> 
                    </Col>
                    <Col md={2}>
                        <p className="text-error-hidden" id="register-email-fail">
                            Wrong e-mail
                        </p>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} md={2}>Password</Col>
                    <Col md={8}>
                        <FormControl onChange={this.onChangePassword} type="password" className="password" placeholder="Password" /> 
                    </Col>
                    <Col md={2}>
                        <p className="text-error-hidden" id="auth-password-fail">
                            Wrong credentials
                        </p>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col mdOffset={2} md={8}>
                        <Button onClick={this.onSubmit}>{textMap[this.state.status].action}</Button>
                    </Col>
                    <Col md={2}>
                        <a className="auth-change-action" onClick={this.onChangeAction}>{textMap[this.state.status].changeActionTitle}</a>
                    </Col>
                </FormGroup>
            </Form>
        )
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
                console.log(response);
                location.reload();
            }
        });
    }

    render () {
        return (
            <span onClick={this.onLogout}>Logout</span>
        )
    }
}



