import React from 'react';
import './index.css';


const SideBar = () => {
  return (
    <div className="sidebar-container">
      <nav className="navbar">
        <ul className="navbar-links">
          <li><a href="#home">Сотрудники</a></li>
          <li><a href="#about">Отделы </a></li>
          <li><a href="#services">Древо компании</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
