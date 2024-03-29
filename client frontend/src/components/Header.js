import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <div>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>
                <FontAwesomeIcon icon="fa-solid fa-square-phone" /> +569 9984
                5665
              </p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <a
                href="https://www.facebook.com/tuningshoplinares"
                target="_blank"
              >
                <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
              </a>
              <a
                href="https://www.instagram.com/tuninglinares/"
                target="_blank"
              >
                <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="navbar-brand" to="/">
                    <img alt="logo" src="/images/logo.png" />
                  </Link>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/profile">
                          Perfil
                        </Link>

                        <Link
                          className="dropdown-item"
                          to="#"
                          onClick={logoutHandler}
                        >
                          Cerrar sesión
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <FontAwesomeIcon icon="fa-solid fa-user" />
                      </button>
                      <div className="dropdown-menu">
                        <Link className="dropdown-item" to="/login">
                          inicia sesión
                        </Link>

                        <Link className="dropdown-item" to="/register">
                          Crea tu cuenta
                        </Link>
                      </div>
                    </div>
                  )}

                  <Link to="/cart" className="cart-mobile-icon">
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                    <span className="badge">{cartItems.length}</span>
                  </Link>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Buscar..."
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      Buscar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link className="navbar-brand" to="/">
                  <img alt="logo" src="/images/logo.png" />
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Buscar..."
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    Buscar
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                {userInfo ? (
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Bienvenido, {userInfo.name}
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Perfil
                      </Link>

                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={logoutHandler}
                      >
                        Cerrar sesión
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/register">Crea tu cuenta</Link>
                    <Link to="/login">Inicia sesión</Link>
                  </>
                )}

                <Link to="/cart">
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                  <span className="badge">{cartItems.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Header */}
      <div className="nav">
        <div className="container">
          <div className="row">
            <div className="col-md-3 d-flex align-items-center display-none">
              <Link to="/" style={{ color: "white" }}>
                {" "}
                Inicio{" "}
              </Link>
            </div>
            <div className="col-md-3 d-flex align-items-center display-none">
              <Link to="/sobre_nosotros" style={{ color: "white" }}>
                {" "}
                Sobre nosotros{" "}
              </Link>
            </div>
            <div className="col-md-3 d-flex align-items-center display-none">
              <Link to="/horario" style={{ color: "white" }}>
                {" "}
                Horarios{" "}
              </Link>
            </div>
            <div className="col-md-3 d-flex align-items-center display-none">
              <Link to="/ubicacion" style={{ color: "white" }}>
                {" "}
                Donde encontrarnos{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
