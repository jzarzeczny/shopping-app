import { useRef } from "react";
import ShoppingListContent from "../ShoppingListContent/ShoppingListContent";

function ShoppingDetails({ data }) {
  const detailsElement = useRef(null);
  const handleClick = (e) => {
    console.log(detailsElement.current);
  };
  return (
    <details
      ref={detailsElement}
      className="shopping__details"
      onClick={() => handleClick()}
    >
      <summary className="shopping__summary">{data.name}</summary>
      <div className="list__content">
        <ul className="list__list">
          {data["list"].map((product) => (
            <ShoppingListContent product={product} key={product.product} />
          ))}
        </ul>
      </div>
    </details>
  );
}

export default ShoppingDetails;

// TODO: animation of details element
// TODO: animation of list information
