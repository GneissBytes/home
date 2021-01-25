/**
 * Checks if use is hovering above an element
 *
 * @param {RefObject<HTMLDivElement>} itemRef reference to an object
 *
 * @returns {boolean} Is the user hovering the object
 */

import { useState, useEffect, RefObject, useMemo } from "react";

const useHover = (itemRef: RefObject<HTMLDivElement>): [boolean] => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (itemRef && itemRef.current) {
      const item = itemRef.current;
      item.addEventListener("mouseenter", (e) => {
        setHovered(true);
      });
      item.addEventListener("mouseleave", (e) => {
        setHovered(false);
      });

      return () => {
        item.removeEventListener("mouseenter", () => {
          setHovered(true);
        });
        item.removeEventListener("mouseleave", () => {
          setHovered(false);
        });
      };
    }
  });
  return [useMemo(() => hovered, [hovered])];
};

export default useHover;
