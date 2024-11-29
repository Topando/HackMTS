"use client"; 

import React from 'react';
import Image from 'next/image';
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch} from '../../redux';
import {fetchData} from '../../../state/api'

type Props = {};

const Users = (props: Props) => {
    const dispatch = useDispatch<AppDispatch>();
    const {data, loading, error} = useSelector((state: RootState) => state.api);
    
    useEffect(() => {
        dispatch(fetchData() as any);
      }, [dispatch]);

    return (
    <>
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
    </>
  );
};

export default Users;
