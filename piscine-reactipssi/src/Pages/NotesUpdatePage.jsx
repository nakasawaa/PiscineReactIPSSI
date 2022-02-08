import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { NotesProvider } from './../Providers/NotesProvider'
import { CategoriesProvider } from './../Providers/CategoriesProvider'

export default function NoteUpdatePage() {
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

    const categoriesProvider = new CategoriesProvider()

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

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Modifier un note</h1>
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
                                <Form.Select aria-label="Default select example"
                                    onChange={() => {



                                    }}>

                                    <option>Sélectionnez une catégorie</option>
                                    {categoriesProvider.getCategories().map((categorie, i) => {

                                        return (
                                            <option value={categorie.id}>{categorie.nom}</option>
                                        )
                                    })}
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
                </Row>
            </Container>
        </>
    )
}