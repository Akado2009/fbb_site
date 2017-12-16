import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-bootstrap';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';

import FBB from '../../img/logo_fbb.gif';

export class ProfileForm extends Component {
    constructor () {

        super ();

        this.state = {
            course: null,
            open: false
        }
        this.handleCourseChange = this.handleCourseChange.bind(this);
        this.handleAvatarChange = this.handleAvatarChange.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleAvatarChange (e) {
        console.log(e);
    }

    handleOpen (){
      this.setState({open: true});
    };

    handleClose (){
      this.setState({open: false});
    };

    handleCourseChange (event, index, value) {
        this.setState({
            course: value
        });
    }

    render() {
        return(
                <MuiThemeProvider>
                    <div>
                    <span onClick={this.handleOpen}><span className="glyphicon glyphicon-list-alt"></span> Profile</span>
                        <Dialog
                        title="Profile"
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        className="align-center"
                        >   
                            <div className="overall-info">
                                <Row>
                                    <Col md={2} mdOffset={2}>
                                            <Avatar src={FBB} size={120} onClick={this.handleAvatarChange} />
                                    </Col>
                                    <Col md={3} mdOffset={1}>
                                        <TextField hintText='Imya' /><br />
                                        <TextField hintText='Familiya' /><br />
                                        <TextField hintText='Otchestvo' /><br />
                                        <SelectField floatingLabelText="Course" value={this.state.course} onChange={this.handleCourseChange} >
                                                <MenuItem value={1} primaryText="First" />
                                                <MenuItem value={2} primaryText="Second" />
                                                <MenuItem value={3} primaryText="Third" />
                                                <MenuItem value={4} primaryText="Fourth" />
                                                <MenuItem value={5} primaryText="Fifth" />
                                                <MenuItem value={6} primaryText="Sixth" />
                                        </SelectField><br />
                                        <br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <RaisedButton label="Save changes" onClick={this.onSubmit} backgroundColor="#ffd1dc" /><br /><br />
                                    </Col>
                                </Row>
                            </div>
                        </Dialog>
                    </div>
                </MuiThemeProvider>
        )
    }
}