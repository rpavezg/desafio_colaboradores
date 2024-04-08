import { useState } from "react";
import Listado from "./componentes/Listado"
import Formulario from "./componentes/Formulario"
import Buscador from "./componentes/Buscador";

import Alert from "./componentes/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import {BaseColaboradores} from "./assets/BaseColaboradores"
import MyNavbar from "./componentes/Navbar";

export default function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({
    error: "",
    msg: "",
    color: "",
  });
  const [search, setSearch] = useState("");

  const handleSubmit = (nuevaDataform) => {
    const dataformFinal = { ...nuevaDataform, id: Date.now() };
    setColaboradores([...colaboradores, dataformFinal]);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const dataformFiltradas = colaboradores.filter((dataform) => {
    if (
      dataform.nombre.toLowerCase().includes(search.toLowerCase()) ||
      dataform.correo.toLowerCase().includes(search.toLowerCase()) ||
      dataform.cargo.toLowerCase().includes(search.toLowerCase())
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