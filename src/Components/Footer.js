import React, { Component } from 'react';
import { Button, FormControl, Nav, Navbar, Container, Form, NavLink, NavbarBrand } from 'react-bootstrap';
// import Navbar.Collapse from 'react-bootstrap/esm/NavbarCollapse';
// import Navbar.Toggle from 'react-bootstrap/esm/NavbarToggle';
import logo from "./logo.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cataas from '../Pages/Cataas';
import Explore from '../Pages/Explore';
import Your from '../Pages/Your';
import About from '../Pages/About';


export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar sticky='top' collapseOnSelect expand="lg" bg='dark' variant="dark" className="fixed-bottom" >
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <h6> Link for <a href="https://cataas.com/#/about" target="_blank">inspiration.</a> </h6>
                            </Navbar.Text>
                            <Navbar.Text>
                                <h6>Kataas has a <a href='https://twitter.com/apicataas' target='_blank'>twitter</a></h6>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        )
    }
}