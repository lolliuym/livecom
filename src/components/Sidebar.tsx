import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPeopleGroup, faPhotoFilm, faArrowsTurnToDots } from '@fortawesome/free-solid-svg-icons'
import { faRectangleList } from '@fortawesome/free-regular-svg-icons'
import "../assets/styles/sidebar.css"

const Sidebar = () => {
  return (
    <div className="box">
      <ul className="list-unstyled">
        <li className="list-item">
        <FontAwesomeIcon icon={faHouse} />
           <a className="link text-decoration-none" href="#">
            Моя страница
          </a>
        </li>
        <li className="list-item active">
        <FontAwesomeIcon icon={faRectangleList} />
           <a className="link text-decoration-none" href="#">
            Новости
          </a>
        </li>
        <li className="list-item">
        <FontAwesomeIcon icon={faPeopleGroup} />
           <a className="link text-decoration-none" href="#">
            Мероприятия
          </a>
        </li>
        <li className="list-item">
        <FontAwesomeIcon icon={faPhotoFilm} />
           <a className="link text-decoration-none" href="#">
            Фотогравии
          </a>
        </li>
        <li className="list-item">
        <FontAwesomeIcon icon={faArrowsTurnToDots} />
           <a className="link text-decoration-none" href="#">
            Настройки
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
