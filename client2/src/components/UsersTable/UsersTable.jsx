import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../features/slices/dataSlice'; 
import { Link } from 'react-router-dom';
import './index.css';
const UsersTable = () => {
  const dispatch = useDispatch();
  
  const { items = [], loading, error } = useSelector((state) => state.data || {});

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(items)
  return (
    //TODO: СДЕЛАТЬ КРАСИВО
    <div className="userstable-container">
      <div className="employee-table">
        <div className="header">Сотрудники</div>
        <div className="column-header">Имя</div>
        <div className="column-header">Фамилия</div>
        <div className="column-header">Роль</div>
        <div className="column-header">Отдел</div>
        {items.map((item) => (
          <>
            <div key={item.name} className="cell">
              <Link to={`/users/${item.id}`}>{item.name}</Link>
            </div>
            <div key={item.surname} className="cell">{item.surname}</div>
            <div key={item.role} className="cell">{item.role}</div>
            <div key={item.department} className="cell">{item.department}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default UsersTable;