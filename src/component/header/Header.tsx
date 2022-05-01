import logo from "../../asset/phanVanTri.jpg";

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
    name: "News",
    url: "/news",
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
  return (
    <header className="flex justify-between items-center gap-5 py-4 px-8 ">
      <div className="flex gap-5 items-center">
        <img
          src={logo}
          alt="logo PVT"
          className="w-16 h-16 object-cover rounded-full shadow-md"
        />
        <p className="text-xl font-semibold text-slate-500">
          Phan Van Tri the Highschool
        </p>
      </div>

      <ul className="sm:flex gap-10 hidden">
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
    </header>
  );
}
