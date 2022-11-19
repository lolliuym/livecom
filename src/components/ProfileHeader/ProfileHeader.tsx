import React from 'react'

const ProfileHeader = () => {
  return (
    <div>
    <div style="width: 100%;height: 300px;background: var(--bs-green);"></div>
    <div>
        <div className="container" style="position: relative;">
            <div className="row">
                <div className="col-md-2">
                    <div style="position: absolute;width: 80px;height: 80px;border: 3px solid var(--bs-gray-600);border-radius: 50%;background: var(--bs-code-color);"></div>
                </div>
                <div className="col-md-7">
                    <h4 style="margin-bottom: 0;">Валерий Анестиади</h4>
                    <h6>Ни дня без азартов</h6>
                    <div><a className="link-dark" href="#"><i className="far fa-star"></i>Link</a></div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProfileHeader
