import React from 'react'
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap'

class Footer extends React.Component {
    render() {
        return (
            <Navbar id="footer" fluid fixedBottom>
                <Nav activeKey="1">
                    <NavDropdown eventKey="2" title="操作" id="optionMenu">
                        <MenuItem eventKey="2.1">Action</MenuItem>
                        <MenuItem eventKey="2.2">Another action</MenuItem>
                        <MenuItem eventKey="2.3">Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="2.4">Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Navbar.Collapse>
                    <Navbar.Text pullLeft>
                        设备状态
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Footer
