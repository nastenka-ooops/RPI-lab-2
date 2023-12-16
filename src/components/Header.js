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
import {useTranslation} from 'react-i18next';
import i18n from "../i18n";
import { Link } from "react-router-dom"
import {render} from "react-dom";

const Header = () => {
    const {t} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    //render()
    {
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
                    <NavbarToggle aria-controls="responsive-navbar-nav"/>
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink as={Link} to="/">{t("header.title")}</NavLink>
                            <NavLink as={Link} to="/Thieves">{t("header.thieves")}</NavLink>
                        </Nav>
                        <Nav>
                            <NavDropdown align="end" title={t("header.language")} id="dropdown-menu-align-end">
                                <NavDropdown.Item onClick={() => changeLanguage("ru")}>Русский</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLanguage("en")}>English</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header;