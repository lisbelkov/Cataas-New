import React, { Component } from 'react';
import { Button, FormControl, Nav, Navbar, Container, Form, NavLink, NavbarBrand } from 'react-bootstrap';
// import Navbar.Collapse from 'react-bootstrap/esm/NavbarCollapse';
// import Navbar.Toggle from 'react-bootstrap/esm/NavbarToggle';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cataas from '../Pages/Cataas';
import Explore from '../Pages/Explore';
import Your from '../Pages/Your';
import About from '../Pages/About';
import Catbutton from '../Pages/Сatbutton';
import TableCat from '../Pages/Table';


export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar sticky='top' collapseOnSelect expand="lg" bg='dark' variant='dark' >
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Cataas</Nav.Link>
                                <Nav.Link href="/Explore">Explore</Nav.Link>
                                <Nav.Link href="/Your">Your Cat</Nav.Link>
                                <Nav.Link href="/About">About cats</Nav.Link>
                                <Nav.Link href="/Catbutton">Cat button</Nav.Link>
                                <Nav.Link href="/Table">Table Cat</Nav.Link>
                            </Nav>
                            <Form className='d-flex'>
                                
                            </Form> 
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Cataas />} />
                        <Route path="/Explore" element={<Explore />} />
                        <Route path="/Your" element={<Your />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Catbutton" element={<Catbutton />} />
                        <Route path="/Table" element={<TableCat />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}