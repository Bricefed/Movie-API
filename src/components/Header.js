import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to={"/"}
              end
              className={(nav) =>
                nav.isActive ? "btn-primary active" : "btn-primary"
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/favorites"}
              className={(nav) =>
                nav.isActive ? "btn-primary active" : "btn-primary"
              }
            >
              Coups de coeur
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo">🍿</div>
    </header>
  );
};

export default Header;
