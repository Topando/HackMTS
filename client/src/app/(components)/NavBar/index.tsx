import React from 'react';
import { Search } from 'lucide-react';
import LogoBar from './logo'
import './NavBar.css';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <LogoBar />
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
