import React, { useRef, useEffect, useState } from "react";
// @ts-ignore
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "./listEvents.css";
import "../../assets/styles/buttons.css";
import ActionOfEvents from "../ActionOfEvents/ActionOfEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved, faShare } from "@fortawesome/free-solid-svg-icons";

const ListEvents = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicnViaWFxdXRlIiwiYSI6ImNrdWZndTJ1MjBtOGsycHFrZmFxanFvM2QifQ.ftLft-x0arMll3Pd_A7Ghw";
  const mapContainer = useRef(null);

  const map = useRef(null);
  const [lng, setLng] = useState(37.625090);
  const [lat, setLat] = useState(55.751468);
  const [zoom, setZoom] = useState(10);

 

  const coordinates = [
    [37.60588, 55.780046],
    [37.642159, 55.797152],
    [37.672974, 55.712488],
    [37.587957, 55.678138],
  ];

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    coordinates.map((coords) => {
     return new mapboxgl.Marker({
       color: "#000000",
       scale: 0.75,
       draggable: false,
     })
       .setLngLat(coords)
       .addTo(map.current);
    });
    })
    

  return (
    <div className="p-4 box">
      <ActionOfEvents />
        <div>
          <div ref={mapContainer} className="map-container" />
        </div>

      <div className="mt-4 wrapper">
        <div className="wrapper__event">
          <div className="d-flex w-full thumbnail">
            <img src="../images/thumbnail-1.webp" className="w-full h-full" />
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
                  src="../images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
                  src="../images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
                  src="../images/avatar.jpg"
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
          <div className=" d-flex w-full thumbnail">
            <img src="../images/thumbnail-1.webp" className="w-full h-full" />
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
                  src="../images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
                  src="../images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
                  src="../images/avatar.jpg"
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
          <div className=" d-flex w-full thumbnail">
            <img src="../images/thumbnail-1.webp" className="w-full h-full" />
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
                  src="../images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
                  src="../images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
                  src="../images/avatar.jpg"
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
          <div className=" d-flex w-full thumbnail">
            <img src="../images/thumbnail-1.webp" className="w-full h-full" />
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
                  src="../images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
                  src="../images/avatar.jpg"
                  width="35px"
                  height="35px"
                />
                <img
                  className="-mr-4 rounded-circle"
                  src="../images/avatar.jpg"
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
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ListEvents;
