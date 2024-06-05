import React from 'react'
import Loiich from '../assets/images/Loiich.jpg';
import Image1 from '../assets/images/Image1.png';
import Image2 from '../assets/images/Image2.png';
import Image3 from '../assets/images/Image3.png';
import Image4 from '../assets/images/Image4.png';
import Image5 from '../assets/images/Image5.png';
import Image6 from '../assets/images/Image6.png';
import Image7 from '../assets/images/Image7.png';
import '../index.css'; 
import Register from './Register';

function ANM() {
  return (
    <div>
      <img src='https://ispace.edu.vn/wp-content/uploads/2020/09/Bo-Banner-5-nganh-web_Mesa-de-trabajo-1-2048x854.jpg' alt="Large Banner" className="banner-image" />
      <p className="bold-text small-text">Điểm vượt trội của iSPACE là luôn chắt lọc và cập nhật kiến thức, nền tảng mới kết hợp với thực hành thao luyện trên THAO TRƯỜNG MẠNG – Cyber Range. Học viên được trực tiếp trải nghiệm các tình huống tấn công mạng thực tế, giúp học viên thành thạo và có kinh nghiệm thực tiễn ngay khi còn ngồi trên ghế nhà trường.</p>
      <p className="bold-text small-text">Chương trình đào tạo “Vệ sĩ mạng” của iSPACE sẽ giúp sinh viên học được cách rà soát và khắc phục tất cả các lỗ hổng/nguy cơ tiềm ẩn gây mất ATTT trong hạ tầng CNTT của các doanh nghiệp/ tổ chức.</p>
      
      <div>
        <img src={Loiich} alt="Large Banner" className="banner-image" />
      </div>
      
      <div className="banner-container">
        <h3 className="banner-text">LỘ TRÌNH HỌC</h3>
        <img src={Image1} alt="Lộ Trình 1" className="learning-image" />
        <img src={Image2} alt="Lộ Trình 2" className="learning-image" />
        <img src={Image3} alt="Lộ Trình 3" className="learning-image" />
        <img src={Image4} alt="Lộ Trình 4" className="learning-image" />
        <img src={Image5} alt="Lộ Trình 5" className="learning-image" />
        <img src={Image6} alt="Lộ Trình 6" className="learning-image" />
        <img src={Image7} alt="Lộ Trình 7" className="learning-image" />
      </div>
      
      <div className="content-container">
        {/* Các phần nội dung */}
      </div>
      
      <Register />
    </div>
  )
}

export default ANM;
