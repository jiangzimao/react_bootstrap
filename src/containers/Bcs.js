import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Bcs extends React.Component {

    render() {
        const navbarInstance = (
            <div>
                <Navbar fluid fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey="{1}" href="#">Link</NavItem>
                        <NavItem eventKey="{2}" href="#">Link</NavItem>
                    </Nav>
                </Navbar>

                <Navbar fluid fixedBottom>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </div>
        )
        return navbarInstance
    }
}
export default Bcs