import { Link } from "react-router-dom";
import "./paymentPage.css";

export const PaymentPage = () => {


  return (
    <div className="payment_container">
      <div className="payment_container-header">
        <h2>Inscribe a tu mascota en DIC!!</h2>
        <p>
          PeTec es pasión y amor por los perros ❤️
          <br />
          Es por eso que al hacer el registro pueda mantener viva tu API
          favorita.
        </p>
      </div>
      <div className="payment_container-cards">
        <div className="payment_container-card-one card-payment">
          <img className="perrofeliz" src="./public/perro_triste-icon.png" />
          <span>Al No tener Dic</span>
          <p>
            Acá podrás visualizar cuales son las desventajas de su mascota al no
            tener DIC (Documento de Identificación Canina)
          </p>
        </div>
        <div className="payment_container-card-two card-payment">
          <span>Ventajas y Desventajas de Dic</span>
          <p>
            Tú mascota estará registrada y al momento que se pierda, avisará o
            alertará a todas los usuarios, veterinarias y perreras de la zona de
            Santa Anita la información dada osea su DIC
          </p>
        </div>
        <div className="payment_container-card-three card-payment">
          <div className="payment_container-card-three_img">
            <img className="" src="./public/perro_feliz-icon.png" />
            <img className="" src="./public/heart-icon.png" />
          </div>
          <span>Al Si tener DIC</span>
          <p>
            Acá podrás visualizar cuales son las ventajas de su mascota si tiene
            DIC (Documento de Identificación Canina)
          </p>
        </div>
        <div className="payment_container-card-four card-payment">
          <span>Beneficios al inscribir a tu mascota</span>
          <p>
            En tu primer mes de suscripción te regalaremos productos para tus
            animales registrado, no pierdas esta gran oportunidad.
          </p>
          <p>La inscipción tendrá un costo de tan solo 10 soles.</p>
        </div>
        <div className="payment_container-methods">
          <h2>Otros métodos de pago</h2>
          <div className="payment-methods">
            <div className="payment-method">
              <div>
                <img src="./public/visa.png" />
                <p>Visa</p>
              </div>
              <Link to="/checkout" className="btn btn-orange">
                Pagar
              </Link>
            </div>
            <div className="payment-method">
              <div>
                <img src="./public/mc.png" />
                <p>Mastercard</p>
              </div>
              <Link to="/checkout" className="btn btn-orange">
                Pagar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
