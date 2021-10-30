import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Hamburger from "./Hamburger/Hamburger";
import Navbar from "./Navbar/Navbar";
import PageTitle from "./PageTitle/PageTitle";

const navList = [
  { name: "", path: "/", login: false },
  { name: "Utwórz konto", path: "/register", login: false },
  { name: "Zaloguj się", path: "/login", login: false },
  { name: "Listy", path: "/lists", login: true },
  { name: "Kategorie", path: "/category", login: true },
  { name: "Konto", path: "/account", login: true },
  { name: "Wyloguj", path: "/logout", login: true },
];

// Todo -> render correct navList based on information about login

export default function Header() {
  const [open, setOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const location = useLocation();

  const determineLocation = () => {
    const localizationInfo = navList.filter(
      (navElement) => navElement.path === location.pathname
    );

    return localizationInfo[0];
  };

  useEffect(() => {
    const newLocation = determineLocation();
    setCurrentLocation(newLocation);
  }, []);

  return (
    <>
      {currentLocation !== null && (
        <header className="header">
          <PageTitle title={currentLocation.name} />
          <Hamburger open={open} setOpen={setOpen} />
          <Navbar open={open} setOpen={setOpen} navList={navList} />
        </header>
      )}
    </>
  );
}
