import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import "./DetailArtwork.css";
import Sidebar from "../../Components/Sidebar/sidebar";
import Header from "../../Components/Header/header";
import { Link } from "react-router-dom";

const ProductDetail = ({ artworks }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const handleSearch = (keyword) => {
    navigate(`/artworks?search=${encodeURIComponent(keyword)}`);
  };

  useEffect(() => {
    const selectedProduct = artworks.find((artwork) => artwork._id === id);
    setProduct(selectedProduct);
  }, [id, artworks]);

  const handleAddToCart = () => {
    if (product) {
      // Lưu sản phẩm vào localStorage
      localStorage.setItem("selectedProduct", JSON.stringify(product));
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my_container">
      <Sidebar />
      <div className="product-detail">
        <Header onSearch={handleSearch} />
        <div className="detail-title">
          <Link to='/artworks' state={{ productId: product._id }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
          </Link>
          <h3>Chi tiết tác phẩm</h3>
        </div>

        <div className="product-info">

          <div className="image-section">
            <img src={product.Artwork_image} alt={product.Artwork_name} />
            <Link to={`/profile-other/${product.Creator_ID._id}`}>
                <p className="author">&#64;{product.Creator_ID.Name}</p>
            </Link>
          </div>

          <div className="content-section">

            <h1 className="product-title">{product.Artwork_name}</h1>
            <div className="tags">
              {product.Artwork_tag.map((tag, index) => (
                <span key={index} className="tag">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="description">
              <h3 className="description-title">Mô tả tác phẩm</h3>
              <p>{product.Artwork_description}</p>
              <span className="badge bg-warning text-dark mb-3 my-badge">
                Loại tác phẩm: {product.Stock > 0 ? "Có sẵn" : "Hết hàng"}
              </span>
              <p className="my-price">
                <b>Giá:</b> {product.Unit_price.toLocaleString("vi-VN")} VND
              </p>
            </div>
            <div class="btn-container">
            <Link to="/addtocart">
              <button onClick={handleAddToCart} className="btn-add-to-cart">
                <i className="fas fa-shopping-cart"></i> Mua hàng
              </button>
            </Link>
            </div>
          </div>

        </div>

        <div className="review-section">
          <h3>Đánh giá tác phẩm</h3>
          <textarea className="comment-box" placeholder="Bình luận"></textarea>
          <button className="btn btn-outline-primary">Bình luận</button>

          {product.Review.map((review, index) => (
            <div key={index} className="user-comment">
              <div className="user-avatar avataruser"><i className="fas fa-user-circle"></i></div>
              <div className="user-details">
                <p className="user-comment-content comment-content">{review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

