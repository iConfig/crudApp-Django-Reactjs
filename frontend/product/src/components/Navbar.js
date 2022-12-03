import React from "react";
import { Nav , Navbar, Container} from 'react-bootstrap';
import { NavLink } from "react-router-dom";


// navbar 
const NavbarMenu = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="#home">LocoStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                    <NavLink className="show-product-nav" to="/">Products</NavLink>
                    <NavLink className="add-product-nav" to="/addProduct">Add Products</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
} 

export default NavbarMenu;