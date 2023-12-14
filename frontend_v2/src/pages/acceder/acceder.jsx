import { useNavigate } from 'react-router-dom'
import './acceder.css'
import { useState } from 'react'

export const AccederPage = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
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
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    .then(async (res) => {
      if(res.ok) {
        const data = await res.json()
        navigate('/')
        location.reload()
        localStorage.setItem('user', JSON.stringify(data))
      }
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="login-container">
      <div className="login-container_mainbox">
        <div className="login-form">
          <div className="right">
            <div>
              <span>Username:</span>
              <input value={form.username} name="username" onChange={onChange}/>
            </div>
            <div>
              <span>Contraseña:</span>
              <input value={form.password} name="password" onChange={onChange}/>
            </div>
              <span>No tienes cuenta <a onClick={() => {
                navigate('/crearcuenta')
              }} href='#'>Registrate ahora</a></span>
              <span onClick={onSubmit} className="btn btn-register">Login</span>
          </div>
        </div>
      </div>
    </div>
  )
}