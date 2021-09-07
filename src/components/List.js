import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function List({ name, data, removeElement }) {
  return (
    <div id="list" className={`list ${name && "list--" + name}`}>
      <h2 className="list__header">{name}</h2>
      <ol className="list__list">
        {data.map((element) => (
          <li key={element.id} className="list__element">
            {element.item}
            <span className="list__remove">
              <RiDeleteBin5Line
                data-testid="remove-button"
                onClick={() => {
                  removeElement(element.id);
                }}
              />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
