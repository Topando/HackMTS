import React from 'react';
import './index.css';

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
            
            <div className="cell">Иван</div>
            <div className="cell">Иванов</div>
            <div className="cell">Разработчик</div>
            <div className="cell">Отдел разработки</div>

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
