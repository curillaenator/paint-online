import React, { useState } from "react";

type TUseToggle = (initial: boolean) => [boolean, () => void];
const useToggle: TUseToggle = (initial) => {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((prev) => !prev);
  return [value, toggle];
};

export default useToggle;
