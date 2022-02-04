import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CarnetsProvider } from './../Providers/CarnetsProvider'

export default function CarnetAddPage() {
    const [formAdd, setFormAdd] = useState({
        id: '',
        nom: '',
    })

    const carnetsProvider = new CarnetsProvider()
    const navigate = useNavigate()

    function add(e) {
        e.preventDefault()
        carnetsProvider.add(formAdd)
        navigate('/carnet')
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Ajouter un carnet</h1>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form onSubmit={e => add(e)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nom du carnet</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter nom de carnet"
                                    value={formAdd.nom}
                                    onChange={e => {
                                        let tmp = { ...formAdd }
                                        tmp.nom = e.target.value
                                        setFormAdd(tmp)
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Button variant="light" as={Link} to="/carnet">
                                Retour
                            </Button>

                            <Button
                                variant="outline-danger"
                                className="float-end mx-2"
                                type="reset"
                            >
                                Annuler
                            </Button>

                            <Button variant="warning" type="submit" className="float-end">
                                Enregistrer
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}