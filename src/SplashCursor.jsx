import React, { useState, useEffect } from "react";
import SplashCursor from "./components/nurui/splash-cursor";

const SplashCursorDemo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile && <SplashCursor />}
    </>
  );
};

export default SplashCursorDemo;
