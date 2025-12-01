import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

useEffect(() => {
    // Delay so page fully renders before scrolling
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 50);

    return () => clearTimeout(timeout);
  }, [location.key]);


  return null;
}
