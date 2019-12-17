import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import AdminNav from './admin_nav/AdminNav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InfoCard from "./InfoCard/EditInfoCard";
import EditInfoCards from './InfoCard/EditInfoCards'
import QCards from './quiz-cards//QCards'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Container>
                        <AdminNav />
                        <Switch>
                            <Route path='/admin/editeaza-descrieri'>
                                <EditInfoCards />
                            </Route>
                            <Route path='/admin/editeaza-chestionar'>
                                <QCards />
                            </Route>
                        </Switch>
                    </Container>
                </BrowserRouter>
            </div>
        );
    }
}
