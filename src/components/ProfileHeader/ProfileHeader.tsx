import React from "react";
import './profileHeader.css'

const ProfileHeader = () => {
  return (
    <div className="profile box px-4 p-4 mt-4">
      <div className="profile__thumbnail"></div>
      <div>
        <div className="container position-relative"  >
          <div className="row">
            <div className="col-md-2">
              <div className="profile__avatar"></div>
            </div>
            <div className="col-md-7">
              <h4 className="mb-0" >Валерий Анестиади</h4>
              <h6>Ни дня без азартов</h6>
              <div>
                <a className="link-dark" href="#">
                  <i className="far fa-star"></i>Link
                </a>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
