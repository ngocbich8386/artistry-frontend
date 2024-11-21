import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/sidebar'; // Import Sidebar
import './HomePage.css';
import homepage from '../../Components/Assets/Data/homepage.jpg'
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext/CartContext";



const HomePage = ({ artworks }) => {
  const { cartCount } = useCart();
  return (
    <div>
      <Sidebar/>
      <div className="my_header" style={{ backgroundImage: `url(${homepage})` }}
      >
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

        <div className="my-header-content">
          <h2>Chào buổi sáng, Đào!</h2>
          <div className="my-button">
            <button className="btn btn-warning" type="button">
              Tác phẩm
            </button>
            <button className="btn btn-warning" type="button">
              Diễn đàn
            </button>
          </div>
        </div>
      </div>

      <div className="content">
        {/* List Artwork */}
        <div className="list-artwork">
          <h4 className='mt-3 text-center'>Các tác phẩm trong tuần</h4>
          <div className="container_0">
            {artworks.map((a) => (
              <div className="card" style={{ width: '240px', height: '320px' }} key={a.id}>
                <Link to={`/product-detail/${a._id}`}>
                  <div>
                    <img
                      className="card-img-top"
                      src={a.Artwork_image}
                      alt={a.Artwork_name}
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <div className="card-title truncated-text">{a.Artwork_name}</div>
                  <div>{"@" + a.Creator_ID.Name}</div>
                </div>
                <div className="container_1">
                  <span className="badge bg-warning category">{a.Category_ID.Category_name}</span>
                  <div className="price">{a.Unit_price.toLocaleString("vi-VN")}đ</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End List Artwork */}
      </div>
    </div>
  );
};
export default HomePage;