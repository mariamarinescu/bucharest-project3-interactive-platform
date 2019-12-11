import React, { Component } from 'react';
import img from '../../Kool_Boye.jpg'

export default class GirlModel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={img} alt='Da_ly' />
            </div>
        );
    }
}

