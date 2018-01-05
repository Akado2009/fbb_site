import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import '../../styles/contacts.css';
import '../../styles/apply.css';

import girl from '../../img/first.jpg';
import lumc from '../../img/lumc.jpg';

import ustav from '../../files/ustav.pdf';
import akr from '../../img/akr.jpg';
import license from '../../files/license.pdf';
import internalRules from '../../files/pravila_vnutri.pdf';
import ethical from '../../files/ethical.pdf';
import course from '../../files/course.pdf';
import stipend from '../../files/stip.pdf';
import generalPractice from '../../files/gen_prak.pdf';
import prac1 from '../../files/prak_1.pdf';
import prac2 from '../../files/prak_2.pdf';


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
                        <br /><br />
                    </Col>
                </Row>
                <br />
            </div>
        )
    }
}


export class AboutForm extends React.Component {
    render () {
        return (
            <HashRouter>
            <div id="about-info">
                <Row>
                    <Col mdOffset={3}>
                        <ul className="horizontal-menu-router">
                            <li><NavLink exact to="/">O facultete</NavLink></li>
                            <li><NavLink to="/government">Rukovodstvo faculteta</NavLink></li>
                            <li><NavLink to="/structure">Structure faculteta</NavLink></li>
                            <li><NavLink to="/documents">Normativnie documenti</NavLink></li>
                        </ul>
                        <br />
                        <div>
                                <Route exact path="/" component={GeneralInfo}/>
                                <Route path="/government" component={Government}/>
                                <Route path="/structure" component={Structure}/>
                                <Route path="/documents" component={Documents}/>
                            </div>
                    </Col>
                </Row>
            </div>
            </HashRouter>
        )
    }
}

class GeneralInfo extends React.Component { 
    render () {
        return (
            <div id="general-info">
                <h2> O FACULTETE </h2>
                &emsp;Стремительное развитие биологии привело к широкому использованию совершенно новых практических подходов 
                для решения проблем здравоохранения и сельского хозяйства, для разработки принципиально новых технологий 
                и материалов в различных отраслях. Во всем мире ощущается недостаток в квалифицированных кадрах, способных 
                плодотворно работать в области биоинженерии и биоинформатики, не является исключением и наша страна. 
                <br />
                &emsp;Созданный в 2002 году в МГУ факультет биоинженерии и биоинформатики готовит высококвалифицированные кадры 
                для научно-исследовательских институтов и университетов, медицинских институтов и учреждений, промышленности 
                (особенно фармацевтических и биотехнических производств). 
                <br />
                <img src={girl} className="float-left custom-size-pic" />
                &emsp;Это специалисты, владеющие последними достижениями фундаментальной биологической науки и способные целенаправленно
                изменять биологические объекты в соответствии с поставленными задачами. В целях эффективной и оптимальной подготовки 
                таких специалистов Министерством образования РФ утверждена новая образовательная специальность "биоинженерия и биоинформатика". 
                <br /><br />
                <strong> Отличительными чертами специальности являются: </strong>
                <ul>
                    <li>изучение дисциплин биоинженерного профиля: генной инженерии; биоинженерии микроорганизмов, растений и животных; 
                                клонирования и трансплантации клеток; белковой инженерии; инженерной энзимологии;</li>
                    <li>существенное увеличение объёма преподавания математики и, особенно, информатики, как в общем курсе, так и в 
                                рамках специализированных курсов по биоинформатике.</li>
                </ul>
                <strong> Образовательная система ФББ имеет следующие особенности: </strong>
                <ul>
                    <li>в основе программы обучения на ФББ лежит междисциплинарный подход. Преподавательскую деятельность ведут сотрудники 
                        химического, биологического, механико-математического и физического факультетов, а также сотрудники НИИ ФХБ 
                        им. А.Н. Белозерского МГУ. Студенты осваивают в полной мере присущие университетским традициям классическую 
                        биологию и классическую математику. В дополнение к этому они изучают самые современные методы биоинженерии, 
                        генетической инженерии, молекулярной биологии, биоинформатики и мат. методы в биологии;</li>
                    <li>на факультете введена система тьюторов – ученых, персонально руководящих исследовательской работой студентов.
                        Научная работа студентов - важная и обязательная часть учебного плана. Каждый студент выполняет за срок 
                        обучения три курсовые работы – по биоинформатике, биохимии и биоинженерии, на 6 курсе выполняет дипломную 
                        работу. Практикуется защита курсовых работ в виде доклада на конференции на английском языке;</li>
                    <li>введена сквозная система рейтинга как стимул соревновательности студентов;</li>
                    <li>на факультете читаются курсы по "Русскому языку и культуре речи", "Психологии и педагогике", "Философии",
                        "Риторике", а также языковые факультативные и специальные курсы - "Реферирование и перевод", "Методология 
                        специальности на английском языке". Предоставляется возможность углубленного изучения английского языка 
                        (на IV и V курсах), по желанию ведется подготовка студентов к сдаче международных экзаменов по английскому 
                        языку (с последующим получением международных сертификатов). Предоставляется возможность изучения второго
                        и третьего иностранного языка (французский, немецкий);</li>
                    <img src={lumc} className="float-right"/>
                    <li>студенты факультета проходят следующие учебные практики: на I курсе – биологическая практика (Звенигородская 
                        биологической станции им. С.П.Скадовского); на II курсе – зоологическая практика (Беломорская биологическая 
                        станция им. Н.А.Перцова, Карельский берег Кандалакшского залива Белого моря); на III курсе – практика по 
                        биоинформатике (по конкурсу, Лейденский университет, Нидерланды).</li>
                </ul>                   
                &emsp;Широко используется мультимедийное сопровождение учебных занятий. Обеспечен выход в Интернет. Создан интернет
                портал курса биоинформатики. Организованы собственные практикумы по биохимии, молекулярной биологии, цитогенетике.    
                <br /> <br />
                &emsp;Выпускники факультета биоинженерии и биоинформатики составляют контингент наиболее востребованных категорий молодых 
                специалистов.
                Комплексность и разносторонность полученного образования, а также навыки научно-исследовательской работы позволили 
                выпускникам факультета найти применение полученным знаниям в самых различных областях. Большинство выпускников приняли 
                решение продолжить свое образование в системе послевузовского образования и стали аспирантами и соискателями Факультета 
                биоинженерии и биоинформатики МГУ, НИИ Физико-химической биологии им. А.Н. Белозерского, Биологического факультета МГУ, 
                Института общей генетики РАН, Центра биоинженерии РАН, НИИ Биомедицинской химии им. В.Н. Ореховича РАМН.
                Прекрасная языковая подготовка позволила выпускниками факультета биоинженерии и биоинформатики быть востребованными не 
                только в нашей стране, но и за ее пределами и продолжить обучение в Университете Флориды и др. (США), Институте Макса 
                Планка (Германия), Медицинском центре 3. Лейденского университета (Нидерланды) и др.        
            </div>
        )
    }
}


class Government extends React.Component {
    render () {
        return (
            <div>Shit 2</div>
        )
    }
}


class Structure extends React.Component {
    render () {
        return (
            <div id="structure-info">
            <h2>Структура фалькутета</h2>
            
            <h3>Ученый секретарь</h3>
            <span className="glyphicon glyphicon-phone-alt"></span><strong> Телефон</strong>: +7 (495) 939-54-14<br /><br />
            <span className="glyphicon glyphicon-envelope"></span><strong> E-mail</strong>: 
            <a href="mailto:sas@belozersky.msu.ru">sas@belozersky.msu.ru</a><br />
            <br /><br /><br />

            <h3>Учебный отдел</h3>
            <span className="glyphicon glyphicon-phone-alt"></span><strong> Телефон</strong>: +7 (495) 939-41-95<br /><br />
            <span className="glyphicon glyphicon-envelope"></span><strong> E-mail</strong>: 
            <a href="mailto:edu@genebee.msu.ru">edu@genebee.msu.ru</a><br />
            <br /><br /><br />

            <h3>Отдел аспирантуры</h3>
            <span className="glyphicon glyphicon-phone-alt"></span><strong> Телефон</strong>: +7 (495) 939-48-04<br /><br />
            <span className="glyphicon glyphicon-envelope"></span><strong> E-mail</strong>: 
            <a href="mailto:shapoval@belozersky.msu.ru">shapoval@belozersky.msu.ru</a><br />
            <br /><br /><br />

            <h3>Отдел кадров</h3>
            <span className="glyphicon glyphicon-phone-alt"></span><strong> Телефон</strong>: +7 (495) 939-48-04<br /><br />
            <span className="glyphicon glyphicon-envelope"></span><strong> E-mail</strong>: 
            <a href="mailto:hr@genebee.msu.ru">hr@genebee.msu.ru</a><br />
            <br /><br /><br />

            <h3>Бухгалтерия</h3>
            <span className="glyphicon glyphicon-phone-alt"></span><strong> Телефон</strong>: +7 (495) 939-31-04, +7 (495) 939-31-03<br />
            <br /><br /><br />
            </div>
        )
    }
}


class Documents extends React.Component {
    render () {
        return (
            <div id="documents-info">
            <h2>Нормативные документы</h2>
            <ul id="additional-info">
                <li><a href={ustav}><span className="glyphicon glyphicon-save"></span></a> Устав МГУ </li>
                <li><a href={akr}><span className="glyphicon glyphicon-save"></span></a> Свидетельство о государственной аккредитации </li>
                <li><a href={license}><span className="glyphicon glyphicon-save"></span></a> Лицензия </li>
                <li><a href={internalRules}><span className="glyphicon glyphicon-save"></span></a> Правила внутреннего распорядка </li>
                <li><a href={ethical}><span className="glyphicon glyphicon-save"></span></a> Этический кодекс студента </li>
                <li><a href={course}><span className="glyphicon glyphicon-save"></span></a> Положение о курсовых экзаменах и зачетах в МГУ </li>
                <li><a href={stipend}><span className="glyphicon glyphicon-save"></span></a> Положение о стипендиальном обеспечении</li>
                <li><a href={generalPractice}><span className="glyphicon glyphicon-save"></span></a> Положение о порядке проведения практики студентов ФББ</li>
                <li><a href={prac1}><span className="glyphicon glyphicon-save"></span></a> Программа учебной практики студентов 1 курса </li>
                <li><a href={prac2}><span className="glyphicon glyphicon-save"></span></a> Программа учебной практики студентов 2 курса </li>
            </ul>
            </div>
        )
    }
}