"use client"; 
import React, { useEffect } from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux';
import { User } from '@/state/api'

type Props = {};

const UsersTable = (props: Props) => {
  return (
    <div className="userstable-container">
        <div className="employee-table">
            <div className="header">Сотрудники</div>
            <div className="column-header">Имя</div>
            <div className="column-header">Фамилия</div>
            <div className="column-header">Роль</div>
            <div className="column-header">Отдел</div>

            <div className="cell">Мария</div>
            <div className="cell">Петрова</div>
            <div className="cell">Менеджер</div>
            <div className="cell">Отдел маркетинга</div>

            <div className="cell">Алексей</div>
            <div className="cell">Сидоров</div>
            <div className="cell">HR</div>
            <div className="cell">Отдел кадров</div>
        </div>

    </div>
  );
};

export default UsersTable;
