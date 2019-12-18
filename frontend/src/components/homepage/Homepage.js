import React from 'react';
import { Switch, Route, withRouter, NavLink, Link } from 'react-router-dom';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import data from '../info_modal/my_fake_db.json';
import * as check from './../../static/img/hook-1425312.png';
import Maps from '../maps/Maps'


import '../parteners/Parteners.css'

import logo from "../../static/img/logo_techir.png";
import brand_romanesc from '../../static/img//brand-romanesc.png'
import produse_romanesti from '../../static/img//produse-romanesti.png';
import img from '../../static/img/Kool_Gurl.jpg'


import 'bootstrap/dist/css/bootstrap.min.css';
import '../navbar/NavBar.css';
import '..//info_modal/Info.css';
import '../footer/Footer.css';
import '../login/login.css';
import '../quiz/quiz.css'



const points = ['arm', 'leg', 'hair', 'face', 'hand', 'neck'];

const FormErrors = ({ formErrors }) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                if (fieldName === 'email') {
                    return (
                        <p key={i}>{'Email-ul'} {formErrors[fieldName]}</p>
                    )
                } else if (fieldName === 'password') {
                    return (
                        <p key={i}>{'Parola'} {formErrors[fieldName]}</p>
                    )
                } else if (fieldName === 'confirmPassword') {
                    return (
                        <p key={i}>{'Parolele'} {formErrors[fieldName]}</p>
                    )
                }

            } else {
                return '';
            }
        })}
    </div>;


// const QuizModal = () => {
//     const fireworks = <div class="yeey">
//     <div class="before"></div>
//     <div class="after"></div>
//   </div>;

//   return(
//     <div>
//   <Modal
//       show={this.props.show}
//       onHide={this.props.handleClose}
//     >
//       <Modal.Header closeButton>

//         <Modal.Title>
//          {this.props.title}
//         </Modal.Title>

//       </Modal.Header>

//       <Modal.Body>

//         {this.props.description}

//         <p className="red-quiz-modal-message">
//           {this.props.lastMessage}
//         </p>
//         { this.props.show ? fireworks : null}
//         {/* <div class="yeey">
//           <div class="before"></div>
//           <div class="after"></div>
//         </div> */}

//       </Modal.Body>

//       <Modal.Footer>
//         <img
//           src="http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png"
//           alt="logo"
//         />
//       </Modal.Footer>

//     </Modal>
//     </div>

// )}
const markerData = [
    {
        title: 'marker1_title',
        name: 'Kathmandu City',
        position: {
            lat: 27.708259611420385,
            lng: 85.31940732779083
        }
    }, {
        title: 'marker2_title',
        name: 'Salta City',
        position: {
            lat: -24.795283873195597,
            lng: -65.42829136976184
        }
    }, {
        title: 'marker3_title',
        name: 'Oracoke Lighthouse',
        position: {
            lat: 35.1096357,
            lng: -75.9863747
        }
    }, {
        title: 'marker4_title',
        name: 'Antananarivo City',
        position: {
            lat: -18.915194943870617,
            lng: 47.53313308528492
        }
    }, {
        title: 'marker5_title',
        name: 'Esports',
        position: {
            lat: 37.5246642275535,
            lng: 126.94545210259305
        }
    }, {
        title: 'marker6_title',
        name: 'Neo-Tokyo',
        position: {
            lat: 35.675784883832065,
            lng: 139.7688509481294
        }
    }, {
        title: 'marker7_title',
        name: 'Boring',
        position: {
            lat: 47.44931986261183,
            lng: 12.154022557394521
        }
    }];

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }
    render() {
        const { isExpanded } = this.state;

        return (
            <div className='Navigation'>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" with="350px;" height="150px" />
                        <em>
                            <div className="letterhead">
                            </div>
                        </em>
                    </Link>
                </div>
                <nav className="nav">
                    <i
                        className="fa-bars fa "
                        aria-hidden="true"
                        onClick={e => this.handleToggle(e)}
                    />
                    <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                        <NavLink className="nav-link" activeClassName="active" to="/log-in">
                            <li>Conectare</li>
                        </NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/sign-Up">
                            <li>Creeaza cont</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        );
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

class Parteners extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            megaImage: data.quiz.parteners.megaImage,
            carturesti: data.quiz.parteners.carturesti,
            farmaciaVital: data.quiz.parteners.farmaciaVital,
            eNatural: data.quiz.parteners.eNatural,
            camaraCuMerinde: data.quiz.parteners.camaraCuMerinde,
            stamDeVorba: data.quiz.parteners.stamDeVorba,
            allBoutique: data.quiz.parteners.allBoutique,
            tastingRomania: data.quiz.parteners.tastingRomania,
            iCosmetice: data.quiz.parteners.iCosmetice,
            elaPlant: data.quiz.parteners.elaPlant,
            byaPlantMed: data.quiz.parteners.byaPlantMed,
            floraFarm: data.quiz.parteners.floraFarm,
            redPixie: data.quiz.parteners.redPixie,
            getWell: data.quiz.parteners.getWell,
            natura4All: data.quiz.parteners.natura4All,
            avalon: data.quiz.parteners.avalon


        }
    }


    // retrieveParteners = () => {
    // }



    render() {
        return (
            <div className="parteners-container" >
                <h1 className="p-title">Parteneri Online</h1>
                <img className="p-mega" src={this.state.megaImage} alt="Mega" />
                <img className="p-carturesti" src={this.state.carturesti} alt="Carturesti" />
                <img className="p-vital" src={this.state.farmaciaVital} alt="farmacia-Vital" />
                <img className="p-enatural" src={this.state.eNatural} alt="e-Natural" />
                <img className="p-camara" src={this.state.camaraCuMerinde} alt="Camara-Cu-Merinde" />
                <img className="p-stam-de-vorba" src={this.state.stamDeVorba} alt="Stam-De-Vorba" />
                <img className="p-allboutique" src={this.state.allBoutique} alt="allBoutique" />
                <img className="p-tastingRO" src={this.state.tastingRomania} alt="Tasting-Romania" />
                <img className="p-icosmetice" src={this.state.iCosmetice} alt="iCosmetice" />
                <img className="p-ela" src={this.state.elaPlant} alt="ElaPlant" />
                <img className="p-bya" src={this.state.byaPlantMed} alt="ByaPlantMed" />
                <img className="p-flora" src={this.state.floraFarm} alt="FloraFarm" />
                <img className="p-pixie" src={this.state.redPixie} alt="RedPixie" />
                <img className="p-get-well" src={this.state.getWell} alt="GetWell" />
                <img className="p-natura" src={this.state.natura4All} alt="Natura4All" />
                <img className="p-avalon" src={this.state.avalon} alt="Avalon" />
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div id='footer'>
                <div className='contact'>
                    <div>SC TECHIRGHIOL FARMA COSMETICS SRL</div>
                    <div>Nr. ord. Reg. com./aut.: J13-1885-2012</div>
                    <div>Cod inregistrare fiscala: RO30601045</div>
                    <div>Techir © Copyright 2020</div>
                    <hr id="f-line" />
                    <div className='footer-links'>
                        <a href="https://anpc.ro/" className='anpc'>ANPC</a>
                        <a href="#" className='politica-de-confidentialitate'>Politica de Confidentialitate</a>
                    </div>
                </div>
                <img src={brand_romanesc} className='brand-romanesc' alt="brand_romanesc" />
                <img src={produse_romanesti} className='produse-romanesti' alt="produse_romanesti" />
            </div>
        );
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePass = this.onChangePass.bind(this)
    }
    onChangeEmail(event) {
        //  this.setState({email: event.target.value})
        //  console.log(this.state.email)
    }
    onChangePass(event) {
        // this.setState({pass: event.target.value})
        // console.log(this.state.pass)
    }

    routeChange = () => {
        let path = `/`;
        this.props.history.push(path);
    }


    render() {
        return (
            <div id='login' >
                {/* {this.props.isActive ? */}
                <Row>
                    <Col className='py-3' md={{ offset: 8, span: 3 }} xs={{ offset: 4, span: 7 }} >
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control onChange={this.onChangeEmail()} type="email" placeholder="Email" size='sm' />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control onChange={this.onChangePass()} type="password" placeholder="Parola" size='sm' />
                            </Form.Group>
                            <Col md={{ offset: 4, span: 1 }}>
                                <Button className='login-btn' variant="outline-secondary" type="submit" onClick={this.routeChange}>
                                    <div className='login-text'>Logare</div>
                                </Button>
                            </Col>
                        </Form>
                    </Col>
                </Row>
                {/* // : null} */}
            </div>
        );
    }
}

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: { email: '', password: '', confirmPassword: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false,
            confirmPasswordValid: false
        }

    }


    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) })
        if (this.state.password === this.state.confirmPassword && this.state.password !== '' && this.state.confirmPassword !== '') {
            this.setState({
                confirmPasswordValid: true
            })
        }

    }


    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); //an example regex from the Devise library.
                fieldValidationErrors.email = emailValid ? '' : ' nu este valid.';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' este prea scurta.';
                break;
            case 'confirmPassword':
                confirmPasswordValid = value === this.state.password;
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : 'nu se potrivesc.';
                break;
            default:
                break;

        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }
    routeChange = () => {
        let path = `/`;
        this.props.history.push(path);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    render() {
        return (
            <Row className="signup-form">
                <Col className='py-3' md={{ offset: 8, span: 3 }} xs={{ offset: 4, span: 7 }}>                <form className="">
                    <div className="form-group">
                        <input type="text" className="form-control mySignUp-input"
                            name="name" value={this.state.name}
                            placeholder="Nume complet"
                            onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control mySignUp-input"
                            name="email" value={this.state.email}
                            placeholder="Email"
                            onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control mySignUp-input"
                            name="password" value={this.state.password}
                            placeholder="Parola"
                            onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control mySignUp-input"
                            name="confirmPassword" value={this.state.confirmPassword}
                            placeholder="Confirma parola"
                            onChange={(event) => this.handleUserInput(event)} />
                    </div>
                    <Col>
                        <Button variant="outline-dark" className="mySignUp-bttn" type="submit"
                            disabled={!this.state.formValid} onClick={this.routeChange}>
                            Creeare cont
                    </Button></Col>
                </form>
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                </Col></Row>
        )
    }
}

class Question extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSuccess: false,
            showFailure: false
        }
    }

    setShowSuccess(bool) {
        this.setState({
            showSuccess: bool
        })
    }

    handleSuccessClose = () => {
        this.setShowSuccess(false)
    }


    handleSuccessShow = () => {
        this.setShowSuccess(true)
    }

    setShowFailure(bool) {
        this.setState({
            showFailure: bool
        })
    }

    handleFailureClose = () => {
        this.setShowFailure(false)
    }


    handleFailureShow = () => {
        this.setShowFailure(true)
    }

    render() {
        return (
            <div className="quiz-q-container">
                <h3 className="q-question">
                    {this.props.question}
                </h3>

                <img
                    className="q-img"
                    src={this.props.image}
                    alt="question"
                    width="250px"
                    height="250px"
                >
                </img>

                <div className="questions-container">
                    <Button
                        variant={this.state.showSuccess ? "success" : "outline-dark"}
                        className="q-first-ans"
                        onClick={this.handleSuccessShow}
                        size="lg"
                        block
                    >
                        {this.props.answers[0]}
                    </Button>

                    <Button
                        variant={this.state.showFailure ? "danger" : "outline-dark"}
                        onClick={this.handleFailureShow}
                        className="q-second-ans"
                        size="lg"
                        block
                    >
                        {this.props.answers[1]}
                    </Button>
                    {/* <QuizModal show={this.state.showSuccess} handleClose={this.handleSuccessClose}
                    title={this.props.modalSuccessTitle}  description={this.props.modalSuccessDescription}
                    lastMessage={this.props.modalSuccessLastMessage} 
                    />
                     <QuizModal show={this.state.showFailure} handleClose={this.handleFailureClose}
                    title={this.props.modalFailureTitle}  description={this.props.modalFailureDescription}
                    lastMessage={this.props.modalFailureLastMessage} 
                    /> */}
                    <Modal
                        show={this.state.showSuccess}
                        onHide={this.handleSuccessClose}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Felicitari! Tocmai ai castigat un cupon de reducere  pe <a href='http://www.techir.ro'>Techir.ro</a>
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {this.props.modalSuccessDescription}

                            <p className="red-quiz-modal-message">
                                {this.props.modalSuccessLastMessage}
                            </p>
                            <div class="yeey">
                                <div class="before"></div>
                                <div class="after"></div>
                            </div>
                        </Modal.Body>

                        <Modal.Footer>
                            <img
                                src="http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png"
                                alt="logo"
                            />
                        </Modal.Footer>

                    </Modal>

                    <Modal
                        show={this.state.showFailure}
                        onHide={this.handleFailureClose}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Aww, mai mult noroc data viitoare!
                            </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {this.props.modalFailureDescription}

                            <p className="red-quiz-modal-message">
                                {this.props.modalFailureLastMessage}
                            </p>
                        </Modal.Body>

                        <Modal.Footer>
                            <img src="http://www.techir.ro/wp-content/uploads/2015/03/logo_techir.png" alt="logo" />
                        </Modal.Footer>
                    </Modal>
                </div>

            </div>

        )
    }
}

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalSuccessTitle: ' Felicitari! Tocmai ai castigat un cupon de reducere!',
            modalSuccessDescription: 'Intra pe www.techir.ro si adauga in cos produsele tale preferate, iar la checkout-ul comenzii ai un loc special unde trebuie sa introduci codul de reducere, pentru a scadea valoarea voucher-ului din suma totala a cosului dvs.',
            modalSuccessLastMessage: 'Codul dvs. a fost trimis pe email.Va asteptam saptamana viitoare!',
            modalFailureTitle: ' Aww, mai mult noroc data viitoare!',
            modalFailureDescription: 'De data aceasta, nu a fost sa fie dar te asteptam saptamana viitoare sa mai incercam odata!',
            modalFailureLastMessage: 'Iti multumim ca iei parte parte impreuna cu noi in aceasta minunta experiata, cea de a cunoaste mama natura <3',
            question: data.quiz.face.firstQuestion.question,
            image: data.quiz.face.firstQuestion.firstQuestionImg,
            answers: [data.quiz.face.firstQuestion.answers[0], data.quiz.face.firstQuestion.answers[1]],
            firstQuestionCorrect: false,
            secondQuestionCorrect: false
        }
    }
    // questionOne = () => {
    //     getQuestion()
    // }

    // questionTwo = () => {
    //     getQuestion()
    // }

    // getQuestion() {
    //     // GET /api/question

    //     //Response:
    //     // {
    //     //     text: "",
    //     //     answer: "",
    //     //     discount: "",
    //     //     image: "",
    //     //     correct: 0
    //     // }
    // }
    render() {
        return (
            <div className="quiz-container">
                <h1 className="quiz-title">Concurs Techir</h1>
                <h6 className="quiz-desc">Participa, raspunzand la doua intrebari si poti castiga reduceri la produsele tale favorite.</h6>
                <Question
                    question={this.state.question} image={this.state.image} answers={this.state.answers} discount={this.state.discount}
                    modalSuccessDescription={this.state.modalSuccessDescription} modalSuccessLastMessage={this.state.modalSuccessLastMessage}
                    modalFailureDescription={this.state.modalFailureDescription} modalFailureLastMessage={this.state.modalFailureLastMessage}
                />
            </div>
        )
    }
}

class Homepage extends React.Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <GirlModel />
                <div style={{ height: '60vh' }}>
                    <Maps locationData={markerData} />
                </div>
                <Parteners />
                <Footer />
                <Switch>
                    <Route path="/sign-up" component={SignUp} />
                </Switch>
                <Switch>
                    <Route path="/log-in" component={Login} />
                </Switch>
                <Switch>
                    <Route path="/quiz" component={Quiz} />
                </Switch>
            </div>
        )
    }

}




export default withRouter(Homepage);
