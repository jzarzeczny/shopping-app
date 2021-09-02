import React from "react";

export default function List({ name }) {
  return (
    <div className={`list ${name && "list--" + name}`}>
      <h2 className="list__header">Owoce</h2>
      <ol className="list__list">
        <li className="list__element">Pomarańcze</li>
        <li className="list__element">Gruszki</li>
        <li className="list__element">Granat</li>
        <li className="list__element">Winogrona</li>
        <li className="list__element">Awokado</li>
      </ol>
    </div>
  );
}
