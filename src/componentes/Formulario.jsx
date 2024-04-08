import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({ onSubmit, setAlert }) => {
    const [cdataform, setDataform] = useState({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
    const handleSubmit = (e) => {
      e.preventDefault();
      if(
            dataform.nombre === "" ||
            dataform.correo === "" ||
            dataform.edad === "" ||
            dataform.cargo === "" ||
            dataform.telefono === ""
      ) {
        setAlert({
          error: true,
          msg: "Todos los campos son obligatorios",
          color: "danger",
          backgrouncolor: "pink",
        });
        return;
      }
  
      onSubmit(dataform);
      setAlert({
        error: false,
        msg: "Colaborador agregado exitosamente",
        color: "success",
        backgrouncolor: "lightgreen",
      });
  
      setDataform({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
    };
  
    const handleChange = (e) => {
      const nuevaDataform = { ...Dataform };
      nuevaDataform[e.target.nombre] = e.target.value;
      setDataform(nuevoDataform);
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
            value={dataform.nombre}
          />
          <Form.Control
            type="text"
            placeholder="Correo"
            name="correo"
            className="my-3"
            onChange={handleChange}
            value={dataform.correo}
          />
          <Form.Control
            type="number"
            className="my-3"
            placeholder="Edad"
            name="edad"
            onChange={handleChange}
            value={dataform.edad}
          />
          <Form.Control
            type="text"
            placeholder="Cargo"
            name="cargo"
            className="my-3"
            onChange={handleChange}
            value={dataform.cargo}
          />
          <Form.Control
            type="number"
            placeholder="Telefono"
            name="telefono"
            className="my-3"
            onChange={handleChange}
            value={dataform.telefono}
          />
          <Button variant="primary" type="submit">
            Agregar Colaborador
          </Button>
        </Form.Group>
      </Form>
    );
  };
  
  export default Formulario;
  