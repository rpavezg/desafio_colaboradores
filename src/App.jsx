import { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./assets/BaseColaboradores";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Listado from "./componentes/Listado";
import Formulario from "./componentes/Formulario";
import Alert from "./componentes/Alert";
import Buscador from "./componentes/Buscador";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({
    error : "", 
    msg: "", 
    color:"", 
  });
  const [search, setSearch] = useState("")

  const handleSubmit = (nuevoColaborador) => {
   const colaboradorFinal = {...nuevoColaborador, id: Date.now()} 
   setColaboradores([...colaboradores, colaboradorFinal]);
  } 

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
    if (
      colaborador.nombre.toLowerCase().includes(search.toLowerCase()) ||
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
    <>
      <div className="mx-4" >
        <h2 className="text-start mt-4 " >Lista Colaboradores</h2>
        <Row>
          <Col sm={4}></Col>
          <Buscador search={search} onChange={handleChange} />
        </Row>
        <Row>
          <Col sm={12} md={9}>
            <Listado colaboradores = {colaboradoresFiltrados}/>
            </Col>
          <Col md={3} className="" >
            <h4>Agregar Colaborador</h4>
            <Formulario onSubmit = {handleSubmit} setAlert={setAlert}/>
            {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;