import { Container, Row, Col, Button, Table, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CarnetsProvider } from '../Providers/CarnetsProvider'
import { AfficherNotes } from '../Components/AfficherNotes/AfficherNotes'

export default function CarnetPage({ isNotesDisplayed }) {
    const [carnets, setCarnets] = useState([])
    const carnetProvider = new CarnetsProvider()
    const [formAdd, setFormAdd] = useState({
        id: '',
        nom: '',
    })

    const carnetsProvider = new CarnetsProvider()

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
                    <Button as={Link} to={`/carnet/notes/add/${carnet.id}`}>
                        Ajouter une note
                    </Button>
                </td>
                <td>
                    <Button variant="danger" onClick={() => remove(carnet)}>
                        Supprimer
                    </Button>
                </td>
            </tr>
        )
    })

    function add(e) {
        e.preventDefault()
        carnetsProvider.add(formAdd)
        window.location.reload()
    }

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
                            <form
                                onSubmit={e => {
                                    e.preventDefault()
                                    add()
                                }}
                            >
                                <InputGroup className="mb-3">
                                    <FormControl
                                        type="text"
                                        placeholder="Enter nom de carnet"
                                        value={formAdd.nom}
                                        onChange={e => {
                                            let tmp = { ...formAdd }
                                            tmp.nom = e.target.value
                                            setFormAdd(tmp)
                                        }}
                                        required
                                    />
                                    <Button variant="primary" onClick={add}>
                                        Ajouter
                                    </Button>
                                </InputGroup>
                            </form>
                        </div>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nom</th>
                                    <th>Ajouter une note</th>
                                    <th>Supprimer</th>
                                </tr>
                            </thead>
                            <tbody>{displayCarnets}</tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>
            {isNotesDisplayed && <AfficherNotes />}

        </>
    )
}

