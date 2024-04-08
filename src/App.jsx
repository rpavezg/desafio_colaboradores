import { useState } from 'react';
import Listado from './componentes/Listado';
import { BaseColaboradores } from './assets/BaseColaboradores';
import './App.css';
import { Row } from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from './componentes/Alert';
import Formulario from './componentes/Formulario';
import Buscador from './componentes/Buscador';

const App = ()=> {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({
    error: "",
    msg: "",
    color: "",
  });
  const [search, setSearch] = useState("");

  const handleSubmit = (nuevoColaborador) => {
    const colaboradorFinal = { ...nuevoColaborador, id: Date.now() };
    setColaboradores([...colaboradores, colaboradorFinal]);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const colaboradorFiltradas = colaboradores.filter((colaborador) => {
    if (
      colaborador.nomnbre.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    }
    return false;
  });
  return (
    <div className="mx-4">
      <h1 className="text-start">Lista de Colaboradores</h1>
      <Row>
        <Col sm={4}></Col>
        <Buscador search={search} onChange={handleChange} />
      </Row>
      <Row>
        <Col sm={12} md={9}>
          <Listado colaboradores={colaboradorFiltradas} />
        </Col>
        <Col md={3} className="">
          <h2>Agregar Colaborador</h2>
          <Formulario onSubmit={handleSubmit} setAlert={setAlert} />
          {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
        </Col>
      </Row>
    </div>
  );
}


export default App
