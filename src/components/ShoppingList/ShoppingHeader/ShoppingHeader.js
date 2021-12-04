function ShoppingHeader({ edit }) {
  return (
    <>
      {edit ? (
        <h2 className="shopping__section__header">Dodaj produkt</h2>
      ) : (
        <h2 className="shopping__section__header">Lista zakupów</h2>
      )}
    </>
  );
}

export default ShoppingHeader;
