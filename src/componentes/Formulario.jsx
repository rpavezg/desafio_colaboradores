import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({ onSubmit, setAlert }) => {
    const [dataform, setDataform] = useState({
      nombre: "",
      correo: "",
      edad: "",
      telefono: "",
      cargo: "",
    });
    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        dataform.nombre === "" ||
        dataform.correo === "" ||
        dataform.edad === "" ||
        dataform.telefono === "" ||
        dataform.cargo === ""
      ) {
        setAlert({
          error: true,
          msg: "Todos los campos son obligatorios",
          color: "danger",
        });
        return;
      }
  
      onSubmit(dataform);
      setAlert({
        error: false,
        msg: "Colaborador agregado con exito",
        color: "success",
      });
  
      setDataform({
        nombre: "",
        correo: "",
        edad: "",
        telefono: "",
        cargo: "",
      });
    };
  
    const handleChange = (e) => {
      const nuevaDataform = { ...dataform };
      nuevaDataform[e.target.name] = e.target.value;
      setDataform(nuevaDataform);
      console.log(e.target.name, e.target.value);
    };
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="nombre"
            name="nombre"
            className="my-3"
            onChange={handleChange}
            value={dataform.nombre}
          />
          <Form.Control
            type="text"
            placeholder="correo"
            name="correo"
            className="my-3"
            onChange={handleChange}
            value={dataform.correo}
          />
          <Form.Control
            type="number"
            className="my-3"
            placeholder="edad"
            name="edad"
            onChange={handleChange}
            value={dataform.edad}
          />
          <Form.Control
            type="text"
            placeholder="cargo"
            name="cargo"
            className="my-3"
            onChange={handleChange}
            value={dataform.cargo}
          />
          <Form.Control
            type="number"
            placeholder="telefono"
            name="telefono"
            className="my-3"
            onChange={handleChange}
            value={dataform.telefono}
          />
          <Button variant="primary" type="submit">
            Agregar colaborador
          </Button>
        </Form.Group>
      </Form>
    );
  };
  
  export default Formulario;