import { useEffect, useState } from "react";
import logo from "../../asset/phanVanTri.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
const navLinks = [
  {
    id: 1,
    name: "Trang chủ",
    url: "/trang-chu",
  },
  {
    id: 2,
    name: "Confession",
    url: "https://www.facebook.com/allaboutpvthighschool",
  },
  {
    id: 3,
    name: "Tin tức",
    url: "/tin-tuc",
  },
  {
    id: 4,
    name: "Tài liệu",
    url: "/tai-lieu",
  },
  {
    id: 5,
    name: "Hỏi đáp",
    url: "/hoi-dap",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen((prev) => !prev);
  };
  ///////////////////////////////////////////////////
  // IS MOBILE
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleSize);
    handleSize();

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if ((windowSize.width as number) < 630) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize.width]);

  return (
    <header className="flex justify-between items-center gap-5 py-4 px-8 ">
      <div className="flex gap-5 items-center">
        <img
          src={logo}
          alt="logo PVT"
          className="w-16 h-16 object-cover rounded-full shadow-md"
        />
        <p className="text-xl font-semibold text-slate-500 max-w-[140px] sm:max-w-none">
          Phan Van Tri the Highschool
        </p>
      </div>

      {!isMobile && (
        <ul className="flex gap-10 ">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={nav.url}
                className="text-lg text-gray-600 hover:text-gray-800 transition"
                target="_blank"
                rel="noreferrer"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      )}
      {isMobile && !isOpen && (
        <GiHamburgerMenu onClick={openNav} className="w-8 h-8" />
      )}
      {isMobile && isOpen && (
        <GrClose onClick={openNav} className="w-8 h-8 z-20" />
      )}
      {isMobile && isOpen && (
        <ul className="flex flex-col gap-5 py-8 px-8 w-[150px] absolute top-[80px] right-0  z-10 shadow-md bg-gray-200">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.url} className="text-lg">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
