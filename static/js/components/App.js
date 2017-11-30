import React, { Component, PureComponent } from "react";
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

import * as utils from '../utils.js';

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.navbar').css("background-color", "rgba(0, 0, 0, 0.5)");
    }
    else {
        $('nav').css("background-color", "black");
    }
});

class App extends Component {
    render() {PureComponent
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

  
export default App;