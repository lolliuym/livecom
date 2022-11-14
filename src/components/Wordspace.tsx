import React from "react";
import "../assets/styles/wordspace.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const Wordspace = () => {
  return (
    <div className="box px-4 p-4 mt-4">
      <div className="wordscape">
        <div>
          <div className="d-flex justify-content-between align-items-center align-items-lg-center">
            <h5>Декабрь</h5>
            <div>
              <FontAwesomeIcon className=" mr-2" icon={faChevronLeft} />
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="text-center wordspace__date active">
              <h6 className=" fs-6">Пн</h6>
              <p className="fw-bold  fs-5 m-0">09</p>
            </div>
            <div className="text-center wordspace__date ">
              <h6 className=" fs-6">Пн</h6>
              <p className="fw-bold  fs-5 m-0">09</p>
              <div>
              <FontAwesomeIcon
                  className="fz-6 text-danger"
                  icon={faCircle}
                />
                <FontAwesomeIcon className="fz-6 text-primary" icon={faCircle} />
              </div>
            </div>
            <div className="text-center wordspace__date ">
              <h6 className=" fs-6">Пн</h6>
              <p className="fw-bold  fs-5 m-0">09</p>
              <div>
              <FontAwesomeIcon
                  className="fz-6 text-danger"
                  icon={faCircle}
                />
                <FontAwesomeIcon className="fz-6 text-primary" icon={faCircle} />
              </div>
            </div>
            <div className="text-center wordspace__date ">
              <h6 className=" fs-6">Пн</h6>
              <p className="fw-bold  fs-5 m-0">09</p>
              <div>
              <FontAwesomeIcon
                  className="fz-6 text-danger"
                  icon={faCircle}
                />
                <FontAwesomeIcon className="fz-6 text-primary" icon={faCircle} />
              </div>
            </div>
          </div>
        </div>
        <div className="hr"></div>
        <div className="text-center timetable">
          <h5 className="m-0">Расписание</h5>
          <div className="mt-4">
            <div className="d-flex">
              <div className="timetable__date  ">
                <h6 className="text-gray fs-6">Пн</h6>
                <p className="fw-bold text-dark  fs-5 m-0">09</p>
              </div>
              <div className="timetable__content   flex-grow-1">
                <div className="timetable__info">
                  <h6 className="fs-6 text-dark fs-6">
                    Тренинг&nbsp; "Психологическая устойчивость"
                  </h6>
                  <p className="fw-bold text-black-50 fs-6 m-0">
                    17:00-18:00 Онлайн
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="d-flex">
              <div className="timetable__date  ">
                <h6 className="text-gray fs-6">Пн</h6>
                <p className="fw-bold text-dark  fs-5 m-0">09</p>
              </div>
              <div className="timetable__content   flex-grow-1">
                <div className="timetable__info">
                  <h6 className="fs-6 text-dark fs-6">
                    Тренинг&nbsp; "Психологическая устойчивость"
                  </h6>
                  <p className="fw-bold text-black-50 fs-6 m-0">
                    17:00-18:00 Онлайн
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary mt-2" type="button">
            Еще остальные&nbsp; <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wordspace;
