import { useState } from "react";
function ShoppingListContent({ product }) {
  const [listDone, setListDone] = useState(false);
  const [listInformation, setListInformation] = useState(false);
  const openInformation = () => {
    setListInformation(!listInformation);
  };
  return (
    <li className={`list__element ${listDone ? "list__element--done" : ""}`}>
      {(product.quantity || product.remarks) && (
        <i className="list__more" onClick={() => openInformation()}>
          <div className="list__dot"></div>
          <div className="list__dot"></div>
          <div className="list__dot"></div>
        </i>
      )}

      <h3
        onClick={() => {
          setListDone(!listDone);
          setListInformation(false);
        }}
        className="list__header"
      >
        {product.product}
      </h3>

      <div
        className={`list__information ${
          listInformation ? "list__information--open" : ""
        }`}
      >
        {product.quantity && (
          <>
            <h4 className="list__title">Ilość:</h4>
            <p className="list__content">{product.quantity}</p>
          </>
        )}
        {product.remarks && (
          <>
            <h4 className="list__title">Uwagi:</h4>
            <p className="list__content">{product.remarks}</p>
          </>
        )}
      </div>
    </li>
  );
}

export default ShoppingListContent;
