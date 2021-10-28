import React from "react";
import Header from "../common/Header/Header";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
}
