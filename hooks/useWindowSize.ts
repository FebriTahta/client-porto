"use client";

import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () =>
        setSize({ width: window.innerWidth, height: window.innerHeight });

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return size;
};

export default useWindowSize;