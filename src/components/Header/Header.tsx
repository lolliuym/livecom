import React from 'react'
// import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <div className="bg-white">
       <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex col-3 align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">

          <img src='../assets/images/logo.png' className="me-2" width="40" height="32" alt="LiveCom"/>
        </a>

        <form className="col-6 mb-3 mb-lg-0  " role="search">
          <input type="search" className="form-control" placeholder="Поиск"  />
        </form>

        <div className="d-flex col-3 dropdown  justify-content-end">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
          </a>
          <ul className="dropdown-menu text-small"  >
            <li><a className="dropdown-item" href="#">Моя страница</a></li>
            <li><a className="dropdown-item" href="#">Настройа</a></li>
            <li><a className="dropdown-item" href="#">Помощь</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Выход</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header></div>
   
  )
}

export default Header
