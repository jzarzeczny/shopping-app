import { useRef } from "react";

function ShoppingDetails({ children }) {
  const detailsElement = useRef(null);
  console.log(detailsElement.current);
  return (
    <details ref={detailsElement} className="shopping__details">
      <summary className="shopping__summary">Hello</summary>
      {children}
    </details>
  );
}

export default ShoppingDetails;
