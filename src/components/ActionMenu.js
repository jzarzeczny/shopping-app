import React from "react";

export default function ActionMenu({ active, data }) {
  return (
    <div className="actionMenu">
      <ul className={`action__list ${active ? "actionMenu--active" : null}`}>
        <li className="action__element">Edytuj</li>
        <li className="action__element">Ponów koszyk</li>
        <li className="action__element">Dodaj kwotę</li>
      </ul>
    </div>
  );
}
