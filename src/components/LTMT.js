import React from 'react'

import Loiich2 from '../assets/images/Loiich2.jpg';
import Image8 from '../assets/images/Image8.png';
import Image9 from '../assets/images/Image9.png';
import Image10 from '../assets/images/Image10.png';
import Image11 from '../assets/images/Image11.png';
import Image12 from '../assets/images/Image12.png';
import Image13 from '../assets/images/Image13.png';
import Image14 from '../assets/images/Image14.png';
import Register from './Register';

function LTMT() {
  return (
    <div>
      <img src='https://ispace.edu.vn/wp-content/uploads/2020/09/Bo-Banner-5-nganh-web_Mesa-de-trabajo-1-copy-3-2048x854.jpg' alt="Large Banner" className="banner-image" />
      <p className="bold-text small-text">Tại iSPACE, ngành phát triển phần mềm được thiết kế tối thiểu 500 giờ trải nghiệm thực tế dưới sự hướng dẫn của doanh nghiệp.<br/> Sinh viên sẽ được rèn luyện kĩ năng chuyên môn, tích lũy kinh nghiệm thông qua quá trình học tập tại doanh nghiệp cùng các sản phẩm có khả năng được ứng dụng trong thực tế.</p>

        <br />

        <div>
          <img src={Loiich2} alt="Large Banner" className="banner-image" />
        </div>
        <div className="banner-container">
        <p className="banner-text">LỘ TRÌNH HỌC</p>
        <img src={Image8} alt="Lộ Trình 8" className="learning-image" />
        <img src={Image9} alt="Lộ Trình 9" className="learning-image" />
        <img src={Image10} alt="Lộ Trình 10" className="learning-image" />
        <img src={Image11} alt="Lộ Trình 11" className="learning-image" />
        <img src={Image12} alt="Lộ Trình 12" className="learning-image" />
        <img src={Image13} alt="Lộ Trình 13" className="learning-image" />
        <img src={Image14} alt="Lộ Trình 14" className="learning-image" />
        </div>
        <br />
        <Register />
    </div>
  )
}
<div></div>
export default LTMT