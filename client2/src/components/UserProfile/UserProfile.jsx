import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataOne } from '../../features/slices/dataSlice'; 
import { useParams } from 'react-router-dom';

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
    //TODO: СДЕЛАТЬ КРАСИВО
    <div>
      {selectedUser ? (
        <div>
          <h2>{selectedUser.name}</h2>
          <p>{selectedUser.surname}</p>
        </div>
      ) : (
        <p>No user found.</p>
      )}
    </div>
  );
};

export default UserProfile;