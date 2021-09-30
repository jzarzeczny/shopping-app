import React, { useState, useEffect } from "react";
import ActionMenu from "./ActionMenu";

export default function HistoryRow({ data, setOpenMenu, openMenu }) {
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
  function handleClick() {
    if (toggleActionMenu) {
      setToggleActionMenu(!toggleActionMenu);
      setOpenMenu(null);
    } else if (!toggleActionMenu) {
      setToggleActionMenu(!toggleActionMenu);
      setOpenMenu(data.id);
    }
  }
  useEffect(() => {
    setToggleActionMenu(false);
  }, []);

  const menu = () => {
    if (openMenu !== null && openMenu === data.id) {
      return false;
    } else if (openMenu !== null && openMenu !== data.id) {
      return true;
    } else {
      return false;
    }
  };
  console.log(menu());
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
            id={data.id}
            disabled={menu()}
            onClick={() => {
              handleClick();
            }}
          >
            <div
              className={`table__dots ${
                toggleActionMenu ? "table__dots--rotate" : null
              }`}
            ></div>
          </button>
          <ActionMenu active={toggleActionMenu} data={data} />
        </th>
      </tr>
    </>
  );
}
