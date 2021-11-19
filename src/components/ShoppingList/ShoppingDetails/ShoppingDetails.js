import { useEffect, useRef, useState } from "react";
import ShoppingListContent from "../ShoppingListContent/ShoppingListContent";

function ShoppingDetails({ data }) {
  const [open, setOpen] = useState(false);
  const detailsElement = useRef();
  const contentElement = useRef();
  // const getHeight = () => {
  //   // Get height of details and content
  //   const closedHeightOfDetails = detailsElement.current.scrollHeight;
  //   const closedHeightOfContent = contentElement.current.scrollHeight;
  //   detailsElement.current.open = true;
  //   const openHeightOfDetails = detailsElement.current.scrollHeight;
  //   const openHeightOfContent = contentElement.current.scrollHeight;

  //   detailsElement.current.open = false;
  //   detailsElement.current.style.setProperty(
  //     "--details-height-closed",
  //     closedHeightOfDetails + "px"
  //   );
  //   detailsElement.current.style.setProperty(
  //     "--details-height-open",
  //     openHeightOfDetails + "px"
  //   );
  //   contentElement.current.style.setProperty(
  //     "--content-height-closed",
  //     closedHeightOfContent + "px"
  //   );
  //   contentElement.current.style.setProperty(
  //     "--content-height-open",
  //     openHeightOfContent + "px"
  //   );
  // };

  const toggleOpenClass = () => {
    if (open === false) {
      setOpen(true);
    }
    if (open === true) {
      setOpen(false);
      setTimeout(() => {
        setOpen(false);
      }, 1000);
    }
  };

  // useEffect(() => {
  //   getHeight();
  // }, [data]);
  return (
    <details
      ref={detailsElement}
      className={`shopping__details ${open ? "shopping__details--open" : ""}`}
    >
      <summary
        onClick={() => {
          toggleOpenClass();
        }}
        className="shopping__summary"
      >
        {data.name}
      </summary>
      <div ref={contentElement} className="list__content">
        <ul className="list__list">
          {data["list"].map((product) => (
            <ShoppingListContent
              product={product}
              // changeSizeOfBox={getHeight}
              key={product.product}
            />
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
//--Disable onClick when element is animated
