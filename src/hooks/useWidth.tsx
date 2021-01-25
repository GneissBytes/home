/**
 * Returns boolean if window's width is above set threshold.
 * 
 * @param {number} minWidth Window width threshhold
 * 
 * @returns {boolean} If window is bigger than set threshhold.
 */

import { useState, useEffect } from "react";


function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

const useWidth = (minWidth: number):[boolean] => {
  const [width, setWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWindowWidth());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return [width >= minWidth];
};

export default useWidth;
