// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid';

import FontIcon from 'material-ui/FontIcon';
import {pink500,blueGrey500} from 'material-ui/styles/colors';

import './style.css';
import logo from './logo.svg';

const iconStyles = {
    fontSize: 90,
};
export default class Home extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className} = this.props;
        return (
            <MuiThemeProvider>
            <div className={classnames('Home', className)}>
                <header>
                    <Grid fluid className="wrapper">
                        <Row center="xs">
                            <Col xs={8}>

                                <Row middle="xs">
                                    <Col xs={12} sm={3}>
                                        <img src={logo} className="ma-Logo" alt="logo" />
                                    </Col>

                                    <Col xs={12} sm={9}>
                                        Menu goes here
                                    </Col>
                                </Row>


                                <Row middle="xs">
                                    <Col xs={12}>
                                        <h2>Discover, Share & Experience</h2>
                                        <p className="phrase">Get ready for your next challenge</p>
                                        <FlatButton label="Discover Now" secondary={true} />
                                    </Col>
                                </Row>




                            </Col>
                        </Row>
                    </Grid>
                </header>
                <div className="section1">
                    <Grid fluid className="wrapper">
                        <Row center="xs">
                            <Col xs={8}>
                                <h2>Learn from other´s experience</h2>
                                <Row>
                                    <Col xs={12} sm={4}>
                                        <FontIcon className="material-icons icon1" style={iconStyles} color={pink500} hoverColor={blueGrey500}>lightbulb_outline</FontIcon>
                                        <h3>Share your knowledge</h3>
                                        <RaisedButton label="I´m Max" secondary={true}/>
                                    </Col>
                                    
                                    <Col xs={12} sm={4}>
                                        <FontIcon className="material-icons icon1" style={iconStyles} color={pink500} hoverColor={blueGrey500}>location_on</FontIcon>
                                        <h3>Find something nearby</h3>
                                        <RaisedButton label="I´m Albert" secondary={true}/>
                                    </Col>

                                    <Col xs={12} sm={4}>
                                        <FontIcon className="material-icons icon1" style={iconStyles} color={pink500} hoverColor={blueGrey500}>face</FontIcon>
                                        <h3>Meet new people</h3>
                                        <RaisedButton label="Share" secondary={true}/>
                                    </Col>
                                </Row>


                            </Col>
                        </Row>
                    </Grid>
             </div>
            </div>
            </MuiThemeProvider>
        );
    }
}