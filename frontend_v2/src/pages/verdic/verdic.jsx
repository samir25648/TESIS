import './verdic.css'
import { useEffect, useState } from "react";
import Toastify from 'toastify-js'
import { useParams } from "react-router-dom"

export const VerDic = () => {
  const { id } = useParams();
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
      setDog(res)
    })
  }, [id])

  const perdido = () => {
    Toastify({
      close: true,
      text: 'Perro reportado como perdido!',
      duration: 3000,
    }).showToast()
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
          <span onClick={perdido} className='btn btn-red'>Perdido!!</span>
        </div>
      </div>
    </div>
  )
}