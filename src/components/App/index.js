// src/components/App/index.js
import React, {  Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import logo from './logo.svg';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';



import './style.css';

class App extends Component {
     static defaultProps = {}
     state = {}

    render() {

        const { className } = this.props;


        return (
            <MuiThemeProvider>
            <div className={classnames('App', className)}>

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Max & Albert</h2>
                </div>
				 <Link to="/">
                    <RaisedButton label="Homepage" />
                </Link>
                <Link to="/about">
                    <RaisedButton label="About" />
                </Link>
                
                <Link to="/settings">
                    <RaisedButton label="Settings" />
                </Link>

                <Link to="/notfound">
                    <RaisedButton label="Not Found" />
                </Link>

                <div className="mainApp">
                    {this.props.children}
                </div>
            </div>
            </MuiThemeProvider>
            
        );
    }
}

export default App;