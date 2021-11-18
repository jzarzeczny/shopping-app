import { useRef, useState } from "react";
function ShoppingListContent({ product }) {
  const [listDone, setListDone] = useState(false);
  const [listInformation, setListInformation] = useState(false);
  const informationRef = useRef();
  const openInformation = () => {
    console.log(informationRef.current.scrollHeight);
    const openHeightOfList = informationRef.current.scrollHeight;
    informationRef.current.style.setProperty(
      "--list-height-open",
      openHeightOfList + "px"
    );
    setListInformation(!listInformation);
  };
  return (
    <li className={`list__element ${listDone ? "list__element--done" : ""}`}>
      <i className="list__more" onClick={() => openInformation()}>
        <div className="list__dot"></div>
        <div className="list__dot"></div>
        <div className="list__dot"></div>
      </i>
      <h3 onClick={() => setListDone(!listDone)} className="list__header">
        {product.product}
      </h3>
      <div
        className={`list__information ${
          listInformation ? "list__information--open" : ""
        }`}
        ref={informationRef}
      >
        <h4 className="list__title">Ilość:</h4>
        <p className="list__content">{product.quantity}</p>
        <h4 className="list__title">Uwagi:</h4>
        <p className="list__content">{product.remarks}</p>
      </div>
    </li>
  );
}

export default ShoppingListContent;

// Ref the content element and get size of it. Might need to get values of content and details.
