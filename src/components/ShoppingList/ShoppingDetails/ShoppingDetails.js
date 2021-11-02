import { useEffect, useRef } from "react";
import ShoppingListContent from "../ShoppingListContent/ShoppingListContent";

function ShoppingDetails({ data }) {
  const detailsElement = useRef();

  const getHeightOfDetails = (ref) => {
    console.log(ref);
    const closedHeight = ref.scrollHeight;
    console.log(closedHeight);
    ref.open = true;
    const openHeight = ref.scrollHeight;
    console.log(openHeight);
    ref.open = false;
    ref.style.setProperty("--details-height-closed", closedHeight + "px");
    ref.style.setProperty("--details-height-open", openHeight + "px");
  };

  useEffect(() => {
    getHeightOfDetails(detailsElement.current);
  }, [detailsElement]);

  return (
    <details ref={detailsElement} className="shopping__details">
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

// TODO: In css set the height intro .list__content element

// TODO: animation of details element
// TODO: animation of list information
