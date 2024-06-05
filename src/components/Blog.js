import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';


function Blog() {
    return (
      <div className="blog-container">
        <div className="blog-header">
<img src='https://ispace.edu.vn/wp-content/uploads/2024/05/19.png' alt='Anhminhhoa' />
</div>
<div className="blog-container">
      <div className="blog-post">
        <div className="blog-date">
          <div className="day">26</div>
          <div className="month">May</div>
          <h2>Sự kiện iCONNECTSPACE #5: Bán hàng trên sàn hay quảng cáo trên mạng diễn ra thành công tốt đẹp</h2>
        </div>
        <div className="blog-content">
          <p>
            Chiều ngày 25/05/2024, chương trình iCONNECTSPACE #5: E-commerce bán hàng trên sàn hay quảng cáo trên mạng đã diễn ra thành công tốt đẹp với sự chia sẻ từ Ths. Văn Đức Sơn Hà – Giảng viên E-commerce Trường Đại …
          </p>
          <Link to='/blogpost' >
          <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
        
    <div className="blog-container">
        <div className="blog-header">
<img src='https://ispace.edu.vn/wp-content/uploads/2024/04/Banner-Web-2-Dien-gia-Tran-Nghia-Kim-Ngan-1.png' alt='Anhminhhoa' />
</div>
<div className="blog-container">
      <div className="blog-post">
        <div className="blog-date">
          <div className="day">22</div>
          <div className="month">May</div>
          <h2>iSPACE tổ chức Talkshow iCONNECTSPACE #4: Học thiết kế, không ế việc?</h2>
        </div>
        <div className="blog-content">
          <p>
          iCONNECTSPACE là chương trình kết nối sinh viên với chuyên gia iCONNECTSPACE là chương trình kết nối sinh viên iSPACE với các chuyên gia trong ngành. Nếu những mùa trước tập trung vào các ngành công nghệ như an ninh …
          </p>
          <Link to='/blogpost1' >
          <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    <div className="blog-container">
        <div className="blog-header">
<img src='https://ispace.edu.vn/wp-content/uploads/2024/05/Banner-su-kien-fb-iConnect-5.png' alt='Anhminhhoa' />
</div>
<div className="blog-container">
      <div className="blog-post">
        <div className="blog-date">
          <div className="day">11</div>
          <div className="month">May</div>
          <h2>iCONNECTSPACE #5: Bán hàng trên sàn hay quảng cáo trên mạng chính thức khởi động.</h2>
        </div>
        <div className="blog-content">
          <p>
          Tiếp nối sự thành công của 4 mùa trước, iCONNECTSPACE #5 chính thức quay trở lại với chủ đề: “Bán hàng trên sàn hay quảng cáo trên mạng?”.  Trước xu thế phát triển mạnh mẽ của các sàn thương mại …
          </p>
          <Link to='/blogpost2' >
          <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    <div className="blog-container">
        <div className="blog-header">
<img src='https://ispace.edu.vn/wp-content/uploads/2024/03/Banner-Web.png' alt='Anhminhhoa' />
</div>
<div className="blog-container">
      <div className="blog-post">
        <div className="blog-date">
          <div className="day">10</div>
          <div className="month">May</div>
          <h2>CLB Truyền Thông P.R.O phát động chương trình iSPACE iLISTEN #2: Cá tháng tư – Lời nói dối chân thành.</h2>
        </div>
        <div className="blog-content">
          <p>
          CLB Truyền Thông P.R.O chính thức phát động iSPACE iLISTEN số #2 nhân dịp cá tháng tư!  Có những lời nói dối làm tim tan nát nhưng cũng có những lời “nói dối” chân thành xuất phát từ trái tim. …
          </p>
          <Link to='/blogpost3' >
          <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
      </div>
    );
  }

<div></div>
export default Blog;