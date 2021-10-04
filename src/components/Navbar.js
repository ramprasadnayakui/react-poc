import React from 'react';
import './Navbar.css';
import { Navbar, Nav} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/PC1">CC1</Nav.Link>
                    <Nav.Link href="/PF1">FC1</Nav.Link>
                    <Nav.Link href="/Counter">Counter</Nav.Link>
                    <Nav.Link href="/Table">Table</Nav.Link>
                    <Nav.Link href="/Redux">Redux</Nav.Link>
                    <Nav.Link href="/hoc">HOC</Nav.Link>
                    <Nav.Link href="/thunk">Thunk</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);