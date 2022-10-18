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
      <div className="menu-list">
        <button
          className={classNames('menu-item', { active: filter === 'all' })}
          type="button"
          onClick={() => dispatch(setFilter('all'))}
        >
          All
        </button>
        <button
          className={classNames('menu-item', { active: filter === 'pending' })}
          type="button"
          onClick={() => dispatch(setFilter('pending'))}
        >
          Pending
        </button>
        <button
          className={classNames('menu-item', {
            active: filter === 'completed',
          })}
          type="button"
          onClick={() => dispatch(setFilter('completed'))}
        >
          Completed
        </button>
      </div>
      <button type="button" onClick={handleClearAll} className="button">
        Clear All
      </button>
    </div>
  );
};
