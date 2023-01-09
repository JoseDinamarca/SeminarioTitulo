import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

const SobreNosotros = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <br></br>
      <div className="justify-content-center d-flex">
        <div className="col-12 col-md-6 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <FontAwesomeIcon icon="fa-solid fa-car-side" />
            </div>

            <h5>Sobre nosotros</h5>
            <div className="justify-content-center d-flex"style={{marginLeft: "50px", marginRight: "50px"}}>
              
              <text>
                Negocio dedicado a la venta de articulos para automovil,
                repuestos, llantas, etc.
                <br></br>
                El mejor lugar para arreglar tu auto con clase esta en Linares.
              </text>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default SobreNosotros;