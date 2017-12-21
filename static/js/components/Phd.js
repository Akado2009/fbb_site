import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import DataTables from 'material-ui-datatables';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
  

import '../../styles/science.css';


export class PhdForm extends React.Component {
    render () {
        return (
            <HashRouter>
                <div id="phd-info">
                    <Row>
                        <Col mdOffset={3}>
                        <ul className="horizontal-menu-router">
                            <li><NavLink exact to="/">Programms</NavLink></li>
                            <li><NavLink to="/schedule">Schedule</NavLink></li>
                            <li><NavLink to="/results">Results of exams</NavLink></li>
                        </ul>
                        <br />
                        <div>
                            <Route exact path="/" component={Programms}/>
                            <Route path="/schedule" component={Schedule}/>
                            <Route path="/results" component={Results}/>
                        </div>
                        </Col>
                    </Row>
                </div>
            </HashRouter>
        )
    }
}


class Programms extends React.Component {
    
    render () {
        return (
            <div> Programms </div>
        )
    }
}


class Schedule extends React.Component {
    
    render () {
        return (
            <div> Schedule </div>
        )
    }
}


class Results extends React.Component {

    render () {
        return (
            <div> Results </div>
        )
    }
}