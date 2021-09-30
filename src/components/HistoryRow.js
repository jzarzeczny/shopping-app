import React, { useState } from "react";
import ActionMenu from "./ActionMenu";

export default function HistoryRow({ data }) {
  const [toggleActionMenu, setToggleActionMenu] = useState(false);
  function countListItems(list) {
    let finalNumber = 0;

    for (const element in list) {
      list[element].forEach(() => {
        finalNumber += 1;
      });
    }
    return finalNumber;
  }

  return (
    <>
      <tr className="table__row">
        <td className="table__data">
          {new Date(data.date).toLocaleDateString("pl-Pl")}
        </td>
        <td className="table__data">Liczba: {countListItems(data.list)}</td>
        <td className="table__data">{data.status.toUpperCase()}</td>
        <th className="table__data">
          <button
            className="table__button"
            onClick={() => {
              setToggleActionMenu((prevState) => {
                return !prevState;
              });
            }}
          >
            <div
              className={` table__dots ${
                toggleActionMenu ? "table__dots--rotate" : null
              }`}
            ></div>
          </button>
        </th>
      </tr>
      <ActionMenu active={toggleActionMenu} />
    </>
  );
}
