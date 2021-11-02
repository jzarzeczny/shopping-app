function ShoppingListContent({ product }) {
  return (
    <li className="list__element">
      <i className="list__more">
        <div className="list__dot"></div>
        <div className="list__dot"></div>
        <div className="list__dot"></div>
      </i>
      <h3 className="list__header">{product.product}</h3>
      <h4 className="list__title">Ilość:</h4>
      <p className="list__content">{product.amount}</p>
      <h4 className="list__title">Uwagi:</h4>
      <p className="list__content">{product.remarks}</p>
    </li>
  );
}

export default ShoppingListContent;
