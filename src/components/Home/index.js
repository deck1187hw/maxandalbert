// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

import './style.css';

export default class Home extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className} = this.props;
        return (
            <div className={classnames('Home', className)}>
                <h1>
                    Homepage
                </h1>
                <p>
                    <Link to="/about">
                       Go to the app
                    </Link>
                </p>

            </div>
        );
    }
}