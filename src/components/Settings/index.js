// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Settings extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className} = this.props;
        return (
            <div className={classnames('Settings', className)}>
                <h1>
                    Settings page

                </h1>
                <p>{this.props.location.pathname}</p>
            </div>
        );
    }
}