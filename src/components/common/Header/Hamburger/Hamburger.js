function Hamburger({ open, setOpen }) {
  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <button
      className={`hamburger__container ${open && "hamburger__container--open"}`}
      onClick={() => handleOpen()}
    >
      <div className="hamburger__line" />
      <div className="hamburger__line" />
      <div className="hamburger__line" />
    </button>
  );
}

export default Hamburger;
