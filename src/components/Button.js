import React from "react";

export default function Button({ children, type, clickHandler }) {
  return (
    <button className={`btn ${type && "btn--" + type}`} onClick={clickHandler}>
      {children}
    </button>
  );
}
