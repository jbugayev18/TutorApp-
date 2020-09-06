import React from "react";
import "./button.css";

const STYLES = "btn--primary--solid"

const SIZES = "btn--medium"

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) 

    const checkButtonSize = SIZES.includes(buttonSize)

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
