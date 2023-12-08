import { useState } from "react";
import "./adopcionpage.css";
import Toastify from 'toastify-js'

export const AdopcionPage = () => {
  const [form, setForm] = useState({
    nombre: '',
    raza: '',
    anos: '',
    vacunado: '',
    genero: '',
    contacto: '',
    dueno: '',
  })
  const [image, setImage] = useState(null)

  const onChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = async () => {
    console.log('hola', image === null)
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
    const response = await fetch('http://localhost:3000/register-dog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...form, image: url, id_user: user._id})
    })
    if(response.ok) {
      Toastify({
        close: true,
        text: 'Mastoca Registrada corrrectamente',
        duration: 3000,
      }).showToast()
    }else{
      Toastify({
        duration: 3000,
        close: true,
        text: 'error al registrado tu mascota corrrectamente'
      }).showToast()
    }
  }

  const uploadFile = async (file) => {
    const formData = new FormData()  
    console.log(file)
    formData.append('file', file)

    const response = await fetch('http://localhost:3000/upload/file', {
      method: 'POST',
      body: formData
    })
    const {url} = await response.json()

    return url
  }

  return (
    <div className="adopcion_container">
      <div className="adopcion_container-main-box">
        <div className="adopcion_formulario">
          <div className="adopcion_formulario_one-box">
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
          </div>
          <div className="adopcion_formulario_two-box">
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
            <div className="adopcion_formulario_two-box-img">
              <img
                className="perrofeliz-adop"
                src="./public/perro_feliz-icon.png"
              />
            </div>
          </div>
        </div>
        <a onClick={onSubmit} className="btn btn-orange">Registrar</a>
      </div>
    </div>
  );
};
