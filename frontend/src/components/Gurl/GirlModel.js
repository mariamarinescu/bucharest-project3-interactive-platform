import React from 'react';
import * as img from '../../static/img/Kool_Gurl.jpg';
import { Button } from 'react-bootstrap';
import * as check from './../../static/img/hook-1425312.png'

const points = ['arm', 'leg', 'hair', 'face', 'hand', 'neck'];

const data = {
    "quiz": {
        "face" :{
            "firstQuestion": {
                "question" : "Care sunt proprietatile acestui sapun?",
                "answers": ["Actiune hranitoare","Actiune exfolianta"],
                "firstQuestionImg": "http://www.techir.ro/wp-content/uploads/2016/12/tricolor1.png",
                "correct": 0
            },
            "secondQuestion": {
                "question": "Care dintre cele doua variante reprezinta problemele principale de zi cu zi ale tenului?",
                "answers": ["Praful","Impurtitatile adunate si uscarea tenului"],
                "secondQuestionImg": "https://www.dermstore.com/blog/wp-content/uploads/2018/03/030918-Body-Cleansing.jpg",
                "correct": 1
            },
            "discounts": {
                "ten": { 
                    "code": "FATA1234510",
                    "sum": 10 
                },
                "twenty": {
                    "code": "FATA1234520",
                    "sum": 20
                },
                "thirty": {
                    "code": "FATA1234530",
                    "sum": 30
            }
        }
    },
        "hair" :{
            "firstQuestion": {
                "question" : "",
                "rightAnswer": "",
                "wrongAnswer": ""
            },
            "secondQuestion": {
                "question": "",
                "rightAnswer": "",
                "wrongAnswer": ""
            },
            "discounts": {
                "ten": "PAR1234510"
            }
        },
        "massage" :{
            "firstQuestion": {
                "question" : "",
                "rightAnswer": "",
                "wrongAnswer": ""
            },
            "secondQuestion": {
                "question": "",
                "rightAnswer": "",
                "wrongAnswer": ""
            },
            "discounts": {
                "ten": "MASAJ1234567"
            }
        },
        "anticelulitis" :{
            "firstQuestion": {
                "question" : "",
                "rightAnswer": "",
                "wrongAnswer": ""
            },
            "secondQuestion": {
                "question": "",
                "rightAnswer": "",
                "wrongAnswer": ""
            },
            "discounts": {
                "ten": "ANTICEL1234567"
            }
        }
    },
    "hover": {
        "category" : ["par", "fata", "anticelulita", "masaj"],
        "hair" : {},
        "face" : {
            "one" : "Se intampla ca zi de zi sa purtam machiaj care ne incarca tenul din ce in ce mai mult. Afla solutiile gasite de noi si produsele Techir din ingrediente naturale cu efecte terapeutice, care iti vor lumina si hidrata tenul zi de zi.",
            "linkBlog": "http://www.techir.ro/blog-techir/importanta-si-utilizarea-apei/"
            
        }
    }
    
}

class GirlModel extends React.Component {
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
        let categ = data.quiz.hover.category[1];
        this.setState({
            category: categ
        })
    }
    retrieveAndSetAboutFaceInfo = () => {
        let info = data.quiz.hover.face.one;
        this.setState({
            info: info
        })
    }
    retrieveBlogLink = () => {
        let blogLink = data.quiz.hover.face.linkBlog
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
        }, 390000)
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
                    <Button className="onhover-quiz-bttn" variant="outline-danger" href="/quiz">Participa si castiga</Button>
                    <Button className="onhover-findoutMore-bttn" variant="outline-secondary" href={this.state.blogLink}>Afla detalii</Button>
                </div>
                {/* <Content info={this.state.info}/> */}
            </div>


        );
    }
}


export default GirlModel;
