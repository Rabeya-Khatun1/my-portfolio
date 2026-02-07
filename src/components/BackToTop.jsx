import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]
      bg-blue-600 text-white p-3 rounded-full shadow-lg
      transition-opacity duration-300
      ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
