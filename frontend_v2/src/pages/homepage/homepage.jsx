import { useNavigate } from "react-router-dom";
import "./homepage.css";

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="main_container">
      <div className="main_box">
        <div className="box">
          <div className="main_box-text">
            <h1>Busca a tu perro ideal</h1>
            <p>Miles de animales están esperándote.</p>
          </div>
          <div className="main_box-search">
            <img src="./public/search_icon.svg" />
            <input
              placeholder="Busca a tu compañero de vida."
              type="text"
              className="search"
            />
          </div>
          <span onClick={() => navigate('/dogs')} className="btn">Buscar</span>
        </div>
      </div>
      <div className="map_box">
        <div className="map_box-header">
          <h2>Veterinarias en Santa Anita</h2>
        </div>
        <img alt="map" src="./public/map.png" />
      </div>
    </div>
  );
};
