import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
const Navbarr = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Nav className="me-auto">
                       
                        <Nav.Link href="/Profile">Profile</Nav.Link>
                        <Nav.Link href="/UserList">UserList</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbarr