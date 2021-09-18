import React from "react";

export default function Button({ children, clickHandler, type, color }) {
  return (
    <button
      className={`btn ${type && "btn--" + type} ${color && "btn--" + color}`}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}
