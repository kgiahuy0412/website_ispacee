import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'; // Import your custom CSS file here
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerStyle = {
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqolrnUjPY1wa0lDsBWEaaMn7j7bPy5Ngiw&s')`, // Đặt đường dẫn đến hình ảnh của bạn ở đây
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      };
  return (
    <footer className="bg text-center text-white" style={footerStyle}>
      <div className="container p-4">
        <section className="mb-4">
          <a
            href="#!"
            className="btn-floating m-1"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href="#!"
            className="btn-floating m-1"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            href="#!"
            className="btn-floating m-1"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          <a
            href="#!"
            className="btn-floating m-1"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="#!"
            className="btn-floating m-1"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href="#!"
            className="btn-floating m-1"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>

        <section className="mb-4">
          <p style={{color: 'white', fontWeight:'bold',fontSize: '24px' }}>BẠN MUỐN TRỞ THÀNH CHUYÊN GIA CÔNG NGHỆ? <br/></p>
           <p style={{color: 'white', fontWeight:'bold',fontSize: '17px' }}>Hãy đến với chúng tôi - Trường Cao đẳng An ninh mạng iSPACE - Đơn vị trực thuộc NGS Group.</p> 
        </section>

        <section className="row">
          <div>
             <div className="button-wrapper">
            <Link to ='/register' >
                <button className="button">Đăng Ký</button>
            </Link>
      
    </div>
          </div>

          
        </section>
      </div>
        
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2024 By <a href="https://mdbootstrap.com/" className="text-reset fw-bold">Gia Huy</a>
        <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contacts</h5>
            <ul className="list-unstyled">
              <li>
                Learning By Doing
              </li>
              <li>
                <a>0938 205 966</a>
              </li>
              <li>
                <a>quangcao@ispace.edu.vn</a>
              </li>
            </ul>
          </div>
      </div>
    </footer>
  );
};
<div></div>
export default Footer;
