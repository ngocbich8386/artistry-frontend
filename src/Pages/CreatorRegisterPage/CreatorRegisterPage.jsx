import axios from 'axios';
import React, { useState} from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import { useNavigate } from 'react-router-dom'
import "./Channel.css";

const Creatorregister = () => {
  const [Name, setCreatorName] = useState();
  const [Phone_number, setPhoneNumber] = useState();
  const [Creator_TaxCode, setTaxCode] = useState();
  const [Citizen_ID, setCitizenID] = useState();
  const navigate = useNavigate()

  // const [error, setError] = useState();

  const handleCreatorRegister = (e) => {
      e.preventDefault();
      
      if (!Name || !Phone_number || !Creator_TaxCode || !Citizen_ID) {
          alert("Vui lòng điền đầy đủ thông tin.");
          return;
      }

      if (Phone_number.length !== 10) {
          alert("Số điện thoại phải có 10 chữ số.");
          return;
      }

      axios.post('http://localhost:5000/creatorregister', {
          Name,
          Phone_number,
          Creator_TaxCode,
          Citizen_ID
      })
      .then(result => {
        alert("Đăng kí thành công")
      })
      .catch(err => console.log(err));
      navigate ('/home-page')
  };

  return (
    <div className="channel">
      {/* Sidebar */}
      <Sidebar />

      <div className="content">
        <h2>ĐĂNG KÝ TÀI KHOẢN TRỞ THÀNH NHÀ SÁNG TẠO</h2>

        <div className="section">
          <h3>Thông tin kênh nhà sáng tạo</h3>
          <div className="form-group-row">
            <div className="form-group-inline">
              <label>Tên nhà sáng tạo:</label>
              <input type="text" placeholder="Thanh Le Dac" onChange={(e) => setCreatorName(e.target.value)} />
            </div>
            <div className="form-group-inline">
              <label>Địa chỉ:</label>
              <input type="text" placeholder="Binh Thanh, HCM"  />
            </div>
            <div className="form-group-inline">
              <label>Số điện thoại:</label>
              <input type="text" placeholder="0812 689 213" onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Thông tin thuế</h3>
          <div className="form-group-row">
            <div className="form-group-inline">
              <label>Loại hình kinh doanh:</label>
              <div className="radio-group horizontal-radio-group radio-align">
                <label>
                  <input type="radio" name="businessType" value="individual" defaultChecked />
                  Cá nhân
                </label>
                <label>
                  <input type="radio" name="businessType" value="household" />
                  Hộ kinh doanh
                </label>
                <label>
                  <input type="radio" name="businessType" value="company" />
                  Công ty
                </label>
              </div>
            </div>
            <div className="form-group-inline">
              <label>Mã số thuế:</label>
              <input type="text" placeholder="001122334455779989" onChange={(e) => setTaxCode(e.target.value)}  />
            </div>
            <div className="form-group-inline">
              <label>Địa chỉ đăng ký kinh doanh:</label>
              <input type="text" placeholder="Quan 10, HCM"  />
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Thông tin định danh</h3>
          <div className="form-group-row">
            <div className="form-group-inline">
              <label>Số căn cước công dân:</label>
              <input type="text" placeholder="0723445768909" onChange={(e) => setCitizenID(e.target.value)} />
            </div>
            <div className="form-group-inline">
              <label>Ngày cấp:</label>
              <input type="date" />
            </div>
            <div className="form-group-inline">
              <label>Nơi cấp:</label>
              <input type="text" placeholder="Cục quản lý trật tự xã hội TP HCM" />
            </div>
          </div>
        </div>

        <div className="actions">
          <button className="cancel-btn" onClick={() => alert("Hủy bỏ đăng ký!")}>Hủy</button>
          <button className="register-btn" onClick={handleCreatorRegister}>Đăng ký</button>
        </div>
      </div>
    </div>
  );
};

export default Creatorregister;