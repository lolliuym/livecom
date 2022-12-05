import React, { useState } from "react";
import Calendar from "react-calendar";

import "./actionOfEvents.css";
import "../../assets/styles/buttons.css";
import "react-calendar/dist/Calendar.css";

const ActionOfEvents = () => {
  const [date, setDate] = useState(new Date());
  const [isActiveCalendar, setActiveCalendar] = useState("false")

  const handleToggleCalendar = () => {
    setActiveCalendar(String(!isActiveCalendar))
  }

  return (
    <div className="d-flex justify-content-start align-items-center">
      <select className="me-2 btn btn-outline-primary text-start w-180">
        <optgroup>
        <option id="option" value="all-teams">
            Все
          </option>
          <option id="option" value="art">
            Искусство и культура
          </option>

          <option id="option" value="excursion">
            Экускурсия
          </option>
          <option id="option" value="entertainment">
            Развлечение
          </option>
        </optgroup>
      </select>
      <div className="box--calendar me-2">
        <a className="btn btn-outline-primary w-180" onClick={handleToggleCalendar}>
          {date.toLocaleDateString("ru-ru", {
            weekday: "long",
            month: "short",
            day: "numeric",
          })}
        </a>

        <div className="calendar__listOfEvent">
          <Calendar
            onChange={setDate}
            value={date}
            className={` ${isActiveCalendar ? "d-none" : "d-block"}  `}
            locale="ru-Ru"
          />
        </div>
      </div>
      <select className="me-1 btn btn-outline-primary text-start w-180">
        <optgroup>
          <option id="option" value="price-all" >
            Все
          </option>
          <option id="option" value="price-free">
            Бесплатно
          </option>

          <option id="option" value="price-500">
            до 500 ₽
          </option>
          <option id="option" value="price-1000">
            до 1000 ₽
          </option>
          <option id="option" value="price-over">
            более 1000 ₽
          </option>
        </optgroup>
      </select>
    </div>
  );
};

export default ActionOfEvents;
