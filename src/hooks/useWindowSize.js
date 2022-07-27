import { useState, useEffect, useCallback } from "react";
import _debounce from "lodash/debounce";

function getWindowSize() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const handleResize = useCallback(
    _debounce(function () {
      setWindowSize(getWindowSize());
    }, 250),
    []
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
