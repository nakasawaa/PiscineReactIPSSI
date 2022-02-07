import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CarnetsProvider } from './../Providers/CarnetsProvider'

export default function NotesAddPage() {
  const [formAdd, setFormAdd] = useState({
    id: '',
    titre: '',
    categorie: '',
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
            <h1>Ajouter une note</h1>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form onSubmit={e => add(e)}>
              <Form.Group className="mb-3">
                <Form.Label>Titre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrer titre"
                  value={formAdd.titre}
                  onChange={e => {
                    let tmp = { ...formAdd }
                    tmp.prenom = e.target.value
                    setFormAdd(tmp)
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Titre</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>

              <hr />

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

                    <Button
                      variant="outline-secondary"
                      className="float-end mx-2"
                      type="reset"
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
