import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/itemsSlice';

const Filter = ({ title, filter, filterValue }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{title}</h3>
      <label>
        <input
          type="text"
          placeholder="add something"
          onChange={filter}
          value={filterValue}
          onClick={() => dispatch(addFilter(filterValue))}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.protoTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
