import { FaBriefcase } from "react-icons/fa";
import { useEffect, useState } from "react";

const HireMeButton = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHide(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#contact"
      className={`fixed bottom-4 right-28 sm:bottom-6 sm:right-28 z-[9999]
      flex items-center gap-2
      bg-gradient-to-r from-indigo-600 to-blue-600
      text-white px-4 py-2 rounded-full shadow-xl
      transition-all duration-300
      ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <FaBriefcase />
      <span className="hidden sm:inline font-semibold text-sm">
        Hire Me
      </span>
    </a>
  );
};

export default HireMeButton;
