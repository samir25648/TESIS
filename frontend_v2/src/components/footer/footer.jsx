import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer_box">
      <img src="./public/main_icon.png" />
      <div>
        <p className="footer_box-subtitle">Acceso Rápido</p>
        <div className="footer_box-link">
          <a>Inicio</a>
          <a>Poner perro en adopcion</a>
          <a>Inscripción DIC</a>
        </div>
      </div>
      <div>
        <p className="footer_box-subtitle">Acerca de nosotros</p>
        <div className="footer_box-link">
          <a>¿Sobre nosotros?</a>
        </div>
      </div>
      <div>
        <p className="footer_box-subtitle">Siguenos!</p>
        <div className="footer_box-icons">
          <img src="./public/facebook.svg" />
          <img src="./public/instagram.svg" />
          <img src="./public/twitter.svg" />
        </div>
      </div>
    </div>
  );
};
