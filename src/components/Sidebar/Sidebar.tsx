import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPeopleGroup, faPhotoFilm, faArrowsTurnToDots } from '@fortawesome/free-solid-svg-icons'
import { faRectangleList } from '@fortawesome/free-regular-svg-icons'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="box">
      <ul className="list-unstyled">
        <li className="list-item">        
           <a className="link active text-decoration-none" href="#">
            <FontAwesomeIcon icon={faHouse} />
            Моя страница
          </a>
        </li>
        <li className="list-item ">
           <a className="link text-decoration-none" href="#"><FontAwesomeIcon icon={faRectangleList} />
            Новости
          </a>
        </li>
        <li className="list-item">
           <a className="link text-decoration-none" href="#"><FontAwesomeIcon icon={faPeopleGroup} />
            Мероприятия
          </a>
        </li>
        <li className="list-item">
           <a className="link text-decoration-none" href="#"><FontAwesomeIcon icon={faPhotoFilm} />
            Фотогравии
          </a>
        </li>
        <li className="list-item">
           <a className="link text-decoration-none" href="#"> <FontAwesomeIcon icon={faArrowsTurnToDots} />
            Настройки
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
