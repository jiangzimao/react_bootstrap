import React from 'react'
import {Grid, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'

class MainBody extends React.Component {
    render() {
        return (
            <Grid fluid id="mainContainer">
                <Row>
                    <Col xs={12} md={12} sm={12}>
                        <ListGroup className="selectable-container">
                            <ListGroupItem className="selectable" header="Heading 1" href="#">Linked item</ListGroupItem>
                            <ListGroupItem className="selectable" header="Heading 2" href="#">Linked item</ListGroupItem>
                            <ListGroupItem className="selectable" header="Heading 3" href="#">Linked item</ListGroupItem>
                            <ListGroupItem className="selectable" header="Heading 4" href="#">Linked item</ListGroupItem>
                            <ListGroupItem className="selectable" header="Heading 5" href="#">Linked item</ListGroupItem>
                            <ListGroupItem className="selectable" header="Heading 6" href="#">Linked item</ListGroupItem>
                            <ListGroupItem className="selectable" header="Heading 7" href="#">Linked item</ListGroupItem>
                            <ListGroupItem className="selectable" header="Heading 8" href="#">Linked item</ListGroupItem>
                            <ListGroupItem className="selectable" header="Heading 9" href="#">Linked item</ListGroupItem>
                            <ListGroupItem className="selectable" header="Heading 10" href="#">Linked item</ListGroupItem>
                            <ListGroupItem className="selectable" header="Heading 11" href="#">Linked item</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default MainBody