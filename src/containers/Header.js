import React, { PropTypes } from 'react'
import {Navbar, Nav, NavDropdown, MenuItem, FormGroup, InputGroup, Button, FormControl, Glyphicon} from 'react-bootstrap'
import * as Style from '../constants/Style'

class Header extends React.Component {

    constructor(props) {

        super(props)

        this.state = {menuItem: "值机"}

        this.menuItemSelect = (eventKey, event) => {
            this.setState({menuItem: event.target.text})
        }
    }

    render() {
        let items = []
        for (let menuItem of this.props.menuItems) {
            if (menuItem.divider) {
                items.push(<MenuItem divider/>)
            } else {
                items.push(<MenuItem onSelect={ this.menuItemSelect }>{ menuItem.name }</MenuItem>)
            }
        }

        return (
            <Navbar id="header" fluid fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img alt="春秋航空" src="/images/ch.png"/>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavDropdown title={this.state.menuItem} id="navigateMenu" ref={ Style.selectable }>
                        { items }
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Navbar.Form>
                        <FormGroup>
                            <InputGroup>
                                <FormControl id="cmdInput" ref={ Style.selectable } type="text"
                                             placeholder="输入命令"/>
                                <InputGroup.Button>
                                    <Button><Glyphicon glyph="play"/>执行(Enter)</Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                    </Navbar.Form>
                </Nav>
            </Navbar>
        )
    }
}


Header.propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.number,
            name: PropTypes.string,
            divider: PropTypes.bool.isRequired
        }).isRequired
    )
}

export default Header