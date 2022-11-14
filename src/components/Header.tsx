import React from 'react'
// import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <div className="bg-white">
       <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex col-3 align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">

          <img src='../assets/images/logo.png' className="bi me-2" width="40" height="32" alt="LiveCom"/>
        </a>

        <form className="col-6 mb-3 mb-lg-0  " role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="col-3 dropdown text-end">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
          </a>
          <ul className="dropdown-menu text-small"  >
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header></div>
   
  )
}

export default Header
