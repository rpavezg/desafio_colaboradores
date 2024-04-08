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
          msg: "Todos los campos son obligatorios",
          color: "danger",
          backgrouncolor: "pink",
        });
        return;
      }
  
      onSubmit(colaborador);
      setAlert({
        error: false,
        msg: "Colaborador agregado exitosamente",
        color: "success",
        backgrouncolor: "lightgreen",
      });
  
      setColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
    };
  
    const handleChange = (e) => {
      const nuevoColaborador = { ...colaborador };
      nuevoColaborador[e.target.nombre] = e.target.value;
      setColaborador(nuevoColaborador);
      console.log(e.target.nombre, e.target.value);
    };
    return (
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
            type="text"
            placeholder="Correo"
            name="correo"
            className="my-3"
            onChange={handleChange}
            value={colaborador.correo}
          />
          <Form.Control
            type="text"
            className="my-3"
            placeholder="Edad"
            name="edad"
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
          <Button variant="primary" type="submit">
            Agregar Colaborador
          </Button>
        </Form.Group>
      </Form>
    );
  };
  
  export default Formulario;
  