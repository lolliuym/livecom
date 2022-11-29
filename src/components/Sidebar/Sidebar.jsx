import React from "react";
import {  NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPeopleGroup,
  faPhotoFilm,
  faArrowsTurnToDots,
} from "@fortawesome/free-solid-svg-icons";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="box">
      <ul className="list-unstyled">
        <li className="list-item">
          <NavLink to="/profile">
            <a className="link text-decoration-none" href="#">
              <FontAwesomeIcon icon={faHouse} />
              Моя страница
            </a>
          </NavLink>
        </li>
        <li className="list-item ">
          <NavLink to="/">
            <a className="link text-decoration-none" href="#">
              <FontAwesomeIcon icon={faRectangleList} />
              Новости
            </a>
          </NavLink>
        </li>
        <li className="list-item">
          <a className="link text-decoration-none" href="#">
            <FontAwesomeIcon icon={faPeopleGroup} />
            Мероприятия
          </a>
        </li>
        <li className="list-item">
          <a className="link text-decoration-none" href="#">
            <FontAwesomeIcon icon={faPhotoFilm} />
            Фотографии
          </a>
        </li>
        <li className="list-item">
          <a className="link text-decoration-none" href="#">
    
            <FontAwesomeIcon icon={faArrowsTurnToDots} />
            Настройки
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
