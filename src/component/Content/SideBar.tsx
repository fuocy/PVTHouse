export default function SideBar() {
  return (
    <div className="h-[200px] w-[900px]">
      <div className="bg-[#19202D] text-white px-5 py-2">Các bài viết khác</div>

      <ul className="mt-8 flex flex-col gap-4">
        <li className="text-gray-600 hover:text-gray-800 transition">
          <a href="/">
            "Muốn được điểm 9 thì bạn cứ bỏ 5 câu cuối là được" - bạn Nam chia
            sẻ
          </a>
        </li>
        <li className="text-gray-600 hover:text-gray-800 transition">
          <a href="/">
            Dành nhiều thời gian ôn mấy dạng VDC, nam sinh lụi không trúng phát
            nào
          </a>
        </li>
        <li className="text-gray-600 hover:text-gray-800 transition">
          <a href="/">
            Trổ tài đoán dạng bài ôn thi, nam thanh niên bị oánh vì đoán sai hết
          </a>
        </li>
        <li className="text-gray-600 hover:text-gray-800 transition">
          <a href="/">
            Vui mừng vì làm đúng tận 2 câu khó, bạn Nam thở phào vì sai chỉ có 3
            câu dễ
          </a>
        </li>
      </ul>
    </div>
  );
}
