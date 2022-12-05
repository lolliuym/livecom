import React from "react";
import { useState } from "react";
import { Calendar } from "react-calendar";
import "./createEvent.css";
import {
  YMaps,
  Map,
  ZoomControl,
  FullscreenControl,
  SearchControl,
  GeolocationControl,
  Placemark,
  ObjectManager,
} from "react-yandex-maps";

const CreateEvent = () => {
  const [event, setEvent] = useState("");
  const [document, setDocument] = useState([]);
  const [theme, setTheme] = useState("");
  const [typeEvent, setTypeEvent] = useState("");
  const [price, setPrice] = useState("");
  const [typeGroup, setTypeGroup] = useState("");
  const [data, setData] = useState("");
  const [clock, setClock] = useState("");
  const [minute, setMinute] = useState("");
  const [address, setAddress] = useState("");
  const [linkToJoin, setLinkToJoin] = useState("");

  const onChange = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setDocument([...document, event.target.value]);
    } else {
      const index = document.indexOf(event.target.value);
      document.splice(index, 1);
      setDocument(document);
    }
    console.log(document);
  };

  const article = {
    id: Date.now(),
    event,
    document,
    theme,
    typeEvent,
    price,
    typeGroup,
    data,
    clock,
    minute,
    address,
    linkToJoin,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();

    setEvent("")
    setDocument([])
    setTheme("")
    setTypeEvent("")
    setPrice("")
    setTypeGroup("")
    setData("")
    setClock("")
    setMinute("")
    setAddress("")
    setLinkToJoin("")
   
  };

  async function fetchData() {
    const { data } = await axios
      .post("/data/db.json", article)
      .then((response) => {
        console.log(response.data);
      });
    setPost(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  
  const [isOpenModalCreateEvent, setIsOpenModalCreateEvent] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isActiveCalendar, setActiveCalendar] = useState("false");
  const getStringDigits = (length) =>
    new Array(length)
      .fill(0)
      .map((el, index) => String(el + index).padStart(2, "0"));

  const arrayOfClocks = getStringDigits(24);
  const arrayOfMinutes = getStringDigits(60);
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
                      <label for="theme" className="form-label">
                        Название
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="theme"
                        placeholder="..."
                        onChange={(e) => setTheme(e.target.value)}
                      ></input>
                    </div>
                    <div className="">
                      <label for="country" className="form-label">
                        Тематика
                      </label>
                      <select
                        className="form-select"
                        onChange={(e) => setTypeEvent(e.target.value)}
                        required
                      >
                        <option value="">Выберите тематику</option>
                        {themeOptions.map((option, index) => (
                          <option
                            id={`themeOption${index}`}
                            value={option.value}
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="">
                      <label for="prices" className="form-label">
                        Тематика
                      </label>
                      <select
                        className="form-select"
                        onChange={(e) => setPrice(e.target.value)}
                        required
                      >
                        <option value="">Выберите цену</option>
                        {priceOptions.map((option, index) => (
                          <option
                            id={`priceOption${index}`}
                            value={option.value}
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="">
                      <label for="access" className="form-label">
                        Тип встречи
                      </label>
                      <select
                        className="form-select"
                        id="access"
                        onChange={(e) => setTypeGroup(e.target.value)}
                        required
                      >
                        <option id="option" value="open">
                          Открытая
                        </option>
                        <option id="option" value="private">
                          Закрытая
                        </option>
                      </select>
                    </div>
                    <div className="">
                      <label for="access" className="form-label">
                        Время начала
                      </label>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-primary"
                          onClick={handleToggleCalendar}
                          onChange={(e) => setData(e.target.value)}
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
                          onChange={(e) => setClock(e.target.value)}
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
                          onChange={(e) => setMinute(e.target.value)}
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
                      <label for="theme" className="form-label">
                        Адрес
                      </label>
                      <button
                        className="btn btn-outline-primary d-block"
                        onChange={(e) => setAddress(e.target.value)}
                      >
                        Указать адрес
                      </button>
                    </div>
                    <div className="">
                      <label for="theme" className="form-label">
                        Чат сообщества
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="chat"
                        placeholder="скинуть ссылку для перехода в чат группы"
                        onChange={(e) => setLinkToJoin(e.target.value)}
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
                      Отмена
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
