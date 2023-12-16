import React, {Component} from 'react';
import {
    Container,
    Nav,
    Navbar,
    NavbarCollapse,
    NavbarToggle,
    NavDropdown,
    NavLink
} from "react-bootstrap";
import logo from './logo.png'
class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="40"
                            width="40"
                            className="d-inline-block align-text-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <NavbarToggle aria-controls= "responsive-navbar-nav"/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/">List of Thieves</NavLink>
                        </Nav>
                        <Nav>
                            <NavDropdown  align="end" title={"Language"} id="dropdown-menu-align-end">
                                <NavDropdown.Item>Русский</NavDropdown.Item>
                                <NavDropdown.Item>English</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;