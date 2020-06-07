import { useState, useCallback } from "react";
import constate from "constate";

const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((prev) => prev + 1), [count]);
  return { count, increment };
};

const [Provider, useCount, useIncrement] = constate(
  useCounter,
  (value) => value.count,
  (value) => value.increment
);

export { useCount, useIncrement };

export default { Provider };
