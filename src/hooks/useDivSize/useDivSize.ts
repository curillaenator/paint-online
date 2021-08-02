import React, { useRef, useLayoutEffect, useState, RefObject } from "react";

type TUseDivSize = () => [number, number, RefObject<HTMLDivElement>];
const useDivSize: TUseDivSize = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(400);

  useLayoutEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth);
      setHeight(ref.current.scrollHeight);
    }
  }, []);

  return [width, height, ref];
};

export default useDivSize;
