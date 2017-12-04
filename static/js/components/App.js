import React, { Component, PureComponent } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import AppBar from 'material-ui/AppBar';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

import '../../styles/base.css';
import '../../styles/header.css';
import '../../styles/footer.css';

import * as utils from '../utils.js';

// images
import logoBelozer from '../../img/logo_beloz.gif';
import logoMBC from '../../img/logo_mbc.gif';
import MSU from '../../img/msu.gif';
import logoMitotech from '../../img/logo_mitotech.gif';
import FBB from '../../img/logo_fbb.gif';

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.navbar').css("background-color", "rgba(0, 0, 0, 0.5)");
    }
    else {
        $('nav').css("background-color", "black");
    }
});


export class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/stuff">Stuff</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>

                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/stuff" component={Stuff}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export class Footer extends Component {
    render() {
        console.log(1)
        return(
            <div>
                <Row>
                    <br />
                    <Col md={2}>
                        <ul className="logo-list">
                            <li><a href="http://www.belozersky.msu.ru/en.html" target="blank"><img src={logoBelozer} /></a></li>
                            <br />
                            <li><a href="http://biocentr.msu.ru/" target="blank"><img src={logoMBC} /></a></li>
                            <br />
                            <li><a href="http://skq-project.ru/" target="blank"><img src={logoMitotech} /></a></li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <span className="glyphicon glyphicon-map-marker"></span> <strong className="strong-text"> Postal adress</strong>: <br />
                        119234, Moscow, Leninsky gory MSU 1, building 73 <br />
                        Department of Bioengineering and Bioinfomatics, room 433 <br />
                        <span className="glyphicon glyphicon-phone-alt"></span><strong className="storng-text"> Phone</strong>: <br />
                        +7 (495) 939-41-95 <br />
                        +7 (495) 939-10-00 <br />
                        <span className="glyphicon glyphicon-envelope"></span> <strong className="strong-text"> E-mail</strong>: <br />
                        Ebanoe_dermo@dermo.com 
                    </Col>
                    <Col md={2}>
                        <ul className="logo-list">
                            <li className="align-center"><a href="http://www.msu.ru/" target="blank"><img src={MSU} /></a></li>
                            <br />
                            <li className="align-center"><a href="https://vk.com/bioengmsu" target="blank"><img src={FBB} height="50" width="50" /></a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
}

// glyphicon glyphicon-envelope
// glyphicon glyphicon-phone-alt