import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth'
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
                            <Nav.Link style={{ color: 'black' }} href="/home">Home</Nav.Link>
                            <Nav.Link style={{ color: 'black' }} href="/blog">Blogs</Nav.Link>
                            {
                                user ?
                                    <Nav.Link style={{ color: 'black' }} href="/login" onClick={handleSignOut}>Sign Out</Nav.Link>
                                    :
                                    <Nav.Link style={{ color: 'black' }} href="/login">Login</Nav.Link>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default Header;