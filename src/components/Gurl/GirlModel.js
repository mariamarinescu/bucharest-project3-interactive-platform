import React, { Component } from 'react';
import img from '../../Kool_Gurl.jpg'

const points = ['arm', 'leg', 'hair', 'face', 'hand', 'neck']

export default class GirlModel extends Component {
    // constructor(props) {
    //     super(props);
    // }

    handleClick = (event) => {
        console.log(event)
    }

    render() {
        return (
            <div className='model'>
                <div className='gurlContainer'>
                    <img src={img} alt='model' className='gurl' />
                    {points.map((e, i) => {
                        return <div className={'spinner ' + e} key={i} onClick={() => this.handleClick(e)}>
                            <div className="multi-ripple">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

