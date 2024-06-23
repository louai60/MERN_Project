import React from "react";

const CustomInput = ({ type, label, placeholder, id, name, onChng, onBlr, val }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={onChng}
        onBlur={onBlr}
        value={val}
        className="form-control"
      />
    </div>
  );
};

export default CustomInput;
