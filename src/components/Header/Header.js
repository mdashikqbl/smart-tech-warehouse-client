import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);

    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Smart Tech</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="home#inventory">Inventory</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link href='/' ></Nav.Link>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="manage">Manage Inventory</Nav.Link>
                                    <Nav.Link as={Link} to="additem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="myitem">My Item</Nav.Link>
                                </>
                            }
                            {
                                user ?
                                    <button className='sign-btn' onClick={handleSignOut}>Sign Out</button>
                                    :

                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;