'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const {id} = useParams();
  const [user, setUser] = useState<any>(null);


  return (
    <div className="profile-container">
      <div className="profile-photo"></div>
      <div className="profile-info">
        <h1></h1>
        <h2></h2>

        
      </div>
      {id}
    </div>
  );
};

export default UserProfile;
