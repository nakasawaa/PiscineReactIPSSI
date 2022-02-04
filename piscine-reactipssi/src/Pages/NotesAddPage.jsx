import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { NotesProvider } from './../Providers/NotesProvider'

export default function NoteAddPage() {
    const [formAdd, setFormAdd] = useState({
        id: '',
        nom: '',
    })
    const [formcatAdd, setFormcatAdd] = useState({
        id: '',
        nom: '',
    })
    const [formnoteAdd, setFormnoteAdd] = useState({
        id: '',
        contenu: '',
    })

    const notesProvider = new NotesProvider()
    const notescatProvider = new NotesProvider()
    const notesaddProvider = new NotesProvider()
    const navigate = useNavigate()




    function add(e) {
        e.preventDefault()
        notesProvider.add(formAdd)
        notescatProvider.add(formcatAdd)
        notesaddProvider.add(formnoteAdd)
        navigate('/carnet')
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Ajouter une note</h1>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form onSubmit={e => add(e)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nom de la note</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter nom de la note"
                                    value={formAdd.nom}
                                    onChange={e => {
                                        let tmp = { ...formAdd }
                                        tmp.nom = e.target.value
                                        setFormAdd(tmp)
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nom de la catégorie</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter nom de la cat"
                                    value={formcatAdd.catNom}
                                    onChange={e => {
                                        let tmpcat = { ...formcatAdd }
                                        tmpcat.catNom = e.target.value
                                        setFormcatAdd(tmpcat)
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Ecrire la note</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrer la note"
                                    value={formnoteAdd.note}
                                    onChange={e => {
                                        let tmpnote = { ...formnoteAdd }
                                        tmpnote.note = e.target.value
                                        setFormnoteAdd(tmpnote)
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