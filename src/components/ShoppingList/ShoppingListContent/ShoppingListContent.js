function ShoppingListContent({ product }) {
  return (
    <li className="list__element">
      <i className="list__more">
        <div className="list__dot"></div>
        <div className="list__dot"></div>
        <div className="list__dot"></div>
      </i>
      <h3 className="list__header">{product.product}</h3>
      <div className="list__information">
        <h4 className="list__title">Ilość:</h4>
        <p className="list__content">{product.amount}</p>
        <h4 className="list__title">Uwagi:</h4>
        <p className="list__content">{product.remarks}</p>
      </div>
    </li>
  );
}

export default ShoppingListContent;
