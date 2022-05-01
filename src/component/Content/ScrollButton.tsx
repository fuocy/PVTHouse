import { useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scroll = document.documentElement.scrollTop;

    if (scroll > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      {isVisible && (
        <FaArrowAltCircleUp
          onClick={scrollToTop}
          className="w-12 h-12 text-yellow-500 fixed bottom-2 right-2 sm:bottom-12 sm:right-12  cursor-pointer hover:-translate-y-2 transition"
        />
      )}
    </div>
  );
}
