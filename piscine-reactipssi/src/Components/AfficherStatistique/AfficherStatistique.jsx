import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';

function AfficherStatistique() {
    return (
        <Container>
            <Row>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <h1> Statistiques </h1>
                </div>
                <Col>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr />
            <br />
            <br />
            <br />
        </Container>

    )

}

export default AfficherStatistique;

