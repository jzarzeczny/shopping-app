import React from "react";
import Navbar from "./Navbar";
import Logo from "../images/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Page logo" />
      <Navbar />
    </header>
  );
}
