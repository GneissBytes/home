/**
 * Checks if referenced element is visible on viewport.
 *
 * @param {RefObject<HTMLDivElement>} itemRef Reference to the div element
 * @param {boolean} partial Should whole element be concidered or a part of it
 * @param {boolean} once Should visibility be triggered only on first viewing
 *
 * @returns {boolean} If element is visible or has been viewed.
 */

import { useState, RefObject, useEffect } from "react";
import _ from "lodash";

const checkVisible = (element: RefObject<HTMLDivElement>, partial: boolean) => {
  if (!element.current) return false;

  const {
    top,
    right,
    bottom,
    left,
    width,
    height,
  } = element.current.getBoundingClientRect();

  if (top + right + bottom + left === 0) {
    return false;
  }

  const topCheck = partial ? top + height : top;
  const bottomCheck = partial ? bottom - height : bottom;
  const rightCheck = partial ? right - width : right;
  const leftCheck = partial ? left + width : left;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  return (
    topCheck >= 0 &&
    leftCheck >= 0 &&
    bottomCheck <= windowHeight &&
    rightCheck <= windowWidth
  );
};

const useVisibility = (
  itemRef: RefObject<HTMLDivElement>,
  partial: boolean,
  once: boolean
): [boolean] => {
  const [visible, setVisible] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const delayedCheckVisibility = _.throttle(
      () => setVisible(checkVisible(itemRef, partial)),
      250
    );
    if (once && visible) {
      setTriggered(true);
    }

    if (!triggered) {
      window.addEventListener("scroll", delayedCheckVisibility);
      window.addEventListener("resize", delayedCheckVisibility);
    }

    return () => {
      window.removeEventListener("scroll", delayedCheckVisibility);
      window.removeEventListener("resize", delayedCheckVisibility);
    };
  }, [itemRef, partial, visible, once, triggered]);

  return [visible];
};

export default useVisibility;
