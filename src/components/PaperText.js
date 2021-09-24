import React from "react";

export default function PaperText({ data }) {
  const handleBoughtItem = (id) => {
    id.target.classList.toggle("paper__item--taken");
  };
  console.log(data);
  return (
    <>
      <h2 className="paper__header">{data[0].type}</h2>
      <ol className="paper__list">
        {data.map((content) => (
          <li
            className={`paper__item ${content.className}`}
            onClick={(e) => handleBoughtItem(e)}
            key={content.id}
          >
            {content.item}
          </li>
        ))}
      </ol>
    </>
  );
}
