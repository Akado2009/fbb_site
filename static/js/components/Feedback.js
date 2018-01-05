import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import DataTables from 'material-ui-datatables';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import '../../styles/feedback.css';
import '../../styles/lectorium.css';

export class FeedbackForm extends React.Component {
    render () {
        return (
            <HashRouter>
                <div id="feedback-info">
                    <Row>
                        <Col mdOffset={3}>
                        <ul className="horizontal-menu-router">
                            <li><NavLink exact to="/">FAQ</NavLink></li>
                            <li><NavLink to="/feedback">Feedback</NavLink></li>
                        </ul>
                        <br />
                        <div>
                            <Route exact path="/" component={FAQ}/>
                            <Route path="/feedback" component={Feedback}/>
                        </div>
                        </Col>
                    </Row>
                </div>
            </HashRouter>
        )
    }
}


class Feedback extends React.Component {

    constructor () {
        super ();
        
        this.state = {
            feedback: null,
            userFeedback: '',
            author: '',
            email: '',
        }

        this.getFeedbackCallback = this.getFeedbackCallback.bind(this);
        this.handleUserFeedbackChange = this.handleUserFeedbackChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.sendFeedback = this.sendFeedback.bind(this);
    }

    componentDidMount () {
        $.get('/fbb_site/get_feedback', this.getFeedbackCallback);
    }

    getFeedbackCallback (data) {
        this.setState({
            feedback: data.data
        });
        console.log(data);
    }

    handleUserFeedbackChange (e) {
        this.setState({
            userFeedback: e.target.value
        });
    }

    handleAuthorChange (e) {
        this.setState({
            author: e.target.value
        });
    }

    handleEmailChange (e) {
        this.setState({
            email: e.target.value
        });
    }
    
    sendFeedback (e) {
        let data = {
            email: this.state.email,
            author: this.state.author,
            content: this.state.userFeedback
        }

        $.post('/fbb_site/create_feedback/', data, function (data) {
            console.log('success');
        });
        window.location.reload();
    }
    
    render () {
        let info = [];
        if (this.state.feedback) {
            for(let feed of this.state.feedback) {
                info.push(
                    <div className="simple-feedback">
                        <strong>Author:</strong> {feed.author} <br /><br />
                        <strong>Feedback:</strong><p className="feedback-content"> {feed.content} </p><br />
                    </div>
                );
            }
        }
        return (
            <div id="feedback-info">
                <MuiThemeProvider>
                        <TextField
                            onChange={this.handleAuthorChange}
                            value={this.state.author}
                            hintText="Your name"
                        />
                </MuiThemeProvider>
                <br />
                <MuiThemeProvider>
                    <TextField
                            onChange={this.handleEmailChange}
                            value={this.state.email}
                            hintText="Your e-mail"
                        />
                </MuiThemeProvider>
                <br />
                <MuiThemeProvider>
                    <TextField
                        style={{textAlign: 'left'}}
                        floatingLabelText="Feedback"
                        multiLine={true}
                        rows={5}
                        onChange={this.handleUserFeedbackChange}
                        value={this.state.userFeedback}
                        style ={{width: '70%'}}
                        inputStyle ={{width: '70%'}}
                    />
                </MuiThemeProvider>
                <br />
                <MuiThemeProvider>
                    <RaisedButton onClick={this.sendFeedback} backgroundColor="#ffd1dc" label="Submit" />
                </MuiThemeProvider>
                <br /><br /><br />
                {info}
            </div>
        )
    }
}


class FAQ extends React.Component {
    constructor () {
        super ();

        this.state = {
            questions: null,
        }

        this.getQuestionsCallBack = this.getQuestionsCallBack.bind(this);
    }

    componentDidMount () {
        $.get('/fbb_site/get_faqs/', this.getQuestionsCallBack);
    }

    getQuestionsCallBack (data) {
        this.setState({
            questions: data.data
        });
    }

    render () {
        let info = [];
        if (this.state.questions) {
            for(let faq of this.state.questions) {
                info.push(
                    <div className="simple-question">
                        <strong>Question:</strong> {faq.question} <br /><br />
                        <strong>Answer:</strong><p className="faq-answer"> {faq.answer} </p><br />
                        {/* <p dangerouslySetInnerHTML={{__html: marked(faq.answer)}} /> */}
                    </div>
                )
            }
        }

        return (
            <div id="faq-info"> 
                {info}
            </div>
        )
    }
}