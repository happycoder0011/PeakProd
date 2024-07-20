import React, { useState } from "react";
import PropTypes from "prop-types";
import { Checkbox as CheckboxDefault } from "antd";

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span
        style={{
          textDecoration: isChecked ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {label}
      </span>
      <CheckboxDefault onChange={onChange} checked={isChecked} />
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  label: "Random",
};

export default Checkbox;
