import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataOne } from '../../features/slices/dataSlice'; 
import { useParams } from 'react-router-dom';
import './index.css';

const UserProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { selectedUser, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    if (userId) {
      dispatch(fetchDataOne(userId)); 
    }
  }, [dispatch, userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    //TODO: ОФОРМИТЬ ПОЛНОСТЬЮ ПРОФИЛЬ
    <div className="container-profile">
      {selectedUser ? (
        <div>
        <div className="profile-photo">

        </div>
        <div>
          <h2>{selectedUser.name} {selectedUser.surname}</h2>
          <p>{selectedUser.role}</p>

          <div className="info-user-profile profile-table">
            <div className="cell">Город</div>
            <div className="cell">{selectedUser.city}</div>
            <div className="cell">Отдел</div>
            <div className="cell">{selectedUser.department}</div>
            <div className="cell">Роль</div>
            <div className="cell">{selectedUser.role}</div>
            <div className="cell">Начальник</div>
            <div className="cell">Саня сдеалай парс начальника оч надо</div>
            <div className="cell">Телефон</div>
            <div className="cell">{selectedUser.phone}</div>
            <div className="cell">Почта</div>
            <div className="cell">{selectedUser.email}</div>
            <div className="cell">Адрес</div>
            <div className="cell">{selectedUser.address}</div>


          </div>
        </div>
        </div>
      ) : (
        <p>No user found.</p>
      )}
    </div>
  );
};

export default UserProfile;