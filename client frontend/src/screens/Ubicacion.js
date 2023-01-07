import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleMaps from "simple-react-google-maps";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

const Ubicacion = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <br></br>
      <div className="justify-content-center d-flex">
        <div className="col-12 col-md-10 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            </div>
            <h5>Nuestra ubicacion</h5>
            <p>Brasil #0196, Linares, Chile</p>
            <GoogleMaps
              apiKey={"AIzaSyCvw1RyNUZyfciKq6V_TXOJjsIHdpKMFyI"}
              style={{ height: "500px", width: "800px" }}
              zoom={18}
              center={{
                lat: -35.85561846828572,
                lng: -71.5939696916276,
              }}
            ></GoogleMaps>
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Ubicacion;