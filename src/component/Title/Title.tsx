import truongImg from "../../asset/truong-modified.jpg";

export default function Title() {
  return (
    <div className="relative">
      <img
        src={truongImg}
        alt=""
        className="w-full object-cover bg-center sm:h-[400px] h-[300px]"
      />
      <h1 className="absolute bottom-10 sm:left-56 left-7 text-white sm:text-[50px] text-[40px] font-bold max-w-[330px] sm:max-w-none">
        {/* Vài dạng toán cho đề thi sắp tới */}
        Cách ôn tập môn Toán mục tiêu điểm 9
      </h1>
    </div>
  );
}
