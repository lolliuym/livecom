import React from "react";
import "./actionOfEvents.css";
import "../../assets/styles/buttons.css";

const ActionOfEvents = () => {
  return (

      
      <div className="d-flex justify-content-between align-items-center">
        <div className="input-group mr-1 ">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            className="input-group_input form-control"
            placeholder="поиск мероприятия"
          />
        </div>
         <select className="btn btn-outline-secondary w-145 mr-1">
          <optgroup label="Сортировка">
            <option value="popular" selected>
              Популярные
            </option>
            <option value="novelties">Новинки</option>
            <option value="view-count">Количество просмотров</option>
            <option value="rating">Рейтинг</option>
          </optgroup>
        </select>
        <select className="btn btn-outline-secondary">
          <optgroup label="Тема">
            <option value="popular" selected>
              IT
            </option>
            <option value="science">Наука</option>
            <option value="sport">Спорт</option>
            <option value="evening-parties">Вечерники</option>
            <option value="other">Другие</option>
          </optgroup>
        </select>
      </div>     

  

  );
};

export default ActionOfEvents;
