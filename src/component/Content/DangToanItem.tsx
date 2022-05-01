type AppProps = {
  title: string;
  link: string;
  appearance: string[];
};

export default function DangToanItem({ title, link, appearance }: AppProps) {
  return (
    <li className="mb-7">
      <div className="flex justify-between">
        <p className="text-black font-medium max-w-[500px]">{title}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-700 transition"
        >
          Bấm vào đây để tải tài liệu
        </a>
      </div>
      <div className="mt-3 ">Dạng toán xuất hiện ở: </div>
      <ul className="ml-5 italic">
        {appearance.map((appear) => (
          <li> - {appear}</li>
        ))}
      </ul>
    </li>
  );
}
