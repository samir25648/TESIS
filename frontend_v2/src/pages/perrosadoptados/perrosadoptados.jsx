import {Table} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import './PerrosAdoptados.css'
import { useNavigate } from 'react-router-dom';

export const PerrosAdoptados = () => {
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  const registerDic = (id) => {
    fetch('http://localhost:3000/passtodic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id})
    })
    .then(res => {
      if(res.ok) {
        navigate('/listardics')
        location.reload()
      }
    })
  }

  useEffect(() => {
    fetch('http://localhost:3000/dogme', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: user._id, type: "1"})
    })
      .then((res) => res.json())
      .then((res) => setDogs(res));
  }, [user._id]);

  return (
    <div className="perrosadoptados-container">
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
                  <span onClick={() => registerDic(dog._id)} className='btn'>Inscripcion DIC</span>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}
