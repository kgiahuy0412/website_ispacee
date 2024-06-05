import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

function Register() {
  
  // const [formData, setFormData] = useState({
  //   fullName: '',
  //   phoneNumber: '',
  //   email: '',
  //   course: ''
  // });
  const [fullName, setFullName]=useState('');
  const [phoneNumber, setPhoneNumber]=useState('');
  const [email, setEmail]=useState('');
  const [course, setCourse]=useState('');
  const [successMessage, setSuccessMessage] = useState('');
  

 

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Đăng ký thành công!');
    const data={
      FullName:fullName,
      PhoneNumber:phoneNumber,
      Email:email,
      Course:course,
      
      
    }
    axios.post('https://sheet.best/api/sheets/242d3076-38e7-4588-88c8-134d8dc0fa8a',data).then((response)=>{
      console.log(response);
      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setCourse('');
    })
  };

  return (
  <div className="form-body"> 
    <div className="form-container">
      <h2>5 SUẤT ƯU ĐÃI HỌC PHÍ 50% <br/> <br/>
ĐĂNG KÝ XÉT TUYỂN NGAY  </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> 
          <label htmlFor="fullName">Họ và tên:</label>
          <input type="text" placeholder="Nhập tên của bạn"id="fullName" name="fullName" value={fullName} onChange={(e)=>setFullName(e.target.value)} />
        </div>
        <div className="form-group"> 
          <label htmlFor="phoneNumber">Số điện thoại:</label>
          <input type="text" placeholder="Nhập số điện thoại của bạn" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
        </div>
        <div className="form-group"> 
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder="Nhập email của bạn" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="form-group"> 
          <label htmlFor="course">Ngành học:</label>
          <select id="course" name="course" value={course} onChange={(e)=>setCourse(e.target.value)}>
            <option value="">Chọn ngành học</option>
            <option value="An Ninh Mạng">An Ninh Mạng</option>
            <option value="lPhát Triển Phần Mềm">Phát Triển Phần Mềm</option>
            <option value="Thiết Kế Đồ Hoạ">Thiết Kế Đồ Hoạ</option>
            <option value="Ngành CEH">Ngành CEH</option>
            <option value="Ngành AWS">Ngành AWS</option>
          </select>
        </div>
        <button type="submit" className="form-group">Đăng ký</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}
<div></div>
export default Register;
