import React from 'react'

import Loiich3 from '../assets/images/Loiich3.jpg';
import Image15 from '../assets/images/Image15.png';
import Image16 from '../assets/images/Image16.png';
import Image17 from '../assets/images/Image17.png';
import Image18 from '../assets/images/Image18.png';
import Image19 from '../assets/images/Image19.png';
import Image20 from '../assets/images/Image20.png';
import Image21 from '../assets/images/Image21.png';
import Register from './Register';

function TKĐH() {
  return (
    <div> 
      <img src='https://ispace.edu.vn/wp-content/uploads/2022/01/BANNER-4-NGANH_Mesa-de-trabajo-1-copy-1-2048x853.jpg' alt="Large Banner" className="banner-image" />
      <p className="bold-text small-text">Chương trình được xây dựng dựa trên chương trình học chuẩn quốc tế của các hãng nổi tiếng về công nghệ đồ họa như: Adobe, Autodesk,… Sinh viên được trực tiếp làm ra các ấn phẩm đồ họa theo từng giai đoạn năng lực chuyên môn.</p>

      <br />

      <div>
      <img src={Loiich3} alt="Large Banner" className="banner-image" />
      </div>
      <div className="banner-container">
      <p className="banner-text">LỘ TRÌNH HỌC</p>
      <img src={Image15} alt="Lộ Trình 15" className="learning-image" />
      <img src={Image16} alt="Lộ Trình 16" className="learning-image" />
      <img src={Image17} alt="Lộ Trình 17" className="learning-image" />
      <img src={Image18} alt="Lộ Trình 18" className="learning-image" />
      <img src={Image19} alt="Lộ Trình 19" className="learning-image" />
      <img src={Image20} alt="Lộ Trình 20" className="learning-image" />
      <img src={Image21} alt="Lộ Trình 21" className="learning-image" />
      </div>
      <br />

      <Register />

    </div>
  )
}
<div></div>
export default TKĐH