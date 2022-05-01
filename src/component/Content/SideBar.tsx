export default function SideBar() {
  return (
    <div className="h-[200px] max-w-[900px] sm:w-[900px] mb-28">
      <div className="bg-[#19202D] text-white px-5 py-2">Các bài viết khác</div>

      <ul className="mt-8 flex flex-col gap-4 px-3">
        <li className="text-gray-600 hover:text-gray-800 transition">
          <a href="/">Tổng hợp các công thức Lý </a>
        </li>
        <li className="text-gray-600 hover:text-gray-800 transition">
          <a href="/">Các phương trình hóa học phổ biến</a>
        </li>
        <li className="text-gray-600 hover:text-gray-800 transition">
          <a href="/">Các công thức tính nhanh toán học</a>
        </li>
        <li className="text-gray-600 hover:text-gray-800 transition">
          <a href="/">Cách ngủ 8 tiếng trong 3 tiếng</a>
        </li>
      </ul>
    </div>
  );
}
