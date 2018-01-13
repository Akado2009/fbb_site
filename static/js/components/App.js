import React, { Component, PureComponent } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
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

// import '../../styles/base.css';
import '../../styles/header.css';
import '../../styles/footer.css';
import '../../styles/lectorium.css';
import '../../styles/navbar.css';

import * as utils from '../utils.js';

// images
import logoBelozer from '../../img/logo_beloz.gif';
import logoMBC from '../../img/logo_mbc.gif';
import MSU from '../../img/msu.gif';
import logoMitotech from '../../img/logo_mitotech.gif';
import FBB from '../../img/logo_fbb.gif';
import APPLY from '../../img/apply.jpg';
import IMAGE from '../../img/students.jpg';

// $(window).scroll(function () {
//     if ($(document).scrollTop() > 50) {
//         $('.navbar').css("background-color", "rgba(0, 0, 0, 0.5)");
//         var menu = document.getElementsByClassName('navbar')[0];
//         $(menu).mouseenter(function() {
//             $(this).css("background-color", "black");
//         }).mouseleave(function() {
//             $(this).css("background-color", "rgba(0, 0, 0, 0.5)");
//         })
//     }
//     else {
//         $('nav').css("background-color", "black");
//         var menu = document.getElementsByClassName('navbar')[0];
//         $(menu).off("mouseenter");
//         $(menu).off("mouseleave");
//     }
// });

export const App = (state) =>
    <div id="main">
        <News />
        <Apply />
        <Students />
    </div>

class News extends Component {

    constructor () {
        super ();

        this.state = {
            news: null,
            currentNews: null,
            open: false
        }

        this.changeToStudents = this.changeToStudents.bind(this);
        this.changeToApply = this.changeToApply.bind(this);
        this.getNewsCallback = this.getNewsCallback.bind(this);
        this.getNews = this.getNews.bind(this);
        this.handleClose = this.handleClose.bind(this);
        // this.changeToNews = this.changeToNews.bind(this);
    }

    componentDidMount () {
        $.get('/fbb_site/get_news/5/', this.getNewsCallback);
    }

    getNewsCallback (data) {
        this.setState({
            news: data.data,
            currentNews: data.data[0]
        });
        console.log(this.state.news);
    }

    changeToApply (e) {
        window.location = 'http://127.0.0.1:8000/apply/';
    }

    changeToStudents (e) {
        window.location = 'http://127.0.0.1:8000/students/';
    }

    getNews (e) {
        let id = parseInt(e.target.id);
        this.setState({
            open: true,
            currentNews: this.state.news[id]
        });
        console.log(this.state.currentNews.content);
    }

    handleClose () {
        this.setState({
            open: false
        });
    }

    render() {
        let divs = [];
        if (this.state.news) {
            for (let i = 0; i < this.state.news.length; i++){
                let news = this.state.news[i];
                var newsObject = 
                <div className="demo" key={i + 1} id={i}>
                    <br />
                    <span className="date">
                    <span className="month">
                    {news.month}/  {news.year}
                    </span>
                    <span className="day">
                    {news.day}
                    </span> 
                    </span> <strong><u><a href="#" onClick={this.getNews} id={i}>{news.name}</a></u></strong><br />
                    {news.abstract}
                </div>;

                divs.push(newsObject);
            }
        }
        var dialog;
        if (this.state.currentNews) {
            dialog = (
                <Dialog
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                >  
                <div className="particular-article">
                    <strong><p className="news-name-popup">{this.state.currentNews.name}</p></strong><br />
                    <div dangerouslySetInnerHTML={{__html: this.state.currentNews.content}} />
                </div>
                </Dialog>
            );
        }
        return (
            <MuiThemeProvider>
                <section id="news-info">
                    <Row>
                    <Col mdOffset={3}>
                    <ScrollOverPack playScale="50vh" always={false} >
                        <TweenOne className="tween-one" key="0" animation={{ opacity: 1 }}>
                            News
                        </TweenOne>
                        <QueueAnim key="1">
                            {divs}
                            {dialog}
                        </QueueAnim>
                    </ScrollOverPack>
                    <p><a id="news-link" href="/news">All news</a></p>
                    </Col>
                    </Row>
                    <ScrollToTop showUnder={50}>
                        <span className="top"></span>
                    </ScrollToTop>
                </section>
            </MuiThemeProvider>
        );
    }
}


const Apply = (state) =>
    <section id="apply-info">
        <Row>
            <Col mdOffset={3}>
                <Row>
                    <Col md={8}>
                        <img src={APPLY} />
                    </Col>
                    <Col md={4}>
                            <div>
                            <h2>Поступаете? </h2>
                            <p> Играй с профитом!
                            Оформи дебетовую карту ALL Games и получай выгоду! 
                            - Вернем 5% за покупки на игровых платформах 
                            - До 2% в рублях будет возвращаться с других покупок 
                            </p>
                            <MuiThemeProvider>
                            <RaisedButton onClick={(e) => {
                                    e.preventDefault(); 
                                    location.replace('/apply');
                                    }} backgroundColor="#ffd1dc" label="Информация >" />
                            </MuiThemeProvider>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </section>


const Students = (state) =>
    <section id="students-info">
        <Row>
            <Col mdOffset={3}>
                <Row>
                    <Col md={4}>
                        <div>
                            <h2>Уже учитесь? </h2>
                            <p> Играй с профитом!
                            Оформи дебетовую карту ALL Games и получай выгоду! 
                            - Вернем 5% за покупки на игровых платформах 
                            - До 2% в рублях будет возвращаться с других покупок 
                            </p>
                            <MuiThemeProvider>
                                <RaisedButton onClick={(e) => {
                                    e.preventDefault(); 
                                    location.replace('/students');
                                    }} backgroundColor="#ffd1dc" label="Информация >" />
                            </MuiThemeProvider>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div><img src={IMAGE} /></div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </section>


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
                        <span className="glyphicon glyphicon-envelope"></span><strong className="strong-text"> E-mail</strong>: <br />
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


