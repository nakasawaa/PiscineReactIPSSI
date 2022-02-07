import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { NotesProvider } from './../Providers/NotesProvider'


export default function NotesAddPage() {
  const [formAdd, setFormAdd] = useState({
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
    notesaddProvider.add(formnoteAdd)
    navigate('/carnet')
  }

  return (
    <>
      <Container>
        <Col>
          <h1>Ajouter une note</h1>
          <hr />
        </Col>

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
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Sélectionnez une catégorie</option>
                    <option value="1">Tas peur</option>
                    <option value="2">Tas tres peur</option>
                    <option value="3">Tas la phobie</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>Ecrire la note</Form.Label>
                <Form.Control
                  as="textarea"
                  type="textarea"
                  placeholder="Entrer la note"
                  value={formnoteAdd.note}
                  onChange={e => {
                    let tmpnote = { ...formnoteAdd }
                    tmpnote.note = e.target.value
                    setFormnoteAdd(tmpnote)
                  }}
                  required
                />
              </Form.Group >
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
    </>
  )
}
