import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { NotesProvider } from './../Providers/NotesProvider'
import { Converter } from 'showdown'

export default function NoteUpdatePage() {
    const converter = new Converter()
    const [note, setNote] = useState({})
    const [formUpdate, setFormUpdate] = useState({
        id: '',
        prenom: '',
        nom: '',
        pseudo: '',
    })
    const notesProvider = new NotesProvider()
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        let tmpNote = notesProvider.getNoteById(id)

        if (!tmpNote) {
            alert('Note non trouvé dans la base')
            navigate('/carnet')
        } else {
            setNote(tmpNote)
            setFormUpdate(tmpNote)
        }
    }, [id, navigate])

    function update(e) {
        e.preventDefault()
        let res = notesProvider.update(formUpdate)
        if (res) navigate('/carnet')
        else alert("Erreur lors de l'enregistrement")
    }

    function reset() {
        setFormUpdate(note)
    }

    let text = formUpdate.contenu,
    htmlMD = converter.makeHtml(text)

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Modifier un note</h1>
                        <hr />
                    </Col>
                    <Col>
                        <h1>Preview</h1>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form onSubmit={e => update(e)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Titre de la note</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Entrer un nouveau titre"
                                    value={formUpdate.nom}
                                    onChange={e => {
                                        let tmp = { ...formUpdate }
                                        tmp.nom = e.target.value
                                        setFormUpdate(tmp)
                                    }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Catégorie</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Sélectionnez une catégorie</option>
                                    <option value="1">Tas peur</option>
                                    <option value="2">Tas tres peur</option>
                                    <option value="3">Tas la phobie</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Ecrire la note</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    type="textarea"
                                    placeholder="Entrer la nouvelle note"
                                    value={formUpdate.contenu}
                                    onChange={e => {
                                        let tmp = { ...formUpdate }
                                        tmp.contenu = e.target.value
                                        setFormUpdate(tmp)
                                    }}
                                    required
                                />
                            </Form.Group >

                            <hr />

                            <Button variant="light" as={Link} to="/carnet">
                                Retour
                            </Button>

                            <Button
                                variant="outline-secondary"
                                className="float-end mx-2"
                                type="reset"
                                onClick={reset}
                            >
                                Annuler
                            </Button>

                            <Button variant="success" type="submit" className="float-end">
                                Enregistrer
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <div dangerouslySetInnerHTML={{ __html: htmlMD }}></div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}