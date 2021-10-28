import { useState } from "react";

import Logo from "../../../images/logo.svg";
import Hamburger from "./Hamburger/Hamburger";
import Navbar from "./Navbar/Navbar";

const headerNav = [
  { name: "", path: "/", login: "false" },
  { name: "Utwórz kontro", path: "/register", login: "false" },
  { name: "Zaloguj się", path: "/login", login: "false" },
  { name: "Listy", path: "/lists", login: "true" },
  { name: "Kategorie", path: "/category", login: "true" },
  { name: "Konto", path: "/account", login: "true" },
  { name: "Wyloguj", path: "/logout", login: "true" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <img src={Logo} alt="Page logo" />
      <Hamburger open={open} setOpen={setOpen} />
      {/* <Navbar /> */}
    </header>
  );
}
