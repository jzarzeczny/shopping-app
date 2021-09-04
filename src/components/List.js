import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function List({ name, data, removeElement }) {
  return (
    <div id="list" className={`list ${name && "list--" + name}`}>
      <h2 className="list__header">{name.toUpperCase()}</h2>
      <ol className="list__list">
        {data.map((element) => (
          <li key={element.id} className="list__element">
            {element.item}{" "}
            <RiDeleteBin5Line
              onClick={() => {
                removeElement(element.id);
              }}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
