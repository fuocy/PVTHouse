import SideBar from "./SideBar";
import cau6 from "../../asset/cau6.png";
import cau28 from "../../asset/cau28.png";
import cau29 from "../../asset/cau29.png";
import cau14 from "../../asset/cau14.png";
import cau40 from "../../asset/cau40.png";
import DangToanItem from "./DangToanItem";
import DANG_TOAN from "./dang-toan";
import { DANG_TOAN2 } from "./dang-toan";
import Comments from "../comments/Comments";
import ScrollButton from "./ScrollButton";
export default function Content() {
  return (
    <>
      <div className="max-w-[1110px] mx-auto px-6 py-[100px] flex sm:flex-row flex-col gap-8 text-lg text-gray-700 leading-relaxed">
        <div>
          <h2 className="text-xl text-black font-medium mb-4">
            Nội dung bài viết
          </h2>
          <ul className="flex flex-col gap-1 italic">
            <li>1. Những dạng bài dễ nhầm từ đề minh họa</li>
            <li>
              2. Những dạng bài vận dụng – vận dụng cao phân tích từ đề minh
              họa/chính thức những năm gần đây
            </li>
            <li>3. Vài tips của tác giả</li>
          </ul>
          <div className="mt-10">
            "Để có thể đạt được điểm cao thì các bạn phải làm được đồng thời hai
            yếu tố đó là câu dễ các bạn không được làm sai và làm được những câu
            khó.". Đó là người ta, còn anh thì không làm được, nhưng anh chém
            gió được.
          </div>
          <div className="mt-3">
            Bài viết này anh mong giúp được các em một chút nào đó.
          </div>
          <h3 className="text-3xl font-bold mt-10">
            1. Những dạng bài dễ nhầm từ đề minh họa
          </h3>
          <p className="mt-4">
            Sau khi đọc qua 6 đề gồm đề minh họa và đề chính thức từ năm 2020,
            anh muốn chỉ ra vài dạng bài đơn giản những dễ mắc sai sót.
          </p>
          <div className="font-bold mt-5 text-xl">Từ đề minh họa 2022</div>

          <div className="mt-8 font-medium">
            {" "}
            Câu 6. Số điểm cực trị tính cả chỗ || nếu thỏa mãn
          </div>
          <p className="mt-3">
            Nếu f’(x) là vô định (||) và dấu f’(x) thay đổi khi đi qua điểm đó
            thì điểm đó vẫn được tính là điểm cực trị bình thường (không nhất
            thiết điểm đó phải có f’(x) = 0 mới được xem là điểm cực trị)
          </p>
          <img src={cau6} alt="cau 6" className="mt-5" />
          <p className="mt-2 italic ">
            (Câu 33 đề chính thức 2020 có dạng || nhưng vẫn tính cực trị như thế
            này)
          </p>

          <div className="mt-8 font-medium">
            {" "}
            Câu 8. Công thức thể tích có nhân 1/3 không đó?
          </div>
          <p className="mt-3">
            Làm tới câu thể tích khối chóp/lăng trụ thì phải nhớ kĩ công thức:
            thể tích khối chóp có nhân thêm 1/3 còn lăng trụ thì không. Kiến
            thức cơ bản nhưng khi thi dễ nhầm lắm .
          </p>

          <div className="mt-8 font-medium">
            Câu 28. Phân biệt giá trị cực đại với điểm cực đại
          </div>
          <p className="mt-3">
            Giá trị cực đại/cực tiểu là nói về giá trị trên tung độ y, còn điểm
            cực đại/cực tiểu là nói về giá trị trên hoành độ x.
          </p>
          <img src={cau28} alt="cau 28" className="mt-5" />
          <p className="mt-3">
            Đồ thị f(x) trên có 3 điểm cực trị là x = -2, x = 0 và x = 2. Giá
            trị cực tiểu là y = -3, giá trị cực đại là y = -1
            <br />
            Cách nói khác: Hàm số đạt giá trị cực đại tại x = 0, đạt giá trị cực
            tiểu tại x = -2 và x = 2
          </p>
          <p className="mt-2 italic ">
            Nên xem thêm phân biệt cực trị với giá trị nhỏ nhất, giá trị lớn
            nhất.
          </p>

          <div className="mt-8 font-medium">
            Câu 29. Coi kĩ đề hỏi GTNN là gì hay GTNN tại điểm nào - Có nên bấm
            máy?
          </div>
          <p className="mt-3">
            Đọc kĩ đề yêu cầu tìm giá trị nhỏ nhất là gì hay giá trị nhỏ nhất
            tại điểm nào <br />
            Giá trị nhỏ nhất là gì =&gt; tìm giá trị y nhỏ nhất
            <br />
            Giá trị nhỏ nhất tại điểm nào =&gt; tìm giá trị x mà tại đó y nhỏ
            nhất
            <br />
          </p>
          <p className="mt-2">
            Khi tìm giá trị nhỏ nhất là gì mà sử dụng máy tính thì cần phải cẩn
            thận, như trong câu 36 đề chính thức 2020 sau:
          </p>
          <img src={cau29} alt="cau 29" className="mt-5" />
          <p className="mt-3">
            Đa số mọi người sai câu này vì không tính -32căn2 có giá trị là bao
            nhiêu, và khi họ bấm máy tính thì thấy kết quả xấp xỉ -45 nên vội
            khoanh đáp án D. <br />
            Cách tốt nhất là tính tay câu này, hoặc bấm máy tính 2 lần.
          </p>

          <div className="font-bold mt-5 text-xl">Từ đề chính thức 2021</div>
          <div className="mt-8 font-medium">
            Câu 14. Đề bài cho đồ thị f(x) hay f'(x)?
          </div>
          <p className="mt-3">
            Khi đề bài cho đồ thị, chú ý đồ thị đó là đồ thị f(x) hay đồ thị
            f’(x)
          </p>
          <img src={cau14} alt="cau 14" className="mt-5" />
          <p className="mt-3">
            Nếu đồ thị hình trên là đồ thị f(x) thì hàm số nghịch biến khi f(x)
            đi xuống, tức là khoảng (-vocuc, -1) và (0,1)
            <br />
            Nếu đồ thị hình trên là đồ thị f’(x) thì hàm số nghịch biến khi
            f’(x) nằm phía dưới trục Ox, tức là khoảng (-1.5, 1.5)
          </p>
          <p className="mt-3">
            Tương tự với vấn đề cực trị, nếu đồ thị đã cho là f(x) thì điểm cực
            trị là điểm mà đồ thị "chuyển mình" (điểm mà nằm trên ngọn đồi hoặc
            dưới thung lũng), như hình trên thì đó là các điểm: (-1,-2), (0,-1),
            (1,-2).
          </p>
          <p className="mt-1">
            Nếu đồ thị đã cho là f'(x) thì điểm cực trị là điểm mà nằm trên trục
            hoành, chỗ giao nhau giữa đồ thị và trục hoành, như hình trên thì đó
            là các điểm: (-1.5,0), (1.5,0)
          </p>

          <div className="font-bold mt-5 text-xl">Từ đề chính thức 2020</div>
          <div className="mt-8 font-medium">
            Câu 40. Biện luận m hàm số đơn điệu có lấy dấu bằng (=) hay không?
          </div>
          <p className="mt-3">
            Đối với dạng bài tìm m để hàm số đồng biến/nghịch biến, cần chú ý
            biểu thức có lấy dấu = hay không ({">"}= hay {">"} thôi, {"<"}= hay{" "}
            {"<"} thôi). Cái này giờ anh cũng không nhớ cụ thể, nhưng anh nhớ có
            quy tắc.
          </p>
          <p className="mt-3">
            Chẳng hạn trong bài bên dưới, biểu thức là hàm bậc nhất/bậc nhất,
            thì ta chỉ cần cho y’ {">"} 0 thôi (không cần {">"}= 0) nhưng trong
            những dạng bài biểu thức là hàm bậc ba thì y’ {">"}=0 mới được thì
            phải. (không nhớ nữa)
          </p>
          <img src={cau40} alt="cau 40" className="mt-5" />

          <div className="mt-8 font-medium">
            Câu 43. Đừng vội khi làm những bài cần tính giá trị trung gian
          </div>
          <p className="mt-3">
            Dạng bài tính khoảng cách đến mặt phẳng, khi ta dùng phương pháp
            tính thông qua trung gian khoảng cách khác thì gồm 2 bước: <br />
            B1. Tính khoảng cách trung gian đó
            <br />
            B2. Từ khoảng cách trung gian, suy ra khoảng cách thực sự cần tìm
            <br />
            Khi làm dạng này thì nhớ làm cho xong bước 2 rồi hãy khoanh, đừng
            mới có tính xong khoảng cách trung gian (bước 1) rồi vội khoanh ngay
            đáp án. (đề thường lừa là sẽ cho 1 đáp án là kết quả trung gian tính
            được ở bước 1, bạn vào vội mới tính giữa chừng xong bước 1 rồi nhìn
            đáp án thấy có kết quả giống xong khoanh ngay thì chỉ có "em ngồi
            đây và em khóc huhu")
          </p>

          <h3 className="text-3xl font-bold mt-14">
            2. Những dạng bài vận dụng – vận dụng cao phân tích từ đề minh
            họa/chính thức những năm gần đây
          </h3>

          <ul className="mt-8">
            <li>
              - Khi so sánh giữa đề minh họa và đề chính thức 2021 thì anh thấy
              các câu vận dụng / vận dụng cao của đề minh họa có dạng nào thì đề
              chính thức cũng có dạng đó (nhưng chắc chắn nó khác rất nhiều, chứ
              không phải chỉ cần thay số).
            </li>
            <li>
              - Những dạng toán sau là những dạng mức câu 35 trở lên, từng xuất
              hiện ở các đề minh họa/chính thức từ 2020 đến nay.
            </li>
            <li>
              - Mục tiêu là giải được các câu 35 đến 45 nên không cần xem những
              câu có lời giải quá dài và khó
            </li>
          </ul>

          <div className="font-bold mt-5 text-xl">
            Dạng có trong đề minh họa 2022
          </div>
          <ul className="mt-5">
            {DANG_TOAN.map((dangToan: any) => (
              <DangToanItem
                key={dangToan.id}
                title={dangToan.title}
                link={dangToan.link}
                appearance={dangToan.appearance}
              />
            ))}
          </ul>
          <div className="font-bold mt-5 text-xl">
            Dạng có trong những đề năm trước đó
          </div>
          <p className="mt-3">
            Đề thi vẫn rất nhiều nhiều khả năng cho ngoài dạng trong đề minh
            họa, nên đây là vài dạng bài của các năm trước đó. Còn rất nhiều
            dạng khác nhưng mà dành nhiêu đây thời gian ôn toán là vất lắm rồi.
          </p>
          <ul className="mt-5">
            {DANG_TOAN2.map((dangToan: any) => (
              <DangToanItem
                key={dangToan.id}
                title={dangToan.title}
                link={dangToan.link}
                appearance={dangToan.appearance}
              />
            ))}
          </ul>

          <div className="mt-5 flex gap-2">
            <p className="font-medium italic">Tải toàn bộ tài liệu tại đây:</p>
            <a
              href="https://drive.google.com/drive/folders/1puALAgPp6mltRjN1VisTNsvOiyZ8nb2b?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700 transition"
            >
              Tải toàn bộ tài liệu
            </a>
          </div>

          <p className="mt-3">
            Đây là những tài liệu anh sưu tầm từ các thầy cô Đặng Việt Đông, Lê
            Bá Bảo, Hoàng Thanh Phong, Nhóm Toán VDC và các thầy cô của VTV7.
            Các em có thể tìm các tài liệu tương tự trên website
            www.toanmath.com
          </p>

          <h3 className="text-3xl font-bold mt-10">3. Vài tips của tác giả </h3>
          <ul className="mt-5 flex flex-col gap-3">
            <li>- Làm câu nào chắc câu đó, không có thời gian nhìn lại.</li>
            <li>- Không sai ngu, không sai ngu, không sai ngu.</li>
            <li>
              - Ôn dạng VD/VDC cao vậy thôi chứ vào thi mấy câu cuối nó lạ lắm,
              nên chuẩn bị sẵn thêm tâm lý làm chắc mấy câu đầu trước, mấy câu
              cuối lụi sau
            </li>
            <li>
              - Một số khóa luyện đề hay: PEN I luyện đề của thầy Tùng hocmai,
              khóa XMin của thầy Nam Vted luyện những đề của các trường/sở. Pen
              I Lý của thầy Đỗ Ngọc Hà. Tiếng Anh - Hoàng Việt Hưng.
              <br />
              Một vài sở cho đề rất sát và hay: sở Nam Định, sở Phú Thọ, sở Hà
              Tĩnh, sở Nghệ An, sở Ninh Bình, sở Thanh Hoá, sở Thái Bình, sở
              Thái Nguyên, sở Hải Phòng, sở Hà Nội, chuyên Vinh, chuyên Lam Sơn,
              chuyên Phan Bội Châu, Kim Liên, VTV7.
              <br />
            </li>
            <li>
              - Nếu thấy đề có 1 câu có thể làm được nhưng không kịp giờ, hãy
              ráng ghi nhớ cái đề đó, lưu các số liệu, đáp án vào máy tính. Sang
              giờ thi môn tiếp theo thì lấy ra làm (Áp dụng với bài thi tổ hợp).
            </li>
          </ul>

          <p className="mt-10">
            Hi vọng rằng nội dung này hữu ích với các em. Chúc các em thi tốt.
          </p>
          <p className="text-right mt-10">Tác giả: Fuocy</p>
        </div>
        <SideBar />
      </div>

      <div className="max-w-[880px] sm:ml-[200px] ml-2 px-6 mb-[70px]">
        <Comments />
      </div>

      <ScrollButton />
    </>
  );
}
