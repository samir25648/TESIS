import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Toastify from 'toastify-js'
import './listardics.css'
import { useNavigate } from 'react-router-dom';

export function ListarDics() {
  const [dogs, setDogs] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'))
  const [form, setForm] = useState({
    nombre: '',
    raza: '',
    anos: '',
    vacunado: '',
    genero: '',
    contacto: '',
  })
  const [image, setImage] = useState(null)
  const navigate = useNavigate()

  const onChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const uploadFile = async (file) => {
    const formData = new FormData()  
    formData.append('file', file)

    const response = await fetch('http://localhost:3000/upload/file', {
      method: 'POST',
      body: formData
    })
    const {url} = await response.json()

    return url
  }

  const onSubmit = async () => {
    if(image === null) {
      Toastify({
        close: true,
        text: 'Llena todos los campos',
        duration: 3000,
      }).showToast()
      return
    } 
    const url = await uploadFile(image[0])

    const user = JSON.parse(localStorage.getItem('user'))
    const response = await fetch('http://localhost:3000/register-dic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...form, image: url, id_user: user.id})
    })
    if(response.ok) {
      setDogs(prev => [...prev, {...form, image: url, id_user: user.id}])
      Toastify({
        close: true,
        text: 'Mastoca Registrada corrrectamente',
        duration: 3000,
      }).showToast()
      location.reload()
    }else{
      Toastify({
        duration: 3000,
        close: true,
        text: 'error al registrado tu mascota corrrectamente'
      }).showToast()
    }
  }
  useEffect(() => {
    fetch('http://localhost:3000/dogme', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: user.id, type: "2"})

    })
      .then((res) => res.json())
      .then((res) => {
        setDogs(res)
      });
  }, [user.id]);

  return (
    <div className="listadic-container">
      <div className='form_registrardic'>
        <div className="input">
          <span>Nombre: *</span>
          <input value={form.nombre} onChange={onChange} name="nombre" />
        </div>
        <div className="input">
          <span>Raza: *</span>
          <input value={form.raza} onChange={onChange} name="raza" />
        </div>
        <div className="input">
          <span>Años: *</span>
          <input value={form.anos} onChange={onChange} name="anos" />
        </div>
        <div className="input">
          <span>¿Vacunado?: *</span>
          <input value={form.vacunado} onChange={onChange}  name="vacunado" />
        </div>
        <div className="input">
          <span>Contacto: *</span>
          <input value={form.contacto} onChange={onChange}  name="contacto" type="number" />
        </div>
        <div className="input">
          <span>Género: *</span>
          <select value={form.genero} onChange={onChange} name='genero'>
            <option>Seleccionar...</option>
            <option value='M'>Macho</option>
            <option value='F'>Hembra</option>
          </select>
        </div>
        <div className="input">
          <span>Image: *</span>
          <input onChange={(e) => setImage(e.target.files)} name="file" type="file" />
        </div>
        <span onClick={onSubmit} className='btn submit'>Añadir</span>
      </div>
      <Table className='table' striped bordered>
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
                  <span onClick={() => navigate('/dic/'+dog._id)} className='btn'>Ver</span> {' '}
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}
