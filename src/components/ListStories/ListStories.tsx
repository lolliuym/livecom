import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./listStories.css";

const ListStories = () => {
  return (
    <div className="p-4 px-4 box">
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
                <img alt=""
                  src="../images/avatar.jpg"
                  width="40px"
                  height="40px"
                  className="avatar--stories"
                />
              </div>
              <p className="mt-4 fw-bold text-primary">Paragraph</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider slider-img d-lg-flex justify-content-center align-items-end swiper-slide">
            <div className="slider-content">
              <div className="slider-avatar">
                <img
                  src="../images/avatar.jpg"
                  width="40px"
                  height="40px"
                  className="avatar--stories"
                />
              </div>
              <p className="mt-4 fw-bold text-primary">Paragraph</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider slider-img d-lg-flex justify-content-center align-items-end swiper-slide">
            <div className="slider-content">
              <div className="slider-avatar">
                <img
                  src="../images/avatar.jpg"
                  width="40px"
                  height="40px"
                  className="avatar--stories"
                />
              </div>
              <p className="mt-4 fw-bold text-primary">Paragraph</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider slider-img d-lg-flex justify-content-center align-items-end swiper-slide">
            <div className="slider-content">
              <div className="slider-avatar">
                <img
                  src="../images/avatar.jpg"
                  width="40px"
                  height="40px"
                  className="avatar--stories"
                />
              </div>
              <p className="mt-4 fw-bold text-primary">Paragraph</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider slider-img d-lg-flex justify-content-center align-items-end swiper-slide">
            <div className="slider-content">
              <div className="slider-avatar">
                <img
                  src="../images/avatar.jpg"
                  width="40px"
                  height="40px"
                  className="avatar--stories"
                />
              </div>
              <p className="mt-4 fw-bold text-primary">Paragraph</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ListStories;
