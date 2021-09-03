import React from "react";

export default function List({ name, data }) {
  console.log(data);
  return (
    <div className={`list ${name && "list--" + name}`}>
      <h2 className="list__header">{name.toUpperCase()}</h2>
      <ol className="list__list">
        {data.map((element) => (
          <li className="list__element">{element}</li>
        ))}
      </ol>
    </div>
  );
}
