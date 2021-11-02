import { useRef } from "react";
import ShoppingListContent from "../ShoppingListContent/ShoppingListContent";

function ShoppingDetails({ data }) {
  const detailsElement = useRef(null);
  return (
    <details ref={detailsElement} className="shopping__details">
      <summary className="shopping__summary">{data.name}</summary>
      <div className="list__content">
        <ul className="list__list">
          {data["list"].map((product) => (
            <ShoppingListContent product={product} />
          ))}
        </ul>
      </div>
    </details>
  );
}

export default ShoppingDetails;
