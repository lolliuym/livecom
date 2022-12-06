import React from "react";

const ProfilePhoto = () => {
  return (
    <div className="profile box px-4 p-4 mt-4">
      <div className="profile__photos container ">
        <div className="row   m-0">
          <div className="profile__photo col-md-3">
            <img src={""} className="photo--full" />
          </div>
          <div className="profile__photo col-md-3">
            <img src={""} className="photo--full" />
          </div>
          <div className="profile__photo col-md-3">
            <img src={""} className="photo--full" />
          </div>
          <div className="profile__photo col-md-3">
            <img src={""} className="photo--full" />
          </div>
        </div>
        <div className="row   m-0">
          <div className="profile__photo col-md-3">
            <img src={""} className="photo--full" />
          </div>
          <div className="profile__photo col-md-3">
            <img src={""} className="photo--full" />
          </div>
          <div className="profile__photo col-md-3">
            <img src={""} className="photo--full" />
          </div>
          <div className="profile__photo col-md-3">
            <img src={""} className="photo--full" />
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <button
                className="btn btn-outline-secondary w-full"
                type="button"
             
              >
                Загрузить фото
              </button>
            </div>
            <div className="col-md-6">
              <button
                className="btn btn-outline-secondary w-full"
                type="button"
              >
                Показать всё
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
