import Table from "react-bootstrap/Table";

const Listado = ({ colaboradores }) => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>correo</th>
            <th>edad</th>
            <th>cargo</th>
            <th>telefono</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((dataform) => (
            <tr key={dataform.id}>
              <td>{dataform.nombre}</td>
              <td>{dataform.correo}</td>
              <td>{dataform.edad}</td>
              <td>{dataform.cargo}</td>
              <td>{dataform.telefono}</td>
            </tr>
          ))}

        </tbody>
      </Table>
    );
  };
  
  export default Listado;
  