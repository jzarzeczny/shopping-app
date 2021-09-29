import React from "react";

export default function HistoryRow({ data }) {
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
    <tr className="table__row">
      <td className="table__data">
        {new Date(data.date).toLocaleDateString("pl-Pl")}
      </td>
      <td className="table__data">Liczba: {countListItems(data.list)}</td>
      <td className="table__data">{data.status.toUpperCase()}</td>
      <th className="table__data">Ikona</th>
    </tr>
  );
}
