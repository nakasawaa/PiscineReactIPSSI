import CarnetPage from './../Pages/CarnetPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import LargeButton from './../Components/Buttons/LargeButton'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function HomePage() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'row',
        }}>
            Statistique
            <Container>
                <Row>
                    <Col>STAT 1</Col>
                    <Col>STAT 2</Col>
                    <Col>STAT 3</Col>
                    <hr />
                </Row>
            </Container>


            <div style={{
                width: '100%',
                height: '46em',
                backgroundColor: 'white',
            }}>
                <CarnetPage isNotesDisplayed={false} />
            </div>
        </div>
    );
}

export default HomePage;
