import truongImg from "../../asset/truong-modified.jpg";

export default function Title() {
  return (
    <div className="relative">
      <img
        src={truongImg}
        alt=""
        className="w-full object-cover bg-center h-[400px]"
      />
      <h1 className="absolute bottom-10 left-56 text-white text-[50px] font-bold">
        {/* Vài dạng toán cho đề thi sắp tới */}
        Cách ôn tập môn Toán mục tiêu 9 điểm
      </h1>
    </div>
  );
}
