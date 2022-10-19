import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { removeAll, setFilter } from 'features/todo/actionCreators';
import { selectFilter } from 'features/todo/selectors';

import './Tabs.scss';

export const Tabs = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleClearAll = () => {
    dispatch(removeAll());
  };

  return (
    <div className="tabs">
      <div className="tabs-list">
        <button
          className={classNames('tab', { active: filter === 'all' })}
          type="button"
          onClick={() => dispatch(setFilter('all'))}
        >
          All
        </button>
        <button
          className={classNames('tab', { active: filter === 'pending' })}
          type="button"
          onClick={() => dispatch(setFilter('pending'))}
        >
          Pending
        </button>
        <button
          className={classNames('tab', {
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
