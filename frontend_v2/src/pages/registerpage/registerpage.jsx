import { useState } from "react"
import './registerpage.css'
import {useNavigate} from 'react-router-dom'

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    username: ''
  })

  const onChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = () => {
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    .then(async (res) => {
      console.log(res)
      if(res.ok) {
        const data = await res.json()
        navigate('/')
        location.reload()
        console.log(data)
        localStorage.setItem('user', JSON.stringify(data))
      }
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="login-container">
      <div className="login-container_mainbox">
        <div className="login-form">
          <div className="left">
            <div>
              <span>Nombre:</span>
              <input value={form.firstname} name="firstname" onChange={onChange}/>
            </div>
            <div>
              <span>Apellido:</span>
              <input value={form.lastname} name="lastname" onChange={onChange}/>
            </div>
            <div>
              <span>Username:</span>
              <input value={form.username} name="username" onChange={onChange}/>
            </div>
          </div>
          <div className="right">
            <div>
              <span>Correo:</span>
              <input value={form.email} name="email" onChange={onChange}/>
            </div>
            <div>
              <span>Contraseña:</span>
              <input value={form.password} name="password" onChange={onChange}/>
            </div>
            <span onClick={onSubmit} className="btn btn-register">Crear Cuenta</span>
          </div>
        </div>
      </div>
    </div>
  )
}