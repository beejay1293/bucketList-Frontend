import React from 'react';
import propTypes from 'prop-types';

const Input = ({
  type, placeholder, name, id, value, onChange
}) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      required
      value={value}
      onChange={onChange}
    />
    <small className="error" />
  </div>
);

Input.propTypes = {
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
};

export default Input;
