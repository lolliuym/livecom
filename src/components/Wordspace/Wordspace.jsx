import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./wordspace.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const Wordspace = () => {
  return (
    <div className="box px-4 p-4">
      <div className="wordscape">
        <div>
          <div className="text-start ">
            <h5>Декабрь</h5>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={5}
              slidesPerView={4}
              navigation
            >
              <SwiperSlide>
                <div className="text-center wordspace__date active">
                  <h6 className=" fs-6">Пн</h6>
                  <p className="fw-bold  fs-5 m-0">09</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center wordspace__date ">
                  <h6 className=" fs-6">Пн</h6>
                  <p className="fw-bold  fs-5 m-0">09</p>
                  <div>
                    <FontAwesomeIcon
                      className="fz-6 text-danger"
                      icon={faCircle}
                    />
                    <FontAwesomeIcon
                      className="fz-6 text-primary"
                      icon={faCircle}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center wordspace__date ">
                  <h6 className=" fs-6">Пн</h6>
                  <p className="fw-bold  fs-5 m-0">09</p>
                  <div>
                    <FontAwesomeIcon
                      className="fz-6 text-danger"
                      icon={faCircle}
                    />
                    <FontAwesomeIcon
                      className="fz-6 text-primary"
                      icon={faCircle}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center wordspace__date ">
                  <h6 className=" fs-6">Пн</h6>
                  <p className="fw-bold  fs-5 m-0">09</p>
                  <div>
                    <FontAwesomeIcon
                      className="fz-6 text-danger"
                      icon={faCircle}
                    />
                    <FontAwesomeIcon
                      className="fz-6 text-primary"
                      icon={faCircle}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center wordspace__date ">
                  <h6 className=" fs-6">Пн</h6>
                  <p className="fw-bold  fs-5 m-0">09</p>
                  <div>
                    <FontAwesomeIcon
                      className="fz-6 text-danger"
                      icon={faCircle}
                    />
                    <FontAwesomeIcon
                      className="fz-6 text-primary"
                      icon={faCircle}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center wordspace__date ">
                  <h6 className=" fs-6">Пн</h6>
                  <p className="fw-bold  fs-5 m-0">09</p>
                  <div>
                    <FontAwesomeIcon
                      className="fz-6 text-danger"
                      icon={faCircle}
                    />
                    <FontAwesomeIcon
                      className="fz-6 text-primary"
                      icon={faCircle}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center wordspace__date ">
                  <h6 className=" fs-6">Пн</h6>
                  <p className="fw-bold  fs-5 m-0">09</p>
                  <div>
                    <FontAwesomeIcon
                      className="fz-6 text-danger"
                      icon={faCircle}
                    />
                    <FontAwesomeIcon
                      className="fz-6 text-primary"
                      icon={faCircle}
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center wordspace__date ">
                  <h6 className=" fs-6">Пн</h6>
                  <p className="fw-bold  fs-5 m-0">09</p>
                  <div>
                    <FontAwesomeIcon
                      className="fz-6 text-danger"
                      icon={faCircle}
                    />
                    <FontAwesomeIcon
                      className="fz-6 text-primary"
                      icon={faCircle}
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
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
           
        </div>
      </div>
    </div>
  );
};

export default Wordspace;
