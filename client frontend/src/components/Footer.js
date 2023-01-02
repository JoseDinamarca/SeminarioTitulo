import React from "react";
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <FontAwesomeIcon icon="fa-solid fa-clock" />
            </div>
            <h5>Horarios de atención</h5>
            <div className="justify-content-center d-flex">
              <text>
                Lunes 10:00 - 18:00<br></br>
                Martes 10:00 - 18:00<br></br>
                Miércoles 10:00 - 18:00<br></br>
                Jueves 10:00 - 18:00<br></br>
                Viernes 10:00 - 18:00<br></br>
                Sábado 09:30 - 14:00<br></br>
                Domingo CERRADO
              </text>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <FontAwesomeIcon icon="fa-solid fa-car-side" />
            </div>
            <h5>Sobre nosotros</h5>
            <p>Negocio dedicado a la venta de articulos para automovil, repuestos, llantas, etc.</p>
            <p>El mejor lugar para arreglar tu auto con clase esta en Linares.</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            </div>
            <h5>Nuestra ubicacion</h5>
            <p>Brasil #0196, Linares, Chile</p>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Footer;
