import React from 'react';
import { Search } from 'lucide-react';
import './index.css';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="search-container">
          <Search className="search-icon" />
          <input
            className="search-input"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;