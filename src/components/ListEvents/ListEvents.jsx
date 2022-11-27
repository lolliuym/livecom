import React from "react";
import "./listEvents.css";
import "../../assets/styles/buttons.css";
import ActionOfEvents from "../ActionOfEvents/ActionOfEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved, faShare } from "@fortawesome/free-solid-svg-icons";

const ListEvents = () => {
  return (
    <div className="p-4 box">
      <ActionOfEvents />

      <div className="mt-4 wrapper">
        <div className="wrapper__event">
          <div className="w-full thumbnail">
            <img
              src="../assets/images/thumbnail-1.webp"
              className="w-full h-full"
            />
          </div>
          <div className="mt-4 flex-column d-flex">
            <div className="d-flex ">
              <div className="text-start">
                <h5 className="fw-bold ">
                  <span className="text-dark">
                    Экскурсии по Галерее Люмьер и выставке «Голландская палитра»
                    Пола Брунса
                  </span>
                  <br />
                </h5>
                <p className="m-0 fs-6">
                  Amber Plaza, Краснопролетарская улица, 36, Москва
                  <br />
                </p>
                <p className="mb-2 fw-bold text-primary">
                  08 дек 2022 в 18:00
                  <br />
                </p>
              </div>
            </div>
            <div className="card-people text-dark align-items-center me-auto">
              <div className="me-2">
                <img
                  className="-mr-4 rounded-circle"
                  src="../assets/images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
                  src="../assets/images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
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
            <div className="my-auto mt-2 card-action justify-content-between align-items-center">
              <button className="btn btn-primary" type="button">
                Присоединиться
              </button>
              <div className="d-flex align-content-center align-self-center justify-content-lg-center align-items-lg-center">
                <p className="mb-0 fw-bold me-2">
                  <FontAwesomeIcon
                    className="fs-5 text-danger"
                    icon={faFireFlameCurved}
                  />
                  &nbsp;12
                </p>
                <p className="m-0 fw-bold">
                  <FontAwesomeIcon
                    className="fs-5 text-primary"
                    icon={faShare}
                  />
                  &nbsp;12
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper__event">
          <div className="w-full thumbnail">
            <img
              src="../assets/images/thumbnail-1.webp"
              className="w-full h-full"
            />
          </div>
          <div className="mt-4 flex-column d-flex">
            <div className="d-flex ">
              <div className="text-start">
                <h5 className="fw-bold ">
                  <span className="text-dark">
                    Экскурсии по Галерее Люмьер и выставке «Голландская палитра»
                    Пола Брунса
                  </span>
                  <br />
                </h5>
                <p className="m-0 fs-6">
                  Amber Plaza, Краснопролетарская улица, 36, Москва
                  <br />
                </p>
                <p className="mb-2 fw-bold text-primary">
                  08 дек 2022 в 18:00
                  <br />
                </p>
              </div>
            </div>
            <div className="card-people text-dark align-items-center me-auto">
              <div className="me-2">
                <img
                  className="-mr-4 rounded-circle"
                  src="../assets/images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
                  src="../assets/images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
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
            <div className="my-auto mt-2 card-action justify-content-between align-items-center">
              <button className="btn btn-primary" type="button">
                Присоединиться
              </button>
              <div className="d-flex align-content-center align-self-center justify-content-lg-center align-items-lg-center">
                <p className="mb-0 fw-bold me-2">
                  <FontAwesomeIcon
                    className="fs-5 text-danger"
                    icon={faFireFlameCurved}
                  />
                  &nbsp;12
                </p>
                <p className="m-0 fw-bold">
                  <FontAwesomeIcon
                    className="fs-5 text-primary"
                    icon={faShare}
                  />
                  &nbsp;12
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper__event">
          <div className="w-full thumbnail">
            <img
              src="../assets/images/thumbnail-1.webp"
              className="w-full h-full"
            />
          </div>
          <div className="mt-4 flex-column d-flex">
            <div className="d-flex ">
              <div className="text-start">
                <h5 className="fw-bold ">
                  <span className="text-dark">
                    Экскурсии по Галерее Люмьер и выставке «Голландская палитра»
                    Пола Брунса
                  </span>
                  <br />
                </h5>
                <p className="m-0 fs-6">
                  Amber Plaza, Краснопролетарская улица, 36, Москва
                  <br />
                </p>
                <p className="mb-2 fw-bold text-primary">
                  08 дек 2022 в 18:00
                  <br />
                </p>
              </div>
            </div>
            <div className="card-people text-dark align-items-center me-auto">
              <div className="me-2">
                <img
                  className="-mr-4 rounded-circle"
                  src="../assets/images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
                  src="../assets/images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
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
            <div className="my-auto mt-2 card-action justify-content-between align-items-center">
              <button className="btn btn-primary" type="button">
                Присоединиться
              </button>
              <div className="d-flex align-content-center align-self-center justify-content-lg-center align-items-lg-center">
                <p className="mb-0 fw-bold me-2">
                  <FontAwesomeIcon
                    className="fs-5 text-danger"
                    icon={faFireFlameCurved}
                  />
                  &nbsp;12
                </p>
                <p className="m-0 fw-bold">
                  <FontAwesomeIcon
                    className="fs-5 text-primary"
                    icon={faShare}
                  />
                  &nbsp;12
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper__event">
          <div className="w-full thumbnail">
            <img
              src="../assets/images/thumbnail-1.webp"
              className="w-full h-full"
            />
          </div>
          <div className="mt-4 flex-column d-flex">
            <div className="d-flex ">
              <div className="text-start">
                <h5 className="fw-bold ">
                  <span className="text-dark">
                    Экскурсии по Галерее Люмьер и выставке «Голландская палитра»
                    Пола Брунса
                  </span>
                  <br />
                </h5>
                <p className="m-0 fs-6">
                  Amber Plaza, Краснопролетарская улица, 36, Москва
                  <br />
                </p>
                <p className="mb-2 fw-bold text-primary">
                  08 дек 2022 в 18:00
                  <br />
                </p>
              </div>
            </div>
            <div className="card-people text-dark align-items-center me-auto">
              <div className="me-2">
                <img
                  className="-mr-4 rounded-circle"
                  src="../assets/images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
                  src="../assets/images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
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
            <div className="my-auto mt-2 card-action justify-content-between align-items-center">
              <button className="btn btn-primary" type="button">
                Присоединиться
              </button>
              <div className="d-flex align-content-center align-self-center justify-content-lg-center align-items-lg-center">
                <p className="mb-0 fw-bold me-2">
                  <FontAwesomeIcon
                    className="fs-5 text-danger"
                    icon={faFireFlameCurved}
                  />
                  &nbsp;12
                </p>
                <p className="m-0 fw-bold">
                  <FontAwesomeIcon
                    className="fs-5 text-primary"
                    icon={faShare}
                  />
                  &nbsp;12
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="d-inline-block mt-4">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ListEvents;
