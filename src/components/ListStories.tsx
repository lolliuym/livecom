import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../assets/styles/listStories.css";

const ListStories = () => {
  return (
    <div className="box px-4 p-4 mt-4">
      <h3 className="text-start">Истории</h3>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="slider slider-img d-lg-flex justify-content-center align-items-end swiper-slide">
            <div className="slider-content">
              <div className="slider-avatar">
                <img
                  src="../assets/images/avatar.jpg"
                  width="40px"
                  height="40px"
                  className="avatar--stories"
                />
              </div>
              <p className="fw-bold text-primary mt-4">Paragraph</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider slider-img d-lg-flex justify-content-center align-items-end swiper-slide">
            <div className="slider-content">
              <div className="slider-avatar">
                <img
                  src="../assets/images/avatar.jpg"
                  width="40px"
                  height="40px"
                  className="avatar--stories"
                />
              </div>
              <p className="fw-bold text-primary mt-4">Paragraph</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider slider-img d-lg-flex justify-content-center align-items-end swiper-slide">
            <div className="slider-content">
              <div className="slider-avatar">
                <img
                  src="../assets/images/avatar.jpg"
                  width="40px"
                  height="40px"
                  className="avatar--stories"
                />
              </div>
              <p className="fw-bold text-primary mt-4">Paragraph</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider slider-img d-lg-flex justify-content-center align-items-end swiper-slide">
            <div className="slider-content">
              <div className="slider-avatar">
                <img
                  src="../assets/images/avatar.jpg"
                  width="40px"
                  height="40px"
                  className="avatar--stories"
                />
              </div>
              <p className="fw-bold text-primary mt-4">Paragraph</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider slider-img d-lg-flex justify-content-center align-items-end swiper-slide">
            <div className="slider-content">
              <div className="slider-avatar">
                <img
                  src="../assets/images/avatar.jpg"
                  width="40px"
                  height="40px"
                  className="avatar--stories"
                />
              </div>
              <p className="fw-bold text-primary mt-4">Paragraph</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ListStories;
