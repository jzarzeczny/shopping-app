import React from "react";
import PaperCard from "../components/PaperCard";
import Layout from "../components/Layout";
import ActionPanel from "../components/ActionPanel";

export default function Main() {
  return (
    <Layout>
      <main className="dashboard">
        <ActionPanel />
        <PaperCard />
      </main>
    </Layout>
  );
}
