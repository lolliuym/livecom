import React from "react";
import "./listEvents.css";
import "../../assets/styles/buttons.css";
import ActionOfEvents from "../ActionOfEvents/ActionOfEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved, faShare } from "@fortawesome/free-solid-svg-icons";

const ListEvents = () => {
  return (
    <div className="box mt-4 p-4">
      <ActionOfEvents />

      <div className="mt-4">
        <div>
          <div className="w-full thumbnail">
            <img
              src="../assets/images/thumbnail-1.webp"
              className="w-full h-full"
            />
          </div>
          <div className="flex-column d-flex mt-4">
            <div className="d-flex mb-2  ">
              <div className="text-center card-content text-dark">
                <h4 className="m-0   text-uppercase">Дек</h4>
                <p className="fs-2 fw-bold">
                  08
                  <br />
                </p>
              </div>
              <div className="p-4 text-start">
                <h5 className="fw-bold ">
                  <span className="text-dark">
                    Экскурсии по Галерее Люмьер и выставке «Голландская палитра»
                    Пола Брунса
                  </span>
                  <br />
                </h5>
                <p className="m-0">
                  Amber Plaza, Краснопролетарская улица, 36, Москва
                  <br />
                </p>
                <p className="fw-bold mb-2 text-primary">
                  08 дек 2022 в 18:00
                  <br />
                </p>
              </div>
            </div>
            <div className="card-people text-dark align-items-center me-auto">
              <div className="me-2">
                <img
                  className="rounded-circle -mr-4"
                  src="../assets/images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="rounded-circle -mr-4"
                  src="../assets/images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="rounded-circle -mr-4"
                  src="../assets/images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
              </div>
              <div>
                <p className="m-0 fs-6">
                  <strong className="text-dark card-members_strong">
                    &nbsp;5&nbsp;
                  </strong>
                  &nbsp;друга и&nbsp;
                  <strong className="text-dark card-members_strong">
                    &nbsp;115&nbsp;
                  </strong>
                  &nbsp;участников
                </p>
              </div>
            </div>
            <div className="card-action justify-content-between my-auto align-items-center mt-2">
              <button className="btn btn-primary" type="button">
                Присоединиться
              </button>
              <div className="d-flex align-content-center align-self-center justify-content-lg-center align-items-lg-center">
                <p className="fw-bold mb-0  me-2">
                  <FontAwesomeIcon className="fs-5 text-danger" icon={faFireFlameCurved} />
                  &nbsp;12
                </p>
                <p className="fw-bold m-0">
                  <FontAwesomeIcon className="fs-5 text-primary" icon={faShare} />
                  &nbsp;12
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEvents;
