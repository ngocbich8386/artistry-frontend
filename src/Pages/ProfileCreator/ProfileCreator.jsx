import React from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import "./ProfileCreator.css";
import profilePic from "../../Components/Assets/Data/namjoon.jpg";
import coverPhoto from "../../Components/Assets/Data/bgProfilePurple.jpg";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext/CartContext";



const ProfileCreator = () => {
  const { cartCount } = useCart();


  return (
    <div className="profile-creator">
      {/* Sidebar */}
      <Sidebar />

      <div className="content">
        {/* Cover Photo */}
        <div className="cover-photo">
          <img src={coverPhoto} alt="Cover Photo" />
          <div className="icon_container">
        {/* Cart Icon */}
        <Link to="/cart">
          <button className="icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </Link>

        {/* User Icon with Dropdown */}

        <div className="dropdown">
          <button
            className="icon-button dropdown-toggle"
            id="userDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </button>
          <ul className="dropdown-menu" aria-labelledby="userDropdown">
            <li>
              <Link to="/profile" className="dropdown-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-hearts"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
                  />
                </svg>{" "}
                Trang cá nhân
              </Link>
            </li>
            <li>
              <Link to="/" className="dropdown-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-in-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>{" "}
                Đăng xuất
              </Link>
            </li>
          </ul>
        </div>
      </div>
        </div>

        {/* Main Content */}
        <div className="my-main-content">
          <div className="profile-header">
            <img src={profilePic} alt="Profile Picture" className="profile-pic" />
            <div className="profile-info">
              <h1 className="name">KIM NAM-JOON</h1>
              <p className="username">@joon.nam</p>
              <div className="social-links">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>

          <div className="tabs">
            <button>THÔNG TIN</button>
            <button>BÀI ĐĂNG</button>
            <button>SẢN PHẨM</button>
          </div>
          <div className="line"></div>

          {/* Information Section */}
          <div className="info-section">
            <div className="info-box">
                <div>
                  <label>TÊN:</label> {' '}
                    Kim Nam Joon
                </div>
              <i className="fas fa-external-link-alt"></i>
            </div>

            <div className="info-box">
              
              <div>
              <label>EMAIL:</label> {' '}
                Nam_joon@gmail.com
              </div>
              <i className="fas fa-external-link-alt"></i>

            </div>

            <div className="info-box">
              <div>
              <label>SỐ ĐIỆN THOẠI: </label> {' '}
                0813 689 214
              </div>
              <i className="fas fa-external-link-alt"></i>

            </div>
            <div className="info-box">
              <div>
              <label>ĐỊA CHỈ:</label> {' '}

                 Bình Thạnh, TP Hồ Chí Minh
              </div>
              <i className="fas fa-external-link-alt"></i>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreator;
