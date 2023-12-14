import './sobrenosotros.css' 
import Image from '../../assets/main_icon.png'
import Perro from '../../assets/image14.png'
import Perro2 from '../../assets/image15.png'

export const SobreNosotros = ( )  => {
  return (
    <div className="sobre-nosotros-box">
      <div className='header-box'>
        <h1>SOBRE NOSOTROS</h1>
        <img src={Image}/>
      </div>
      <div className='subbox'>
        <p>
          Nuestra plataforma web para mascotas en Santa Anita se dedica a mejorar la vida de los animales y sus dueños en nuestra comunidad. Nos enfocamos en promover la adopción responsable y facilitar el proceso de encontrar hogares amorosos y seguros para los animales necesitados. Además de la adopción, ofrecemos herramientas integrales para el cuidado de las mascotas, como registro de mascotas, información sobre su salud, seguimiento de vacunas y programación de citas veterinarias y cuidados preventivos. También hemos integrado una función de localización de veterinarias cercanas, donde los usuarios pueden encontrar clínicas y hospitales veterinarios en Santa Anita, obtener información detallada y leer reseñas de otros usuarios. Nuestro objetivo es asegurar que todas las mascotas reciban la atención médica adecuada de profesionales comprometidos con su salud. Simplificamos la vida de los dueños de mascotas y trabajamos para mantener a sus peludos felices y saludables.
        </p>
        <img src={Perro}/>
        <img src={Perro2}/>
      </div>
    </div>
  )
}