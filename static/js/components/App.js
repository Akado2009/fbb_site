import React, { Component, PureComponent } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ScrollToTop from 'react-scroll-up';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import Animate from 'rc-animate';
import ScrollAnim from 'rc-scroll-anim';
const ScrollOverPack = ScrollAnim.OverPack;

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
import APPLY from '../../img/apply.jpg';
import IMAGE from '../../img/students.jpg';

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.navbar').css("background-color", "rgba(0, 0, 0, 0.5)");
        var menu = document.getElementsByClassName('navbar')[0];
        $(menu).mouseenter(function() {
            $(this).css("background-color", "black");
        }).mouseleave(function() {
            $(this).css("background-color", "rgba(0, 0, 0, 0.5)");
        })
    }
    else {
        $('nav').css("background-color", "black");
        var menu = document.getElementsByClassName('navbar')[0];
        $(menu).off("mouseenter");
        $(menu).off("mouseleave");
    }
});


export class App extends Component {

    constructor () {
        super ();

        this.changeToStudents = this.changeToStudents.bind(this);
        this.changeToApply = this.changeToApply.bind(this);
        // this.changeToNews = this.changeToNews.bind(this);
    }

    changeToApply (e) {
        window.location = 'http://127.0.0.1:8000/apply/';
    }

    changeToStudents (e) {
        window.location = 'http://127.0.0.1:8000/students/';
    }

    render() {
        return (
                <div>
                    <Row>
                    <Col mdOffset={3}>
                    <ScrollOverPack
                        id="news-info"
                        playScale="50vh"
                        always={false}
                    >
                        <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
                            News
                        </TweenOne>
                        <QueueAnim key="1">
                            <div key="0" className="demo">NOVOST 1</div>
                            <div key="1" className="demo" style={{ backgroundColor: '#F38EAD' }}> NOVOST 2</div>
                            <div key="2" className="demo">NOVOST 3</div>
                            <div key="3" className="demo">NOVOST 4</div>
                            <div key="4" className="demo">NOVOST 5</div>
                            <div key="5" className="demo">NOVOST 6</div>
                        </QueueAnim>
                    </ScrollOverPack>
                    <ScrollOverPack
                        id="apply-info"
                        playScale="50vh"
                        always={false}
                    >
                        <TweenOne className="tween-one" key="0">
                        Students
                        </TweenOne>
                        <QueueAnim key="1" >
                        <Row>
                            <Col md={8}>
                                <div key="0"><img src={APPLY} /></div>
                            </Col>
                            <Col md={4}>
                                <div key="1" className="demo" style={{ backgroundColor: 'white' }}>
                                    <h2>Поступаете? </h2>
                                    <p> Играй с профитом!
                                    Оформи дебетовую карту ALL Games и получай выгоду! 
                                    - Вернем 5% за покупки на игровых платформах 
                                    - До 2% в рублях будет возвращаться с других покупок 
                                    </p>
                                    <MuiThemeProvider>
                                        <RaisedButton onClick={this.changeToApply} backgroundColor="#ffd1dc" label="Информация >" />
                                    </MuiThemeProvider>
                                </div>
                            </Col>  
                        </Row>
                        </QueueAnim>
                    </ScrollOverPack>
                    <ScrollOverPack
                        id="students-info"
                        playScale="50vh"
                        always={false}
                    >
                        <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
                        Apply
                        </TweenOne>
                        <QueueAnim key="1">
                        <Row>
                            <Col md={4}>
                                <div key="1" className="demo" style={{ backgroundColor: 'white' }}>
                                    <h2>Уже учитесь? </h2>
                                    <p> Играй с профитом!
                                    Оформи дебетовую карту ALL Games и получай выгоду! 
                                    - Вернем 5% за покупки на игровых платформах 
                                    - До 2% в рублях будет возвращаться с других покупок 
                                    </p>
                                    <MuiThemeProvider>
                                        <RaisedButton onClick={this.changeToStudents} backgroundColor="#ffd1dc" label="Информация >" />
                                    </MuiThemeProvider>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div key="0"><img src={IMAGE} /></div>
                            </Col>
                        </Row>
                        </QueueAnim>
                    </ScrollOverPack>
                    <ScrollToTop showUnder={50}>
                        <span className="top"></span>
                    </ScrollToTop>
                    </Col>
                    </Row>
                </div>
        );
    }
}

class Home extends React.Component {
    render() {
      return (
        <div id="main-info">
          <h2>HELLO</h2>
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>
          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
          <ScrollToTop showUnder={50}>
          <span className="top"></span>
        </ScrollToTop>
        </div>
      );
    }
  }

export class Footer extends Component {
    render() {
        return(
            <div className="container">
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
