import { useNavigate } from "react-router-dom";
import "./checkoutpage.css";

export const CheckoutPage = () => {
  const navigate = useNavigate()
  const toPay = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    fetch('http://localhost:3000/account/pay/'+user.id ,{
      method: 'POST',
    })
    .then(res => res.json())
    .then(res => {
      localStorage.removeItem('user')
      localStorage.setItem('user', JSON.stringify(res))
      navigate('/listardics')
      location.reload()
    })
  }
  return (
    <div className="checkout_container">
      <div className="checkout_main-box">
        <div className="checkout_main-form">
          <div className="checkout_main-form_inputs">
            <div>
              <span>Numero de Tarjeta </span>
              <input name="pan" placeholder="Ingrese N° de tarjeta " />
            </div>
            <div>
              <span>Fecha de caducidad </span>
              <input name="fecha" placeholder="MM/AA" />
            </div>
            <div>
              <span>Codigo de Verificacion </span>
              <input name="cvc" placeholder="CVC " />
            </div>
          </div>
          <div className="checkout_main-form_info">
            <div className="cards-brands">
              <div>
                <span>Mastercard</span>
                <img src="./public/mc.png" />
              </div>
              <div>
                <span>Visa</span>
                <img src="./public/visa.png" />
              </div>
            </div>
            <img className="note" src="./public/nota-img.png" />
          </div>
        </div>
        <a onClick={toPay} className="btn">Inscribir</a>
      </div>
    </div>
  );
};
