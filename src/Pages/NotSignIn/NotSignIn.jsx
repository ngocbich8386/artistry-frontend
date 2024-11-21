import React, { useState } from "react";
import "./NotSignIn.css";
import logo from "../../Components/Assets/Data/Logo.png";
import banner from "../../Components/Assets/Data/banner.jpg";
import banner1 from "../../Components/Assets/Data/banner_1.jpg";
import artwork1 from "../../Components/Assets/Data/artwork1.jpg";
import artwork2 from "../../Components/Assets/Data/artwork2.jpg";
import artwork3 from "../../Components/Assets/Data/artwork3.jpg";
import { useNavigate } from 'react-router-dom'


const NotSignIn = () => {
  const navigate = useNavigate()

  const handleRegisterPage = (e) => {
      e.preventDefault()

      navigate ('/register')
  }
  const handleLogin = (e) => {
    e.preventDefault();

    navigate ('/login')}
  return (
    // Import hình ảnh
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="auth-buttons">
          <button className="btn" style={{color: '#005691', backgroundColor: 'white', fontWeight: 'bolder' }} onClick={handleLogin}>Đăng nhập</button>
          <button className="btn" style={{color: '#005691', backgroundColor: 'white', fontWeight: 'bolder' }} onClick={handleRegisterPage}>Đăng ký</button>
        </div>
      </header>

      <section className="about-section">
        <div className="title" style={{ backgroundImage: `url(${banner})` }}>
          <h1>ARTISTRY</h1>
          <h2>Unleash Your Creative Essence</h2>
        </div>

        <div className="about-section_intro">
          <h3>VỀ CHÚNG TÔI</h3>
          <p>
            <b>Artistry</b> là một nền tảng trực tuyến sáng tạo dành riêng cho
            những nghệ sĩ yêu thích tranh ảnh và người hâm mộ nghệ thuật. Tại
            Artistry, các nghệ sĩ không chỉ có cơ hội trưng bày các tác phẩm của
            mình mà còn có thể kết nối trực tiếp với những người yêu nghệ thuật
            từ khắp nơi trên thế giới.
          </p>
        </div>

        <div
          className="features"
          style={{ backgroundImage: `url(${banner1})` }}
        >
          <div className="feature">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
            <p>
              <b>Khám phá</b> và <b>sở hữu</b> các tác phẩm nghệ thuật theo yêu
              cầu
            </p>
          </div>
          <div className="feature">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-people"
              viewBox="0 0 16 16"
            >
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
            </svg>
            <p>
              Trở thành <b>thành viên</b> của cộng đồng yêu nghệ thuật sáng tạo
            </p>
          </div>
          <div className="feature">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chat-square-heart"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
            </svg>
            <p>
              <b>Kết nối</b> trực tiếp cùng các họa sĩ và người sáng tạo tài
              năng
            </p>
          </div>
        </div>
      </section>

      <section className="featured-artworks">
        <h3>TÁC PHẨM NỔI BẬT</h3>
        <div className="artworks-grid">
          <img src={artwork1} alt="Artwork 1" />
          <img src={artwork2} alt="Artwork 2" />
          <img src={artwork3} alt="Artwork 3" />
        </div>
      </section>
      <footer class="footer">
        <div class="contact-info">
          <h4>Hỗ trợ khách hàng</h4>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>{" "}
            &nbsp; &nbsp; artistry&#64;gmail.com
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>{" "}
            &nbsp; &nbsp; 000 000 0000
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>{" "}
            &nbsp; &nbsp;TP Hồ Chí Minh
          </p>
        </div>

        <div class="logo-footer">
          <img src={logo} alt="Logo" />
          <p>Unleash Your Creative Essence</p>
        </div>

        <div class="main-features">
          <h4>Các tính năng chính</h4>
          <p>Khám phá tác phẩm</p>
          <p>Diễn đàn trao đổi</p>
          <p>Trở thành nhà sáng tạo</p>
          <p>Các chính sách giao dịch</p>
        </div>
      </footer>
    </>
  );
};

export default NotSignIn;
