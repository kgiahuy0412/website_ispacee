import React from 'react'
import CEHbanner from '../assets/images/CEHbanner.png';
import '../index.css';
import Register from './Register';

function CEH() {
  return (
    <div>
      <div className="ceh-banner-container">
      <img src={CEHbanner} alt="Large Banner" className="banner-image"/>
      
    </div>

    <h3 className="ceh-banner-text">THÔNG TIN KHÓA HỌC</h3>
    <div className="ceh-container">
    
      <p className="ceh-course-detail"><i className="fas fa-circle"></i> Tên khóa học: CEH (V12) Certified Ethical Hacker</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i> Giảng viên: thầy Trương Phạm Hoài Thương</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i> Thời lượng: 40h, mỗi buổi 2h</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i> Lịch học: Tối 2 – 4 – 6 từ 18h30 đến 20h30</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i> Hình thức: offline</p>
      
    </div>
    <h3 className="ceh-banner-text">ĐỐI TƯỢNG HỌC VIÊN</h3>
    <div className="ceh-container">
      <p className="ceh-course-detail"><i className="fas fa-circle"></i> Nhân viên và học viên bảo mật mạng.</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i> Chuyên viên công nghệ thông tin.</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i> Chuyên viên quản trị hệ thống mạng + máy chủ.</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i> Người quản trị Website + Forum</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i> Quản lý các doanh nghiệp, nhân viên kinh doanh, quản lý tài chính có liên quan đến CNTT</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i>Các đối tượng yêu thích công việc về bảo mật, an ninh mạng.</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i>Người muốn lấy chứng chỉ để nâng cao cơ hội việc làm, tăng lương.</p>
    </div>
    <h3 className="ceh-banner-text">Vì Sao Nên Học CEH</h3>
    <div className="ceh-reason-container">
      <p className="ceh-course-detail"><i className="fas fa-circle"></i>CEH là chứng chỉ bảo mật thông tin hàng đầu thế giới, được công nhận rộng rãi và có giá trị cao trên thị trường.</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i>Giúp bạn hiểu rõ về các kỹ thuật tấn công và phòng thủ mạng, trang bị cho bạn các kiến thức, kỹ năng cần thiết để bảo vệ mạng của tổ chức, doanh nghiệp.</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i>Chứng chỉ CEH được các tổ chức uy tín trên thế giới, như DoD 8570, ANSI và NICE, công nhận và đánh giá cao, giúp bạn nâng cao cơ hội tìm kiếm việc làm, thăng tiến trong sự nghiệp.</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i>Giúp bạn có thể phát triển mạng lưới quan hệ và kết nối với các chuyên gia bảo mật thông tin khác trên toàn thế giới.</p>
      <p className="ceh-course-detail"><i className="fas fa-circle"></i>Giúp bạn nắm bắt được những xu hướng mới nhất trong lĩnh vực bảo mật thông tin, từ đó giúp bạn trở thành một chuyên gia bảo mật thông tin hàng đầu.</p>
    </div>

    <br />
    <Register />
    </div>
  )
}
<div></div>
export default CEH;