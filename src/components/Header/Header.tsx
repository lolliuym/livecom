import React from "react";
import { NavLink } from "react-router-dom";
import CreateEvent from "../CreateEvent/CreateEvent.tsx";
 
const Header = () => {
  return (
    <div className="bg-white">
      <header className="container p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <NavLink to="/" className="d-flex col-2 align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <img src="" className="me-2"  height="32" alt="LiveCom" />
          </NavLink>

            <form className="col-6 mb-3 mb-lg-0  " role="search">
              <input
                type="search"
                className="form-control"
                placeholder="Поиск"
              />
            </form>

            <div className="d-flex col-4 dropdown  justify-content-end align-items-center">
              <CreateEvent />

              <a
                href="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>

              <ul className="dropdown-menu text-small">
                <li>
                  <NavLink to="/profile" className="dropdown-item">
                    Моя страница
                  </NavLink>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Настройка
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Помощь
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Выход
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
