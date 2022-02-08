import React from 'react';
import { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import { CategoriesProvider } from '../Providers/CategoriesProvider'
import { Link, useNavigate } from 'react-router-dom'
import { AfficherCategories } from '../Components/AfficherCategorie/AfficherCategorie';



export default function ConfigPage() {
    const [formAdd, setFormcatAdd] = useState({
        id: '',
        nom: '',
    })

    const categorieProvider = new CategoriesProvider()




    function add(e) {
        e.preventDefault()
        categorieProvider.add(formAdd)

    }
    return (
        <>
            <Container>
                <Row>
                    <Col md={2}>
                        <h1 >Configuration</h1>
                        <hr />
                    </Col >
                </Row>
                <Row>
                    <h4>Mode List Indisponible</h4>
                    <Button as="input" type="button" value="List" />{' '}
                    <h4>Mode Card Indisponible</h4>
                    <Button as="input" type="button" value="Card" />{' '}
                </Row>

            </Container>

            <Container>
                <Col>
                    <h1>Ajouter une catégorie</h1>
                    <hr />
                </Col>

                <Row>
                    <Col md={6}>
                        <Form onSubmit={e => add(e)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nom de la catégorie</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrer nom de la catégorie"
                                    value={formAdd.nom}
                                    onChange={e => {
                                        let tmp = { ...formAdd }
                                        tmp.nom = e.target.value
                                        setFormcatAdd(tmp)
                                    }}
                                    required
                                />
                            </Form.Group>

                            <Button variant="outline-dark" as={Link} to="/carnet">
                                Retour
                            </Button>
                            <Button variant="success" type="submit" className="float-end">
                                Enregistrer
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container>
                <AfficherCategories />
            </Container>
        </>
    )
}