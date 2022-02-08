import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { NotesProvider } from '../../Providers/NotesProvider'
import { Link } from 'react-router-dom'
import { CarnetsProvider } from '../../Providers/CarnetsProvider'
import { CategoriesProvider } from '../../Providers/CategoriesProvider'

export function AfficherNotes() {
    const [notes, setNotes] = useState([])
    const [categories, setCategories] = useState([])
    const noteProvider = new NotesProvider()
    const carnetProvider = new CarnetsProvider()
    const categorieProvider = new CategoriesProvider()

    useEffect(() => {
        let datasnotes = noteProvider.getNotes()
        setNotes(datasnotes)
    }, [])

    function remove(note) {
        let rep = window.confirm(
            `Etes-vous sur de vouloir supprimer la note ${note.contenu}`
        )
        if (rep) {
            noteProvider.remove(note)
            let datasnotes = noteProvider.getNotes()
            setNotes(datasnotes)
        }
    }


    let displayNotes = notes.map((note, i) => {
        return (
            <tr key={'notes-' + note.id}>
                <td>{i + 1}</td>
                <td>
                    {carnetProvider.getCarnetById(note.carnetid).nom}
                </td>
                <td>
                    {categorieProvider.getCategorieById(note.categorieid).nom}
                </td>
                <td>
                    {note.nom}
                </td>
                <td>
                    {note.contenu}
                </td>
                <td>
                    <Button variant="warning" as={Link} to={`/carnet/notes/${note.id}`}>
                        Modifier
                    </Button>
                </td>
                <td>
                    <Button variant="danger" onClick={() => remove(note)}>
                        Supprimer
                    </Button>
                </td>
            </tr >
        )
    })
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Gestion des Notes</h1>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>


                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Carnet</th>
                                    <th>Catégorie</th>
                                    <th>Titre de la note</th>
                                    <th>Note</th>
                                    <th>Modifier</th>
                                    <th>Supprimer</th>
                                </tr>
                            </thead>
                            <tbody>{displayNotes}</tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

