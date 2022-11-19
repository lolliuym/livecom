import React from 'react'

const ProfilePhoto = () => {
  return (
    <div>
    <div>
        <div className="container" style="padding: 0;margin: 12px;border-radius: 15px;overflow: hidden;">
            <div className="row" style="margin: 0;">
                <div className="col-md-3" style="padding: 0;background: var(--bs-border-color-translucent);">
                    <div style="width: 180px;height: 180px;background: var(--bs-red);"></div>
                </div>
                <div className="col-md-3" style="padding: 0;"></div>
                <div className="col-md-3" style="padding: 0;"></div>
                <div className="col-md-3" style="padding: 0;"></div>
            </div>
            <div className="row" style="margin: 0;">
                <div className="col-md-3" style="padding: 0;background: var(--bs-border-color-translucent);">
                    <div style="width: 180px;height: 180px;background: var(--bs-red);"></div>
                </div>
                <div className="col-md-3" style="padding: 0;"></div>
                <div className="col-md-3" style="padding: 0;"></div>
                <div className="col-md-3" style="padding: 0;"></div>
            </div>
        </div>
    </div>
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6"><button className="btn btn-outline-secondary" type="button" style="width: 100%;">Загрузить фото</button></div>
                <div className="col-md-6"><button className="btn btn-outline-secondary" type="button" style="width: 100%;">Показать всё</button></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProfilePhoto
