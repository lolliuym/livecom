import React from "react";
import { useState } from "react";
import { Calendar } from "react-calendar";
import "./createEvent.css";

const CreateEvent = () => {
  const [isOpenModalCreateEvent, setIsOpenModalCreateEvent] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isActiveCalendar, setActiveCalendar] = useState("false");
  const arrayOfClocks = [
    "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18",
    "19", "20", "21", "22", "23"
  ];
  const arrayOfMinutes = [
    "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18",
    "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37",
    "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56",
    "57", "58", "59"
  ];

  const handleToggleCalendar = () => {
    setActiveCalendar(String(!isActiveCalendar));
  };

  return (
    <div>
      <button
        className="btn btn-outline-primary me-4"
        onClick={() => setIsOpenModalCreateEvent(true)}
      >
        Создать мероприятие
      </button>

      {isOpenModalCreateEvent && (
        <div>
          <div
            className="dark-background"
            onClick={() => setIsOpenModalCreateEvent(false)}
          />
          <div className="modal d-block">
            <div className="modal-dialog">
              <form action="">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Создание мероприятия
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setIsOpenModalCreateEvent(false)}
                    ></button>
                  </div>
                  <div className="modal-body text-start">
                    <div className="">
                      <label htmlFor="theme" className="form-label">
                        Название
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="theme"
                        placeholder="..." required
                      ></input>
                    </div>
                    <div className="">
                      <label htmlFor="country" className="form-label">
                        Тематика
                      </label>
                      <select className="form-select" id="country" required>
                        <option value="">Выберите тематику</option>
                        <option id="option" value="art">
                          Искусство и культура
                        </option>
                        <option id="option" value="excursion">
                          Экускурсия
                        </option>
                        <option id="option" value="entertainment">
                          Развлечение
                        </option>
                      </select>
                    </div>
                    <div className="">
                      <label htmlFor="access" className="form-label">
                        Тип встречи
                      </label>
                      <select className="form-select" id="access" required>
                        <option id="option" value="open">
                          Открытая
                        </option>
                        <option id="option" value="private">
                          Закрытая
                        </option>
                      </select>
                    </div>
                    <div className="">
                      <label htmlFor="access" className="form-label">
                        Время начала
                      </label>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-primary"
                          onClick={handleToggleCalendar}
                        >
                          {date.toLocaleDateString("ru-ru", {
                            month: "short",
                            day: "numeric",
                          })}
                          <div className="calendar__creatingEvent">
                            <Calendar
                              onChange={setDate}
                              value={date}
                              className={` ${
                                isActiveCalendar ? "d-none" : "d-block"
                              }  `}
                              locale="ru-Ru"
                            />
                          </div>
                        </button>
                        <span className="px-2"> в </span>
                        <select
                          className="form-select w-80"
                          id="clock"
                          required
                        >
                          {arrayOfClocks.map((clock) => (
                            <option id="option" value={`clock-${clock}`}>
                              {clock}
                            </option>
                          ))}
                        </select>
                        <span className="px-2"> : </span>
                        <select
                          className="form-select w-80"
                          id="clock"
                          required
                        >
                          {arrayOfMinutes.map((minute) => (
                            <option id="option" value={`minute-${minute}`}>
                              {minute}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="">
                      <label htmlFor="theme" className="form-label">
                        Адресс
                      </label>
                      <button className="btn btn-outline-primary d-block">Указать адресс</button>
                    </div>
                    <div className="">
                      <label htmlFor="theme" className="form-label">
                        Чат сообщества
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="chat"
                        placeholder="скинуть ссылку для перехода в чат группы"
                      ></input>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={() => setIsOpenModalCreateEvent(false)}
                    >
                      Отмен
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setIsOpenModalCreateEvent(false)}
                    >
                      Создать сообщество
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateEvent;
