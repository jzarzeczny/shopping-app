import { useState } from "react";

import Hamburger from "./Hamburger/Hamburger";
import Navbar from "./Navbar/Navbar";
import PageTitle from "./PageTitle/PageTitle";

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
      <PageTitle title="something" />
      <Hamburger open={open} setOpen={setOpen} />
      <Navbar open={open} setOpen={setOpen} />
    </header>
  );
}
