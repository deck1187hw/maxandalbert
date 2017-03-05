// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Faq extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className} = this.props;
        return (
            <div className={classnames('Faq', className)}>
                <h1>
                    Faq

                </h1>
                <p>{this.props.location.pathname}</p>
            </div>
        );
    }
}