import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { NotesProvider } from './../Providers/NotesProvider'
import { CategoriesProvider } from '../Providers/CategoriesProvider'

export default function NotesAddPage() {
  const [formnoteAdd, setFormnoteAdd] = useState({
    nom: '',
    id: '',
    contenu: '',
    carnetid: '',
    categorieid: '',
  })

  const notesaddProvider = new NotesProvider()
  const categoriesProvider = new CategoriesProvider()

  const navigate = useNavigate()
  const { categorieid } = categoriesProvider.getCategorieById()
  const { carnetid } = useParams()
  useEffect(() => {

    setFormnoteAdd({
      ...formnoteAdd, carnetid: carnetid
    })
  }, [])

  function add(e) {
    e.preventDefault()
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
                  placeholder="Entrer nom de la note"
                  value={formnoteAdd.nom}
                  onChange={e => {
                    let tmp = { ...formnoteAdd }
                    tmp.nom = e.target.value
                    setFormnoteAdd(tmp)
                  }}
                  required
                />
              </Form.Group>
              <Row>
                <Form.Group className="mb-3">
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={a => {
                      let tmp = { ...formnoteAdd }
                      tmp.categorieid = a.target.value
                      setFormnoteAdd(tmp)
                    }}>

                    <option>Sélectionnez une catégorie</option>
                    {categoriesProvider.getCategories().map((categorie, i) => {

                      return (
                        <option value={categorie.id}>{categorie.nom}</option>
                      )
                    })}
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
                    tmpnote.contenu = e.target.value
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
