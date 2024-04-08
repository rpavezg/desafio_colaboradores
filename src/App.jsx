import { useState } from 'react';
import Listado from './componentes/Listado';
import { BaseColaboradores } from './assets/BaseColaboradores';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from './componentes/Alert';
import Formulario from './componentes/Formulario';
import Buscador from './componentes/Buscador';
import MyNavbar from "./assets/componentes/Navbar";

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
      colaborador.nombre.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(search.toLowerCase()) 
    ) {
      return true;
   }
   return false;
  });
  return (
    <main>
      <div style={{ marginBottom: "30px" }}>
        <MyNavbar
          formularioId="formulario"
          listadoId="listado"
          buscarId="buscar"
          style={{ background: "#8ECAE6" }}
        />
      </div>
      <div
        id="buscar"
        className="buscadorDiv"
        style={{ marginTop: "80px", marginBottom: "40px" }}>
        <Buscador search={search} onChange={handleChange} />
      </div>

      <div id="listado" style={{ marginTop: "80px" }}>
        <Listado colaboradores={dataformFiltradas} />
      </div>

      <div id="formulario" style={{ marginTop: "80px" }}>
        <h2>Agregar Colaborador</h2>
        <Formulario onSubmit={handleSubmit} setAlert={setAlert} />
        {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
      </div>
    </main>
  );
}


export default App
