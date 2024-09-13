import React from 'react';
import './header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header ">
      <div className="inner-header flex">
        <div className="header-content container">
            <img src="" alt="Логотип"  />
            <div className="header-navigate">
                <ul>
{/* 
                    <li>О нас </li>
                    <li>Контакты </li> */}
                    <Link to='/'>Главная</Link>
                    <Link to='/products'>Товары</Link>
                    <Link to='/about'>О нас </Link>
                    <Link to='/contact'>Контакты </Link>
                </ul>
            </div>
            <div className="header-contact">Телефон : +987654321</div>
        </div>
      </div>
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Header;
