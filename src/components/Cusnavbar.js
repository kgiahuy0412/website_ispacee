import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../index.css'; 
import Logo1 from '../assets/images/Logo1.png'; 


function Cusnavbar() {
    const [navbarScrolled, setNavbarScrolled] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <Navbar 
        bg="light" 
        expand="lg" 
        className={`navbar-custom ${navbarScrolled ? 'navbar-scrolled' : ''}`}
      >
        <div className="container d-flex justify-content-between">
          <Navbar.Brand href="#">
            <img src={Logo1} alt="Logo" style={{ height: '50px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav>
              <Nav.Link className="nav-item-spacing" href="/">Trang Chủ</Nav.Link>
              <NavDropdown title="Ngành Học" id="basic-nav-dropdown" className="nav-item-spacing">
                <NavDropdown.Item href="/anm">Ngành An Ninh Mạng</NavDropdown.Item>
                <NavDropdown.Item href="/ltmt">Phát Triển Phần Mềm</NavDropdown.Item>
                <NavDropdown.Item href="/tkdh">Ngành Thiết Kế Đồ Hoạ</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Khoá Ngắn Hạn" id="short-course-dropdown" className="nav-item-spacing">
                <NavDropdown.Item href="/aws">Ngành AWS</NavDropdown.Item>
                <NavDropdown.Item href="/ceh">Ngành CEH</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-item-spacing" href="/blog">Tin Tức</Nav.Link>
              <Nav.Link className="nav-item-spacing" href="/register">Đăng Ký Ngay</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
}
<div></div>
export default Cusnavbar;
