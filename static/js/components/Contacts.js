import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../styles/contacts.css';



export class ContactForm extends React.Component {

    componentDidMount () {
        var uluru = {lat: 55.704682, lng: 37.519377};
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
            <div id="contact-info">
                <Row>
                    <Col mdOffset={3}>
                        <h2>Contacts</h2><br />
                        <div id="overall-info">
                            <span className="glyphicon glyphicon-map-marker"></span><strong> Adress: </strong> 
                            119234, г. Москва, ГСП-1, Ленинские горы МГУ 1, стр. 73, Факультет биоинженерии и биоинформатики, комната 433.<br /><br />
                            <span className="glyphicon glyphicon-envelope"></span><strong> E-mail: </strong>
                            <a href="mailto:bioeng@genebee.msu.ru" target="_top">bioeng@genebee.msu.ru</a><br /><br />
                            <span className="glyphicon glyphicon-random"></span><strong> From "Universitet" station: </strong>
                            трол. 34, авт. 1, 47, 67, 103, 111, 113, 130, 187, 260, 470, 487, 845, 661 до остановки «Менделеевская улица», 15 мин.<br /><br />
                            <span className="glyphicon glyphicon-random"></span><strong> From "Lomonosovskiy prospect" station: </strong>
                            Выход № 1 на Мичуринский проспект (первый вагон из центра), далее направо вверх по ул. Колмогорова 360 м 4 мин.<br /><br />
                        </div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col mdOffset={3}>
                        <div id="map">
                        </div>
                    </Col>
                </Row>
                <br />
            </div>
        )
    }
}

