import { useEffect, useRef, useState } from "react";
import ShoppingListContent from "../ShoppingListContent/ShoppingListContent";

function ShoppingDetails({ data }) {
  const [open, setOpen] = useState(false);
  const detailsElement = useRef();
  const contentElement = useRef();

  const getHeightOfDetails = (ref) => {
    const closedHeight = ref.scrollHeight;
    ref.open = true;
    const openHeight = ref.scrollHeight;
    ref.open = false;
    ref.style.setProperty("--details-height-closed", closedHeight + "px");
    ref.style.setProperty("--details-height-open", openHeight + "px");
  };

  const getHeightOfContent = (ref) => {
    const closedHeight = ref.scrollHeight;
    detailsElement.current.open = true;
    const openHeight = ref.scrollHeight;
    detailsElement.current.open = false;
    ref.style.setProperty("--content-height-closed", closedHeight + "px");
    ref.style.setProperty("--content-height-open", openHeight + "px");
  };

  useEffect(() => {
    getHeightOfDetails(detailsElement.current);
    getHeightOfContent(contentElement.current);
  }, [detailsElement]);

  return (
    <details
      ref={detailsElement}
      onClick={() => {
        setOpen(!open);
      }}
      className="shopping__details"
    >
      <summary
        className={`shopping__summary ${open ? "shopping__summary--open" : ""}`}
      >
        {data.name}
      </summary>
      <div ref={contentElement} className="list__content">
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
