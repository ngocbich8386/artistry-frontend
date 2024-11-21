import React, { useState } from "react";
import Header from "../../Components/Header/header"; // Import Header
import Sidebar from "../../Components/Sidebar/sidebar"; // Import Sidebar
import "./AboutPage.css";

import logo from "../../Components/Assets/Data/Logo_nen_xanh.png";
import dichvu from "../../Components/Assets/Data/dichvu.jpg";
import aboutbg from "../../Components/Assets/Data/aboutPagebg.jpg";

const AboutPage = () => {
  return (
    <div >
      {/* Sidebar */}
      <Sidebar />

      <div className="content">
        {/* Header */}
        <Header />

        {/* Nội dung chính */}
        <div class="" style={{backgroundImage: `url(${aboutbg})`}}>
          <div class="navbar-custom">
            <a href="#gioi-thieu" class="nav-item">
              Giới thiệu
            </a>
            <a href="#dich-vu" class="nav-item">
              Dịch vụ
            </a>
            <a href="#cam-ket" class="nav-item">
              Cam kết
            </a>
          </div>
          <div class="introduction-section">
            <div class="introduction-content">
              <div class="introduction-image">
                <img src={logo} alt="Artistry Logo" />
              </div>

              <div class="introduction-text">
                <h2>Giới thiệu</h2>
                <p>
                  <span style={{fontweight: 'bold', color: '#02548c'}}> 
                    Artistry
                  </span>{" "}
                  là một nền tảng trực tuyến sáng tạo dành riêng cho những nghệ
                  sĩ yêu thích tranh ảnh và người hâm mộ nghệ thuật. Tại{" "}
                  <span style={{fontweight: 'bold', color: '#02548c'}}>
                    Artistry
                  </span>
                  , các nghệ sĩ không chỉ có cơ hội trưng bày các tác phẩm của
                  mình mà còn có thể kết nối trực tiếp với những người yêu nghệ
                  thuật từ khắp nơi trên thế giới.
                </p>
              </div>
            </div>
          </div>
          <div id="dich-vu" class="service-section">
            <div class="service-content">
              <div class="service-text">
                <h2>Dịch vụ</h2>
                <p>
                  Chúng tôi cung cấp không gian trực tuyến để nghệ sĩ giới thiệu
                  và bán tranh, kèm theo các công cụ tương tác như diễn đàn và
                  kênh chat. Người mua dễ dàng yêu cầu tác phẩm theo ý thích và
                  giao dịch một cách bảo mật.
                </p>
                <p>
                  Bên cạnh đó,{" "}
                  <span style={{fontweight: 'bold', color: '#ffffff'}}>  
                    Artistry
                  </span>{" "}
                  còn cung cấp tính năng yêu cầu sáng tạo, cho phép khách hàng
                  đề xuất ý tưởng để nghệ sĩ tạo ra những tác phẩm độc nhất theo
                  nhu cầu.
                </p>
              </div>

              <div class="service-image">
                <img src={dichvu} alt="Artistry Services" />
              </div>
            </div>
          </div>
          <div id="cam-ket" class="commitment-section">
            <div class="commitment-content">
              <h2>Cam kết</h2>
              <p>
                Tại{" "}
                <span style={{fontweight: 'bolder', color: '#02548c'}}>Artistry</span> 
                , chúng tôi cam kết xây dựng một cộng đồng nghệ thuật sáng tạo
                và kết nối, nơi các nghệ sĩ và người yêu nghệ thuật có thể giao
                lưu, chia sẻ, và giao dịch an toàn. Chúng tôi không ngừng nỗ lực
                cung cấp nền tảng hiện đại, hỗ trợ cá nhân hóa trải nghiệm để
                mang đến giá trị đích thực cho nghệ thuật và sự sáng tạo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
