import React from 'react'
import awsbanner from '../assets/images/awsbanner.png';
import '../index.css';
import Register from './Register';

function AWS() {
  return (
    <div>
      <div className="ceh-banner-container"  style={{ marginLeft: 0, paddingLeft: 0 }}>
      <img src={awsbanner} alt="Large Banner" className="banner-image"/>
      
      </div>
      <h3 className="ceh-banner-text">THÔNG TIN KHOÁ HỌC</h3>
      <div className="ceh-container">
        <ul>
            <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Tên khóa học: AWS Cloud Foundation</p></li>
            <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Giảng viên: Ths. Lê Hoàng Bình Nguyên.</p></li>
            <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Thời lượng: 20h, mỗi buổi 2h</p></li>
            <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Thời lượng: 20h, mỗi buổi 2h</p></li>
            <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Lịch học: tối hai – tư – sáu (18h30 đến 20h30)</p></li>
            <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Yêu cầu học viên: có kiến thức CNTT cơ bản, có máy tính hoặc laptop.</p></li>
            <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Hình thức: online/offline </p></li>
     <img src='https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-768x568.jpg' alt='awsimage'className="img-fluid"  />
      </ul>
      </div>
      <div className="ceh-content"  style={{ marginLeft: 0, paddingLeft: 0 }}>
  <div>
    <h3 className="ceh-banner-text">ĐỐI TƯỢNG HỌC VIÊN</h3>
    <div className="ceh-container"  style={{ marginLeft: 0, paddingLeft: 0 }}>
        <ul>
      <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Sinh viên muốn học thêm về điện toán đám mây để nâng cao kiến thức và lấy chứng chỉ.</p></li>
      <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Những người yêu thích và muốn tìm hiểu về Cloud (AWS)</p></li>
      <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Người muốn học để nâng cao kiến thức.</p></li>
      <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Những người làm về dịch vụ Cloud (Sale, tư vấn viên, marketing, chủ doanh nghiệp…)</p></li>
      <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Người muốn lấy chứng chỉ để nâng cao cơ hội việc làm, tăng lương.</p></li>
      </ul>
    </div>
  </div>
  <div>
    <h3 className="ceh-banner-text">VÌ SAO NÊN HỌC AWS</h3>
    <div className="ceh-container">
        <ul>
      <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Là một trong những dịch vụ cloud computing lớn nhất thế giới hiện nay.</p></li>
      <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Cung cấp cái nhìn tổng quan về các dịch vụ, những điều nên làm (và không nên làm) để xây dựng một hệ thống tốt trên cloud</p></li>
      <li><p className="ceh-course-detail"><i className="fas fa-circle"></i>Các doanh nghiệp dịch chuyển dần lên Cloud với tốc độ chóng mặt.</p></li>
      </ul>
    </div>
  </div>
</div>
<div></div>
      <br />
      <Register />
    </div>
  )
}

export default AWS