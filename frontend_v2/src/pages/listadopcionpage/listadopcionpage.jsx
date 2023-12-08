import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './listadopcionpage.css'
import { useNavigate } from 'react-router-dom';

export function ListaAdopcionPage() {
  const [dogs, setDogs] = useState([]);

  const navigate = useNavigate()
  useEffect(() => {
    fetch('http://localhost:3000/dog')
      .then((res) => res.json())
      .then((res) => setDogs(res));
  }, []);

  return (
    <div className="listaadop-container">
      <Table striped bordered>
        <thead>
          <tr>
            <th>nombre</th>
            <th>Raza</th>
            <th>Años</th>
            <th>Vacuando</th>
            <th>Genero</th>
            <th>Contacto</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            dogs.map((dog, index) =>(
              <tr key={index}>
                <td>{dog.nombre}</td>
                <td>{dog.raza}</td>
                <td>{dog.anos}</td>
                <td>{dog.vacunado}</td>
                <td>{dog.genero}</td>
                <td>{dog.contacto}</td>
                <td>
                  <span onClick={() => navigate('/adoptado/'+dog._id)} className='btn'>Ver</span> {' '}
                  <span className='btn'>Adoptar</span>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}
