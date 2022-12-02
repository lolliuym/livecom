import React, { useState } from "react";
import Calendar from "react-calendar";

import "./actionOfEvents.css";
import "../../assets/styles/buttons.css";
import "react-calendar/dist/Calendar.css";

const ActionOfEvents = () => {
  const [date, setDate] = useState(new Date());
  const [isActiveCalendar, setActiveCalendar] = useState("false");
  const themeOptions = [
    {
      value: "all-themes",
      label: "Все",
    },
    {
      value: "art",
      label: "Искусство и культура",
    },
    {
      value: "excursion",
      label: "Экускурсия",
    },
    {
      value: "entertainment",
      label: "Развлечение",
    },
  ];
  const priceOptions = [
    {
      value: "price-all",
      label: "Все",
    },
    {
      value: "price-500",
      label: "до 500",
    },
    {
      value: "price-1000",
      label: "до 1000",
    },
    {
      value: "price-over",
      label: "более 1000",
    },
  ];
  const handleToggleCalendar = () => {
    setActiveCalendar(!isActiveCalendar);
  };

  return (
    <div className="d-flex justify-content-start align-items-center">
      <select className="me-2 btn btn-outline-primary text-start w-180">
        <optgroup>          
          {themeOptions.map((option, index) =>
            
            <option id={`themeOption${index}`} value={option.value}>
            {option.label}
          </option>
        )}
        </optgroup>
      </select>
      <div className="box--calendar me-2">
        <a
          className="btn btn-outline-primary w-180"
          onClick={handleToggleCalendar}
        >
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
        {priceOptions.map((option, index) =>
            
            <option id={`priceOption${index}`} value={option.value}>
            {option.label}
          </option>
        )}
        </optgroup>
      </select>
    </div>
  );
};

export default ActionOfEvents;
