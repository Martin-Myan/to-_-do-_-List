import React from "react";
import PropTypes from "prop-types";

const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="Text"
      onChange={onChange}
      className="form-control bg-secondary text-dark fw-bold"
    />
  );
};

Input.defaultProps = {
  value: "",
  onChange: () => {},
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
