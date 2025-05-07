import React from "react";
import "./Button.css";
import { ReactComponent as ArrowBack } from "../../../assets/icon/arrow-back.svg"; // Pastikan ikon dalam format SVG

const Button = ({
  color = "#394E82",
  text,
  textColor = "#fff",
  type,
  icon,
  onPress,
}) => {
  if (type === "icon-only") {
    return (
      <button className="button-icon" onClick={onPress}>
        {icon === "arrow-back" && <ArrowBack />}
      </button>
    );
  }

  return (
    <button
      className="button"
      style={{ backgroundColor: color, color: textColor }}
      onClick={onPress}
    >
      {text}
    </button>
  );
};

export default Button;
