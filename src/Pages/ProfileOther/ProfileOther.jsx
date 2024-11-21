import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom"; 
import Sidebar from "../../Components/Sidebar/sidebar"; // Import Sidebar
import "./ProfileOther.css";
import profilePic from "../../Components/Assets/Data/jenny.jpg";
import coverPhoto from "../../Components/Assets/Data/bgProfilePurple.jpg";

const ProfileOther = ({creators}) => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const selectedCreator = creators.find((c) => c._id === id);
    setCreator(selectedCreator);
  }, [id, creators]);

  if (!creator) return <p>Loading...</p>;
  return (
    <div className="profile-other">
      {/* Sidebar */}
      <Sidebar />

      <div className="content">
        {/* Cover Photo */}
        <div className="cover-photo">
          <img src={coverPhoto} alt="Cover Photo" />
        </div>

        {/* Main Content */}
        <div className="my-main-content">
          <div className="profile-header">
            <img src={profilePic} alt="Profile Picture" className="profile-pic" />
            <div className="profile-info">
            <h1 className="name">{creator.Name}</h1>
              <p className="username">@{creator.User_ID.userName}</p>
              <div className="social-links">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>

          <div className="tabs">
            <button>GIỚI THIỆU</button>
            <button>BÀI ĐĂNG</button>
            <button>SẢN PHẨM</button>
          </div>
          <div className="line"></div>

          {/* Introduction Section */}
          <div className="intro-section">
            <p>
              {creator.Creator_Bio}
            </p>
          </div>

          {/* Statistics Section */}
          <div className="stats-section">
            <div className="stats-box">
              <h3>TỔNG SỐ SẢN PHẨM</h3>
              <p>1159</p>
            </div>
            <div className="stats-box">
              <h3>TỔNG SỐ BÀI ĐĂNG</h3>
              <p>896</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOther
