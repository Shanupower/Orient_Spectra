import { useState, useEffect } from "react";

const useInViewport = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".useInViewcard");
      const windowHeight = window.innerHeight;
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= windowHeight) {
        setIsAnimated(true);
      } else {
        setIsAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isAnimated;
};

export default useInViewport;
