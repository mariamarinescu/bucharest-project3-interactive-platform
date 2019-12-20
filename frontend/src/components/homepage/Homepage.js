import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, withRouter, NavLink, Link } from 'react-router-dom';


import data from '../info_modal/my_fake_db.json';
import * as check from './../../static/img/hook-1425312.png';
import Maps from '../maps/Maps';
import Login from '../login/Login';
import Nav from '../navbar/NavBar';
import Quiz from '../quiz/Quiz';
import Footer from '../footer/Footer';
import GirlModel from '../Gurl/GirlModel';
import Parteners from '../parteners/Parteners';
import SignUp from '../signup/SignUp';

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

class Homepage extends React.Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
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
                </BrowserRouter>

            </div>
        )
    }

}




export default withRouter(Homepage);
