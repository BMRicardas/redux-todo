/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { removeAll, setFilter } from 'actions';
import { AppState } from 'index';

import './Tabs.scss';

export const Tabs = () => {
  const { filter } = useSelector((state: AppState) => state.todo);
  const dispatch = useDispatch();

  const handleClearAll = () => {
    dispatch(removeAll());
  };

  return (
    <div className="tabs">
      <ul className="menu-list">
        <li
          className={classNames('menu-item', { active: filter === 'all' })}
          onClick={() => dispatch(setFilter('all'))}
        >
          All
        </li>
        <li
          className={classNames('menu-item', { active: filter === 'pending' })}
          onClick={() => dispatch(setFilter('pending'))}
        >
          Pending
        </li>
        <li
          className={classNames('menu-item', {
            active: filter === 'completed',
          })}
          onClick={() => dispatch(setFilter('completed'))}
        >
          Completed
        </li>
      </ul>
      <button type="button" onClick={handleClearAll} className="button">
        Clear All
      </button>
    </div>
  );
};
