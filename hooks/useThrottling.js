import { useCallback, useRef } from "react";

const useThrottling = (func, delay) => {
  const isThrottled = useRef(false);
  const refFunc = useRef(func).current;
  const refDelay = useRef(delay).current;

  return useCallback(
    (...args) => {
      if (isThrottled.current) return;

      refFunc.apply(null, args);
      isThrottled.current = true;
      setTimeout(() => (isThrottled.current = false), refDelay);
    },
    [refFunc, refDelay, isThrottled]
  );
};

export default useThrottling;
