// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class About extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}

    render() {
        const { className} = this.props;
        return (
            <div className={classnames('About', className)}>
                <h1>
                    About
                    <br />
                    {this.props.location.pathname}
                </h1>
            </div>
        );
    }
}