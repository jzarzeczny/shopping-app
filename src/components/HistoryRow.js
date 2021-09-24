import React from "react";

export default function HistoryRow({ data }) {
  return (
    <tr className="table__row">
      <td className="table__data">23.07</td>
      <td className="table__data">Przedmioty</td>
      <td className="table__data">Status</td>
      <th className="table__data">Ikona</th>
    </tr>
  );
}
