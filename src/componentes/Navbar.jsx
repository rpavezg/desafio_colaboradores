import React from "react";
import { Navbar,Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const MyNavbar = ({ formularioId, listadoId, buscarId }) => {
  return (
    //variant dark se usa para que el texto sea legible
    <Navbar className="Navegacion" expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={Link}
            to={formularioId}
            smooth={true}
            duration={500}
            className="nav-link-hover">
            ADD
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={listadoId}
            smooth={true}
            duration={500}
            className="nav-link-hover">
            LIST
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={buscarId}
            smooth={true}
            duration={500}
            className="nav-link-hover">
            BUSCAR
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;