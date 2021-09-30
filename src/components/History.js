import React, { useEffect, useState } from "react";
import HisotryRow from "./HistoryRow";
import { checkForAllUserData } from "../utils/checkTheServerForData";

export default function History({ user }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    checkForAllUserData(user, setList);
  }, []);

  return (
    <section className="historyContainer">
      <table className="table">
        <thead className="table__head">
          <tr className="table__row">
            <th className="table__header">Data</th>
            <th className="table__header">Przedmioty</th>
            <th className="table__header">Status</th>
            <th className="table__header"></th>
          </tr>
        </thead>
        <tbody className="table__body">
          {list &&
            list.map((row) => <HisotryRow data={row.list} key={row.list.id} />)}
        </tbody>
      </table>
    </section>
  );
}
