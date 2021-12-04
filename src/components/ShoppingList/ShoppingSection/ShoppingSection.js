function ShoppingView({ children, edit }) {
  return (
    <div
      className={`shopping__section ${edit ? "shopping__section--edit" : ""}`}
    >
      {children}
    </div>
  );
}

export default ShoppingView;
