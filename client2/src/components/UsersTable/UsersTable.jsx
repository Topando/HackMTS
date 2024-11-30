import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../features/slices/dataSlice';
import { Link } from 'react-router-dom';
import './index.css';

const UsersTable = () => {
  const dispatch = useDispatch();
  const { items = [], loading, error, searchResults } = useSelector((state) => state.data || {});

  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    // Загружаем все данные при монтировании компонента
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    // Обновляем отображаемые данные, когда изменяются searchResults или items
    if (searchResults && searchResults.length > 0) {
      setDisplayedData(searchResults); // Показываем результаты поиска
    } else {
      setDisplayedData(items); // Показываем все данные
    }
  }, [items, searchResults]); // Следим за изменением данных

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="userstable-container">
      <div className="employee-table">
        <div className="header">Сотрудники</div>
        <div className="column-header">Имя</div>
        <div className="column-header">Фамилия</div>
        <div className="column-header">Роль</div>
        <div className="column-header">Отдел</div>
        {displayedData.map((item) => (
          <React.Fragment key={item.id}>
            <div className="cell">
              <Link to={`/users/${item.id}`}>{item.name}</Link>
            </div>
            <div className="cell">{item.surname}</div>
            <div className="cell">{item.role}</div>
            <div className="cell">{item.department}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default UsersTable;
