import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  console.log(width)
  return {width};
};

export default useScreenSize;
