import React, { useState, useEffect } from "react";

export default function PaperText({ data }) {
  const [taken, setTaken] = useState(0);
  const handleBoughtItem = (id) => {
    data.forEach((order) => {
      if (order.id === id && order.className) {
        return delete order.className;
      }
      if (order.id === id) {
        return (order.className = "paper__item--taken");
      }
    });
    setTaken(taken + 1);
  };
  useEffect(() => {}, [data]);
  return (
    <>
      <h2 className="paper__header">{data[0].type}</h2>
      <ol className="paper__list">
        {data.map((content) => (
          <li
            className={`paper__item ${content.className}`}
            onClick={() => handleBoughtItem(content.id)}
            key={content.id}
          >
            {content.item}
          </li>
        ))}
      </ol>
    </>
  );
}
