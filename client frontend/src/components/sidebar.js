import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <li className="test">
            <span className="text">
              Categorías
            </span>
          </li>
        </div>

        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/search/batería"
                exact={true}
              >
                <span className="text">Baterías</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/search/lubricantes"
              >
                <span className="text">Lubricantes</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                activeClassName="active"
                className="menu-link"
                to="/search/accesorios"
              >
                <span className="text">Accesorios</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;