import React from 'react';
import Banner from '../assets/images/Banner.jpg';
import ANM from '../assets/images/ANM.png';
import LTMT from '../assets/images/LTMT.png';
import TKDH from '../assets/images/TKDH.png';
import CEH from '../assets/images/CEH.png';
import AWS from '../assets/images/AWS.png';
import anh1 from '../assets/images/anh1.png';
import '../index.css';

function Home() {
  return (
    <div>
      <div className="banner-container">
        <img src={Banner} alt="Large Banner" className="banner-image" />
      </div>
      <h3 className="banner-text">CHƯƠNG TRÌNH ĐÀO TẠO CHỈ 2 NĂM 3 THÁNG</h3>
      <div className="container mt-5">
        <div className="courses-container mt-5">
          <div className="row">
            <div className="col-md-4 mb-4 d-flex align-items-center justify-content-center">
              <div className="card h-100" style={{ backgroundColor: '#26355D', padding: '20px' }}>
                <img src={ANM} className="card-img-top" alt="ANM" />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{ color:'white'}}>An Ninh Mạng</h5>
                  <a href="/anm" style={{ color:'yellow'}}>Xem Chi Tiết</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex align-items-center justify-content-center" >
              <div className="card h-100" style={{ backgroundColor: '#26355D', padding: '20px' }}>
                <img src={LTMT} className="card-img-top" alt="LTMT"  />
                <div className="card-body text-center">
                <h5 className="card-title" style={{ color:'white'}}>Lập Trình Máy Tính</h5>
                  <a href="/ltmt"style={{ color:'yellow'}}>Xem Chi Tiết </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex align-items-center justify-content-center">
              <div className="card h-100" style={{ backgroundColor: '#26355D', padding: '20px' }}>
                <img src={TKDH} className="card-img-top" alt="TKĐH" />
                <div className="card-body text-center">
                <h5 className="card-title" style={{ color:'white'}}>Thiết Kế Đồ Hoạ </h5>
                  <a href="/tkdh" style={{ color:'yellow'}}>Xem Chi Tiết</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex align-items-center justify-content-center">
              <div className="card h-100" style={{ backgroundColor: '#26355D', padding: '20px' }}>
                <img src={CEH} className="card-img-top" alt="AWS" />
                <div className="card-body text-center">
                <h5 className="card-title" style={{ color:'white'}}>Khoá Học CEH</h5>
                  <a href="/aws" style={{ color:'yellow'}}>Xem Chi Tiết</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex align-items-center justify-content-center">
              <div className="card h-100" style={{ backgroundColor: '#26355D', padding: '20px' }}>
                <img src={AWS} className="card-img-top" alt="CEH" />
                <div className="card-body text-center">
                <h5 className="card-title" style={{ color:'white'}}>Khoá Học AWS</h5>
                  <a href="/ceh"style={{ color:'yellow'}}>Xem Chi Tiết</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="container">
      <h3 className="text-orange">TỔNG QUAN TRƯỜNG CAO ĐẲNG AN NINH MẠNG ISPACE</h3> <br />
        <div className="row">
          <div className="col-md-6">
            <p className="p-large">Trường Cao Đẳng An ninh mạng iSPACE là đơn vị thuộc NGS Group. iSPACE tiên phong trong đào tạo thực hành từ năm 2008 theo tiêu chí tuyển sinh đi liền tuyển dụng.</p>
            <p className="p-small">Từ năm 2015, Trường iSPACE thực hiện chương trình tuyển sinh và đào tạo đặc biệt “CNTT- Học để làm việc ngay”. Chương trình mang đến cho các bạn trẻ đam mê CNTT ba giá trị vượt trội: 70% học thực hành, 100% làm việc ngay, 100% thêm nghề phụ.</p>
            <p className="p-small">Năm học 2021- 2022, Trường Cao đẳng An ninh mạng iSPACE mở rộng và nâng cấp cơ sở vật chất với quy mô hiện đại và sáng tạo theo xu hướng trường học quốc tế.</p>
          </div>
          <div className="col-md-6">
            <img src={anh1} alt="Trường Cao Đẳng An Ninh Mạng iSPACE" className="full-width-img" />
          </div>
        </div>
      </div>

      <br />

      <div className="row">
          <div className="col-12">
            <h3 className="centered-text">iSPACE VÀ NHỮNG CON SỐ BIẾT NÓI</h3>
            <div className="stat-container">
          <div className="stat-item">
            <div className="stat-icon"><i className="fas fa-laptop-code"></i></div>
            <div className="stat-number">100%</div>
            <div className="stat-text">SINH VIÊN CÓ VIỆC LÀM NGAY</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><i className="fas fa-user-graduate"></i></div>
            <div className="stat-number">15,000</div>
            <div className="stat-text">SINH VIÊN ĐƯỢC ĐÀO TẠO</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><i className="fas fa-chalkboard-teacher"></i></div>
            <div className="stat-number">70%</div>
            <div className="stat-text">THỰC HÀNH</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon"><i className="fas fa-calendar-alt"></i></div>
            <div className="stat-number">18 Năm</div>
            <div className="stat-text">KINH NGHIỆM ĐÀO TẠO</div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <h3 className="centered-text">18 NĂM HÌNH THÀNH VÀ PHÁT TRIỂN</h3>
            <img src='https://ispace.edu.vn/wp-content/uploads/2024/02/18-NAM-HINH-THANH-VA-PHAT-TRIEN-01-1-768x178.jpg' alt='18namhinhthanhphattrien' className="full-width-img" />
            <br /> <br/>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Home;
