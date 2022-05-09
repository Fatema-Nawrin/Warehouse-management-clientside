import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand href="/" className='title' style={{ color: ' rgb(44, 159, 149)' }}>Wood Decor Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto header-nav">
                            <Nav.Link style={{ color: 'black' }} as={Link} to="home">Home</Nav.Link>
                            <Nav.Link style={{ color: 'black' }} as={Link} to="blog">Blogs</Nav.Link>
                            <Nav.Link style={{ color: 'black' }} as={Link} to="faq">FAQ</Nav.Link>
                            {
                                user &&
                                <Nav.Link style={{ color: 'black' }} as={Link} to="manage">Manage Items</Nav.Link>
                            }
                            {
                                user &&
                                <Nav.Link style={{ color: 'black' }} as={Link} to="add">Add Items</Nav.Link>
                            }
                            {
                                user &&
                                <Nav.Link style={{ color: 'black' }} as={Link} to="myproduct">My Items</Nav.Link>
                            }

                            {
                                user ?
                                    <Nav.Link style={{ color: 'black' }} as={Link} to="login" onClick={handleSignOut}>Sign Out</Nav.Link>
                                    :
                                    <Nav.Link style={{ color: 'black' }} as={Link} to="login">Login</Nav.Link>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;