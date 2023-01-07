import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

const Horario = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <br></br>
      <div className="justify-content-center d-flex">
        <div className="col-md-4 contact-Box">
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
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Horario;