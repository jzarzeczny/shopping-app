function NoData({ children, cart }) {
  return (
    <h3 className={`noData ${cart ? "noData--cart" : ""} `}>{children}</h3>
  );
}

export default NoData;
