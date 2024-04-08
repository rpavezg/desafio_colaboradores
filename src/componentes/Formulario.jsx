import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Formulario = ({ onSubmit, setAlert }) => {
  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      colaborador.nombre === "" ||
      colaborador.correo === "" ||
      colaborador.edad === "" ||
      colaborador.cargo === "" ||
      colaborador.telefono === ""
    ) {
    setAlert({
        error: true,
        msg: "Completa todos los campos!",
        color: "danger",
    });
    return;
    }

    onSubmit(colaborador);
    setAlert({
        error: false,
        msg: "Colaborador agregado!",
        color: "success",
    });

    setColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",

    })
  };

  const handleChange = (e) => {
    const nuevoColaborador = { ...colaborador };
    nuevoColaborador[e.target.name] = e.target.value;
    setColaborador(nuevoColaborador);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Nombre"
            name="nombre"
            className="my-3"
            onChange={handleChange}
            value={colaborador.nombre}
          />

          <Form.Control
            type="email"
            placeholder="Correo"
            name="correo"
            className="my-3"
            onChange={handleChange}
            value={colaborador.correo}
          />

          <Form.Control
            type="text"
            placeholder="Edad"
            name="edad"
            className="my-3"
            onChange={handleChange}
            value={colaborador.edad}
          />

          <Form.Control
            type="text"
            placeholder="Cargo"
            name="cargo"
            className="my-3"
            onChange={handleChange}
            value={colaborador.cargo}
          />

          <Form.Control
            type="text"
            placeholder="Telefono"
            name="telefono"
            className="my-3"
            onChange={handleChange}
            value={colaborador.telefono}
          />

          <Button variant="success" type="submit">
            Agregar colaborador
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Formulario;