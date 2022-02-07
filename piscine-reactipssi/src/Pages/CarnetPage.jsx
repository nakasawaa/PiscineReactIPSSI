import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CarnetsProvider } from './../Providers/CarnetsProvider'
import { NotesProvider } from './../Providers/NotesProvider'

export default function CarnetPage() {
    const [carnets, setCarnets] = useState([])
    const carnetProvider = new CarnetsProvider()

    useEffect(() => {
        let datas = carnetProvider.getCarnets()
        setCarnets(datas)
    }, [])

    function remove(carnet) {
        let rep = window.confirm(
            `Etes-vous sur de vouloir supprimer le carnet ${carnet.nom}`
        )
        if (rep) {
            carnetProvider.remove(carnet)
            let datas = carnetProvider.getCarnets()
            setCarnets(datas)
        }
    }

    let displayCarnets = carnets.map((carnet, indice) => {
        return (
            <tr key={'carnets-' + carnet.id}>
                <td>{indice + 1}</td>
                <td>{carnet.nom}</td>
                <td>
                    <Button variant="danger" onClick={() => remove(carnet)}>
                        Supprimer
                    </Button>
                </td>
            </tr>
        )
    })
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>Gestion des carnets</h1>
                        <hr />
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <div className="mb-3">
                            <Button as={Link} to="/carnet/add">
                                Ajouter un carnet
                            </Button>
                        </div>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nom</th>
                                    <th>Supprimer</th>
                                </tr>
                            </thead>
                            <tbody>{displayCarnets}</tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}