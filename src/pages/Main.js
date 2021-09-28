import React, { useContext } from "react";
import PaperCard from "../components/PaperCard";
import Layout from "../components/Layout";
import History from "../components/History";
import { AuthContext } from "../context/FirebaseContext";

export default function Main() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Layout>
      <main className="dashboard">
        {currentUser !== null ? (
          <>
            <PaperCard user={currentUser} />
            <History user={currentUser} />
          </>
        ) : (
          <div className="dashboard__notification">
            Zaloguj się aby stworzyć koszyk
          </div>
        )}
      </main>
    </Layout>
  );
}
