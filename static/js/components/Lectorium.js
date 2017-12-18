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
  

import '../../styles/lectorium.css';

export class LectoriumForm extends React.Component {
    render () {
        return (
            <HashRouter>
                <div id="lectorium-info">
                    <Row>
                        <Col mdOffset={3}>
                        <ul className="horizontal-menu-router">
                            <li><NavLink exact to="/">Overview</NavLink></li>
                            <li><NavLink to="/current">Current</NavLink></li>
                            <li><NavLink to="/archieve">Archieve</NavLink></li>
                        </ul>
                        <br />
                        <div>
                            <Route exact path="/" component={Overview}/>
                            <Route path="/current" component={Current}/>
                            <Route path="/archieve" component={Archieve}/>
                        </div>
                        </Col>
                    </Row>
                </div>
            </HashRouter>
        )
    }
}


class Overview extends React.Component {

    componentDidMount () {
        var uluru = {lat: 55.7023776, lng: 37.5296753};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
    }

    render () {
        return (
            <div id="overview-lectorium">
                <h2>Лекторий МГУ</h2>
                7 апреля 1999 г. под руководством ректора МГУ, академика РАН В.А. Садовничего 
                состоялось заседание Совета лектория МГУ, на котором присутствовали академики
                В.Б. Брагинский, Л.Б. Окунь, В.А. Садовничий, В.П. Скулачев, А.С. Спирин, В.Е. 
                Хаин, М.О. Чудакова и который принял решение возобновить традицию чтения в МГУ 
                ведущими учеными публичных лекций, посвященных наиболее важным проблемам современной 
                науки. Эти лекции будут рассчитаны на самый широкий круг слушателей: научных сотрудников, 
                преподавателей, студентов, аспирантов, учителей средних школ, школьников старших классов, 
                а также всех желающих. <br />
                Планируется проводить лекции ежемесячно, как правило в последний вторник месяца. <br /><br />
                <span className="glyphicon glyphicon-map-marker"></span><strong> Место проведения лекций: </strong> аудитория 01 Главного здания МГУ им. М.В.Ломоносова,
                клубная часть, 1 этаж. Проезд до ст.м. Университет, далее автобусами 1,113,119,661 до остановки ДК МГУ. <br /><br />
                <span className="glyphicon glyphicon-user"></span><strong> Вход на лекцию свободный. </strong> При себе иметь документ, удостоверяющий личность. 
                При входе в здание предъявлять его охране.  <br /><br />
                <span className="glyphicon glyphicon-phone-alt"></span><strong> Контактный телефон: </strong> +7 (495) 939-41-95 <br /><br />
                <span className="glyphicon glyphicon-envelope"></span><strong> E-mail: </strong><a href="mailto:bioeng@genebee.msu.ru" target="_top">bioeng@genebee.msu.ru </a><br /><br />

                <div id="map">
                </div>
                <br /><br />
            </div>
        )
    }
}


class Current extends React.Component {
    constructor () {
        super();

        this.state = {
            lectoriums: null
        }

        this.apiCallback = this.apiCallback.bind(this);
    }

    apiCallback (data) {
        this.setState({
            lectoriums: data.data
        });
    }

    componentDidMount () {
        $.get('/fbb_site/get_five_last_lectoriums/', this.apiCallback);
    }
    
    render () {
        let data = [];
        if (this.state.lectoriums) {
            console.log(this.state.lectoriums);
            for (let lectorium of this.state.lectoriums){
                var lectoirumObject = 
                <Row>
                    <br />
                    <span className="date">
                    <span className="month">
                    {lectorium.month}/  {lectorium.year}
                    </span>
                    <span className="day">
                    {lectorium.day}
                    </span> 
                    </span> <strong>Лекторий МГУ: {lectorium.day} {lectorium.rus_month}, {lectorium.professor} </strong><br /> 
                    <u>Тема лектория: {lectorium.name}</u><br /> <br />
                </Row>;

                data.push(lectoirumObject);
            }

        }
        return (
            <div id="current-lectorium">
                {data}
            </div>
        )
    }
}

class Archieve extends React.Component {
    constructor () {
        
        super ();

        this.state = {
            lectoriums: null,
            searchPhrase: "",
            page: 1,
            rowSize: 10
        }

        this.apiCallback = this.apiCallback.bind(this);
        this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
        this.handleNextPageClick = this.handleNextPageClick.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount () {
        $.get('/fbb_site/get_all_lectoriums/', this.apiCallback);
    }

    apiCallback (data) {
        this.setState({
            lectoriums: data.data
        })
    }

    handleFilter (value) {
        this.setState({
          searchPhrase: value
        })
    }

    handlePreviousPageClick() {
        var currentPage = this.state.page
        this.setState({
          page: currentPage-1,
        });
    }
    
    handleNextPageClick() {
        var currentPage = this.state.page
        this.setState({
          page: currentPage + 1,
        });
    }

    render () {
        var TABLE_COLUMNS = [
            {
                key: 'date',
                label: 'Дата',
                style: {
                    overflow: 'hidden',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  },
              }, {
                key: 'professor',
                label: 'Лектор',
                style: {
                    overflow: 'hidden',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  },
              }, {
                key: 'name',
                label: 'Название',
                className: 'overflow-column',
                style: {
                    overflow: 'hidden',
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  },
              }
        ]
        var TABLE_DATA = [];
        let displayData;
        if (this.state.lectoriums) {
            for(let lectorium of this.state.lectoriums) {
                TABLE_DATA.push(
                    {
                        'date': lectorium[0],
                        'professor': lectorium[1],
                        'name': lectorium[2]
                    }
                )
            }
            TABLE_DATA = TABLE_DATA.filter(row => row.date.includes(this.state.searchPhrase) || row.professor.includes(this.state.searchPhrase) || row.name.includes(this.state.searchPhrase))
            
            displayData = TABLE_DATA.slice(this.state.rowSize * (this.state.page - 1), this.state.rowSize * (this.state.page))
      
        }
        
        return (
            <MuiThemeProvider>
                <div id="archieve-lectorium">
                    <DataTables
                        headerToolbarmode={'filter'}
                        selectable={true}
                        showRowHover={true}
                        columns={TABLE_COLUMNS}
                        showHeaderToolbar={true}
                        showHeaderToolbarFilterIcon={false}
                        onFilterValueChange={this.handleFilter}
                        headerToolbarMode={'filter'}
                        data={displayData}
                        count={TABLE_DATA.length}
                        page={this.state.page}
                        onNextPageClick={this.handleNextPageClick}
                        onPreviousPageClick={this.handlePreviousPageClick} 
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}