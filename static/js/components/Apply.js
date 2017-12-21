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
  

import '../../styles/apply.css';

export class ApplyForm extends React.Component {
    render () {
        return (
            <HashRouter>
                <div id="lectorium-info">
                    <Row>
                        <Col mdOffset={3}>
                        <ul className="horizontal-menu-router">
                            <li><NavLink exact to="/">Primenaya kampaniya</NavLink></li>
                            <li><NavLink to="/courses">Ochnie kursi</NavLink></li>
                            <li><NavLink to="/progs">Programmi kursov</NavLink></li>
                            <li><NavLink to="/phd">Aspirantyra</NavLink></li>
                            <li><NavLink to="/school">Shkola unih</NavLink></li>
                            <li><NavLink to="/olymp">Olympiada FBB</NavLink></li>
                        </ul>
                        <br />
                        <div>
                            <Route exact path="/" component={Company}/>
                            <Route path="/courses" component={Courses}/>
                            <Route path="/progs" component={SubjectProgramms} />
                            <Route path="/phd" component={Phd}/>
                            <Route path="/school" component={School}/>
                            <Route path="/olymp" component={Olympiad}/>
                        </div>
                        </Col>
                    </Row>
                </div>
            </HashRouter>
        )
    }
}


class Company extends React.Component { 
    render () {
        return (
            <div> Priemnaya kampaniya </div>
        )
    }
}


class Courses extends React.Component { 
    render () {
        return (
            <div id="courses-info">
            <h2>Очные подготовительные курсы</h2>
            &emsp;Подготовительные курсы осуществляют подготовку учащихся к сдаче вступительных испытаний по 
            математике, биологии, физике, химии, русскому языку на факультет биоинженерии и биоинформатики, а 
            так же на естественные факультеты МГУ и другие ведущие ВУЗы страны. В качестве слушателей на 
            подготовительные курсы зачисляются учащиеся 10-11 классов и все желающие.<br />
            &emsp;<strong>Продолжительность обучения - 1 или 2 года</strong>. Запись на подготовительные курсы ведется с сентября по май. 
            &emsp;В этот период Вы можете присоединиться к одной из учебных групп. Гибкая система преподавания позволяет 
            быстро включиться в учебный процесс и эффективно усваивать излагаемый материал. <br />
            &emsp;Преподавание осуществляют высококвалифицированные специалисты: кандидаты и доктора наук, сотрудники соответствующих факультетов МГУ.<br />
            &emsp;В зависимости от желания Вы можете посещать либо все занятия, либо какие-то предметы по выбору.<br />
            &emsp;Занятия проводятся в вечернее время  <strong>18.00 - 21.00, 1 занятие (4 академических часа) </strong>
            по одному предмету в неделю. Обучение на подготовительных курсах <strong>платное.</strong> <br />
            &emsp;Дополнительная информация и запись по тел.: <strong>+7 (495) 939-45-03</strong>, <strong>+7 495 939-41-95</strong> или 
            <a href="mailto:podkursy@mail.ru"> podkursy@mail.ru</a>.<br /><br />
            </div>
        )
    }
}


class SubjectProgramms extends React.Component {
    render () {
        return (
            <HashRouter>
                <div id="programms-info">
                        <ul className="horizontal-menu-router">
                            <li><NavLink exact to="/progs">Bilogiya</NavLink></li>
                            <li><NavLink to="/progs/math">Matematika</NavLink></li>
                            <li><NavLink to="/progs/rus">Russkii</NavLink></li>
                            <li><NavLink to="/progs/phys">Fizika</NavLink></li>
                            <li><NavLink to="/progs/chem">Chemistry</NavLink></li>
                        </ul>
                        <br />
                        <div>
                            <Route exact path="/progs" component={Biology} />
                            <Route path="/progs/math" component={Mathematics} />
                            <Route path="/progs/rus" component={Russian} />
                            <Route path="/progs/phys" component={Physics} />
                            <Route path="/progs/chem" component={Chemistry} />
                        </div>
                </div>
            </HashRouter>
        )
    }
}


class Biology extends React.Component {
    render () {
        return (
            <div> Biology </div>
        )
    }
}


class Mathematics extends React.Component {
    render () {
        return (
            <div> Mathematics </div>
        )
    }
}


class Russian extends React.Component {
    render () {
        return (
            <div> Russian </div>
        )
    }
}


class Physics extends React.Component {
    render () {
        return (
            <div> Physics </div>
        )
    }
}


class Chemistry extends React.Component {
    render () {
        return (
            <div> Chemistry </div>
        )
    }
}



class Phd extends React.Component { 
    render () {
        return (
            <div> Aspirantura </div>
        )
    }
}


class School extends React.Component { 
    render () {
        return (
            <div> Shkola </div>
        )
    }
}


class Olympiad extends React.Component { 
    render () {
        return (
            <div> Olympiada FBB </div>
        )
    }
}