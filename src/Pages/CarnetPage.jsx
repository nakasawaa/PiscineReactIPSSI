import {
  Container,
  Row,
  Col,
  Button,
  Table,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CarnetsProvider } from "../Providers/CarnetsProvider";
import { AfficherNotes } from "../Components/AfficherNotes/AfficherNotes";

export default function CarnetPage({ isNotesDisplayed }) {
  const [carnets, setCarnets] = useState([]);
  const carnetProvider = new CarnetsProvider();
  const [formAdd, setFormAdd] = useState({
    id: "",
    nom: "",
    isFav: false,
  });

  const carnetsProvider = new CarnetsProvider();

  useEffect(() => {
    let datas = carnetProvider.getCarnets();
    setCarnets(datas);
  }, []);

  function remove(carnet) {
    let rep = window.confirm(
      `Etes-vous sur de vouloir supprimer le carnet ${carnet.nom}`
    );
    if (rep) {
      carnetProvider.remove(carnet);
      let datas = carnetProvider.getCarnets();
      setCarnets(datas);
    }
  }

  let displayCarnets = carnets.map((carnet, indice) => {
    return (
      <tr key={"carnets-" + carnet.id}>
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

        <td>
          <button
            type="button"
            class="btn btn-light"
            onClick={(e) => {
              let tmp = { ...formAdd };
              tmp.isFav = !tmp.isFav;
              setFormAdd(tmp);
            }}
          >
            {isFav()}
          </button>
        </td>
      </tr>
    );
  });

  function isFav(bool) {
    let Icon1 = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-star-fill"
        viewBox="0 0 16 16"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    );

    let Icon2 = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-star"
        viewBox="0 0 16 16"
      >
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
      </svg>
    );

    if (bool) {
      return Icon1;
    } else {
      return Icon2;
    }
  }

  function add(e) {
    e.preventDefault();
    carnetsProvider.add(formAdd);
    window.location.reload();
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
                onSubmit={(e) => {
                  e.preventDefault();
                  add();
                }}
              >
                <InputGroup className="mb-3">
                  <FormControl
                    type="text"
                    placeholder="Enter nom de carnet"
                    value={formAdd.nom}
                    onChange={(e) => {
                      let tmp = { ...formAdd };
                      tmp.nom = e.target.value;
                      setFormAdd(tmp);
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
                  <th>Favoris</th>
                </tr>
              </thead>
              <tbody>{displayCarnets}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      {isNotesDisplayed && <AfficherNotes />}
    </>
  );
}
