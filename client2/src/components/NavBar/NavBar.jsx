import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Search } from 'lucide-react';
import './index.css';
import LogoBar from './Logo';
import { searchData } from '../../features/slices/dataSlice'; 

const NavBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(''); // Объявляем состояние для ввода

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      dispatch(searchData(searchQuery)); // Отправляем запрос поиска
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <LogoBar />
        <div className="search-container">
          <Search className="search-icon" onClick={handleSearch} />
          <input
            className="search-input"
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Обновляем состояние
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch(); // Поиск по Enter
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
