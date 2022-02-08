import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { NotesProvider } from './../Providers/NotesProvider'
import { CategoriesProvider } from '../Providers/CategoriesProvider'
import { Converter } from 'showdown'

export default function NotesAddPage() {
  const converter = new Converter()
  const [formnoteAdd, setFormnoteAdd] = useState({
    nom: '',
    id: '',
    contenu: '',
    carnetid: '',
  })

  const notesaddProvider = new NotesProvider()
  const navigate = useNavigate()

  const categoriesProvider = new CategoriesProvider()

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

  let text = formnoteAdd.contenu,
  htmlMD = converter.makeHtml(text)

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Ajouter une note</h1>
            <hr />
          </Col>
          <Col>
            <h1>Preview</h1>
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
          <Col>
          <div dangerouslySetInnerHTML={{ __html: htmlMD }}></div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
