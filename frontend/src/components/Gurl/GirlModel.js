import React, { Component } from 'react';
import img from '../../static/img/Kool_Gurl.jpg'
import * as data from '../info_modal/my_fake_db.json'
import { Button } from 'react-bootstrap';
import * as check from './../../static/img/hook-1425312.png'


const points = ['arm', 'leg', 'hair', 'face', 'hand', 'neck']

export default class GirlModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: this.props.hidden,


            chosenCategory: "",
            activeLink: "",
            faceActive: false,
            hairActive: false,
            anticel: false,
            massage: false,
            category: "",
            info: "",
            blogLink: ""
        }
    }

    handleClick = (event) => {
        console.log(event)
    }

    retrieveAndSetChosenCateg = () => {
        let categ = data.hover.category[1];
        this.setState({
            category: categ
        })
    }
    retrieveAndSetAboutFaceInfo = () => {
        let info = data.hover.face.one;
        this.setState({
            info: info
        })
    }
    retrieveBlogLink = () => {
        let blogLink = data.hover.face.linkBlog
        this.setState({
            blogLink: blogLink
        })
    }
    componentDidMount() {
        this.retrieveAndSetAboutFaceInfo();
        this.retrieveBlogLink();
    }
    handleHover = () => {
        this.setState({
            isHovered: true
        });
    }
    handleLeaveHover = () => {
        setTimeout(() => {
            this.setState({
                isHovered: false
            })
        }, 1000)
    }

    render() {

        const contentClass = this.state.isHovered ? "hover-question" : "not-hovered-question";

        return (
            <div className='model'>
                {!this.state.isHidden ?
                    <div className='gurlContainer'>
                        <img src={img} alt='model' className='gurl' />
                        {points.map((e, i) => {
                            return <div className={'spinner ' + e} key={i}
                                onMouseEnter={this.handleHover}
                                onMouseLeave={this.handleLeaveHover}
                            // onClick={() => this.handleClick(e)}
                            >
                                
                                <div className="multi-ripple">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        })}
                    </div>
                    : null}

                {/* <div id="bulding-line-1"></div> */}

                <div className={contentClass}>
                    <img src={check} width="50px" height="50px" className="check" alt='check_img' />
                    <p className="hover-text">{this.state.info}</p>
                    <Button className="onhover-quiz-bttn" variant="outline-danger" href={this.state.blogLink}>Participa si castiga</Button>
                    <Button className="onhover-findoutMore-bttn" variant="outline-secondary" href={this.state.blogLink}>Afla detalii</Button>
                </div>
                {/* <Content info={this.state.info}/> */}
            </div>


        );
    }
}

