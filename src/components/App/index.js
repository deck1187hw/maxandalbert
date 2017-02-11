// src/components/App/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import logo from './logo.svg';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import FlatButton from 'material-ui/FlatButton';


import './style.css';

class App extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {

        const { className, ...props } = this.props;


        return (
            <MuiThemeProvider>
            <div className={classnames('App', className)}>

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Max & Albert</h2>
                </div>

                <Slider />
                <Slider defaultValue={0.5} />
                <Slider defaultValue={1} />
                <Link to="/about">
                    <RaisedButton label="About us page" />

                </Link>
                <FlatButton label="Default" />

                <p className="App-intro">

                    <br /><br />http://www.material-ui.com/#/get-started/usage<br/>
                </p>

            </div>
            </MuiThemeProvider>
        );
    }
}

export default App;