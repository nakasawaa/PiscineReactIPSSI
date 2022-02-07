import React from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { CategoriesProvider } from '../../Providers/CategoriesProvider'
import { Link, useParams } from 'react-router-dom'

export function AfficherCategories() {
    const [categories, setCategories] = useState([])
    const categorieProvider = new CategoriesProvider()

    const { id } = useParams()

    useEffect(() => {
        let datascategories = categorieProvider.getCategories()
        setCategories(datascategories)
    }, [])

    function remove(categorie) {
        let rep = window.confirm(
            `Etes-vous sur de vouloir supprimer la categorie ${categorie.contenu}`
        )
        if (rep) {
            categorieProvider.remove(categorie)
            let datascategories = categorieProvider.getCategories()
            setCategories(datascategories)
        }
    }

    function update(categorie) {
        let rep = window.confirm(
            `Etes-vous sur de vouloir modifier la categorie ${categorie.contenu}`
        )
        if (rep) {
            categorieProvider.update(categorie)
            let datascategories = categorieProvider.getCategories()
            setCategories(datascategories)
        }
    }

    let displayCategories = categories.map((categorie, i) => {
        return (
            <tr key={'categories-' + categorie.id}>
                <td>{i + 1}</td>
                <td>

                </td>
                <td>
                    {categorie.nom}
                </td>
                <td>
                    <Button variant="warning" as={Link} to={`/carnet/categories/${categorie.id}`}>
                        Modifier
                    </Button>
                </td>
                <td>
                    <Button variant="danger" onClick={() => remove(categorie)}>
                        Supprimer
                    </Button>
                </td>
                <tbody></tbody>
            </tr >
        )
    })
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Gestion des Categories</h1>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>


                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Catégorie</th>
                                    <th>Modifier</th>
                                    <th>Supprimer</th>
                                </tr>
                            </thead>
                            <tbody>{displayCategories}</tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>

    )
}

