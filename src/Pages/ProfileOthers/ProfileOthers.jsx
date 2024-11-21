import React from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import "./ProfileOthers.css";
import { useNavigate } from "react-router-dom";
import profilePic from "../../Components/Assets/Data/hailey.jpg";
import coverPhoto from "../../Components/Assets/Data/bgProfilePurple.jpg";

const ProfileOthers = () => {
  const navigate = useNavigate();
  const handleCreateChanel = () =>
  {navigate('/creator-register')}
  return (
    <div className="profile-others">
      {/* Sidebar */}
      <Sidebar />

      <div className="content">
        {/* Cover Photo */}
        <div className="cover-photo">
          <img src={coverPhoto} alt="Cover Photo" />
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="profile-header">
            <img src={profilePic} alt="Profile Picture" className="profile-pic" />
            <div className="profile-info">
              <h1 className="name">HAILEY BIEBER</h1>
              <p className="username">@hailey.bb</p>
              <div className="social-links">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>

          <div className="tabs">
            <button>THÔNG TIN</button>
            <button>ĐƠN HÀNG</button>
            <button>TÀI KHOẢN</button>
          </div>
          <div className="line"></div>

          {/* Create Channel Button */}
          <div className="create-channel-section">
            <button className="create-channel-btn" onClick={handleCreateChanel}>Kênh sáng tạo của tôi</button>
          </div>

          {/* Information Section */}
          <div className="info-section">
            <div className="info-box">
              <label>TÊN</label>
              <div className="box-content">
                HAILEY BIEBER
                <i className="fas fa-external-link-alt"></i>
              </div>
            </div>

            <div className="info-box">
              <label>EMAIL</label>
              <div className="box-content">
                Hailey_bie@gmail.com
                <i className="fas fa-external-link-alt"></i>
              </div>
            </div>

            <div className="info-box">
              <label>SỐ ĐIỆN THOẠI</label>
              <div className="box-content">
                0813 689 216
                <i className="fas fa-external-link-alt"></i>
              </div>
            </div>

            <div className="info-box">
              <label>ĐỊA CHỈ</label>
              <div className="box-content">
                Phú Bài, Thừa Thiên Huế
                <i className="fas fa-external-link-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOthers;
