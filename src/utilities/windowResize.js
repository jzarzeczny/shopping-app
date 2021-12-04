import { useState, useEffect } from "react";

function useWindowRes() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakingPoint = 1024;
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return { width, breakingPoint };
}

export default useWindowRes;
