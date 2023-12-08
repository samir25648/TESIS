import './adoptados.css'
import { useEffect, useState } from "react";
import Toastify from 'toastify-js'
import { useNavigate, useParams } from "react-router-dom"

export const Adoptados = () => {
  const { id } = useParams();
  const navegate = useNavigate()
  console.log(id)
  const [dog, setDog] = useState({
    id: '',
    nombre: '',
    raza: '',
    anos: '',
    vacunado: '',
    genero: '',
    image: '',
    contacto: '',
    dueno: '',
  })
  useEffect(() => {
    fetch('http://localhost:3000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id })
    })
    .then(res => res.json())
    .then(res => {
      console.log(res.image)
      setDog(res)
    })
  }, [id])

  const adotame = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    fetch('http://localhost:3000/adoptar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: dog._id, id_user: user._id })
    })
    .then(res => {
      if(res.ok) {
        Toastify({
          close: true,
          text: 'Perro Adoptado correctamente',
          duration: 3000,
        }).showToast()
        navegate('/listaadoptados')
      }
    })
  }

  return (
    <div className="adoptado_container">
      <div className='main_box_adoptado'>
        <img src={dog.image} width={300}/>
        <div className='description'>
          <h1>{dog.nombre}</h1>
          <div className='desc_box'>
            <div>
              <p>Raza: {dog.raza}</p>
              <p>Años: {dog.anos}</p>
            </div>
            <div>
              <p>Vacunado: {dog.vacunado}</p>
              <p>Genero: {dog.genero}</p>
            </div>
            <div>
              <p>Contacto: {dog.contacto}</p>
            </div>
          </div>
          <span onClick={adotame} className='btn'>adoptame</span>
        </div>
      </div>
    </div>
  )
}