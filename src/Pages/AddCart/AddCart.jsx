import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/header"; // Import Header
import Sidebar from "../../Components/Sidebar/sidebar";
import "./AddCart.css";
import { useCart } from "../../CartContext/CartContext"; // Sử dụng useCart thay vì CartContext
import { Link } from "react-router-dom";


const AddCart = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false); // Trạng thái modal

  const { addItemToCart } = useCart(); // Lấy hàm thêm sản phẩm vào giỏ hàng

  useEffect(() => {
  const storedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
  if (storedProduct) {
    setProduct(storedProduct);
  } else {
    alert("Không tìm thấy sản phẩm.");
  }
}, []);


  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (!activeSize) {
      alert("Vui lòng chọn kích thước sản phẩm.");
      return;
    }

    const cartItem = {
      ...product,
      quantity,
      totalPrice: product.Unit_price * quantity,
      selectedSize: activeSize,
    };

    addItemToCart(cartItem); // Thêm sản phẩm vào giỏ
    setModalOpen(true); // Mở modal thông báo
  };

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my_addcart">
      <Sidebar />
      <div className="addcart_content">
        <Header />
        <div className="detail-title">
          <Link to={`/product-detail/${product._id}`}>
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
          <h3>Thêm sản phẩm vào giỏ hàng</h3>
        </div>
        <div className="container my-4 mx-4">
          <div className="row">
            <div className="col-md-5 text-center my-img">
              <img
                src={product.Artwork_image}
                alt={product.Artwork_name}
                className="img-fluid border rounded"
              />
              <p className="author">&#64;{product.Creator_ID.Name}</p>
            </div>
            <div className="col-md-7">
              <h5 className="product-title">{product.Artwork_name}</h5>
              <span className="badge bg-warning text-dark mb-3 my-badge">
                Loại tác phẩm: {product.Stock > 0 ? "Có sẵn" : "Hết hàng"}
              </span>

              <div className="mb-3">
                <h6 className="text-secondary">Yêu cầu</h6>
                <textarea
                  className="form-control border border-primary rounded shadow-sm w-1"
                  rows="3"
                  placeholder="Nhập yêu cầu"
                  style={{ resize: "none", padding: "10px" }}
                ></textarea>
              </div>

              <div className="mb-3">
                <h6 className="text-secondary">Kích thước</h6>
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className={`btn btn-outline-warning ${
                      activeSize === "70x105" ? "active" : ""
                    }`}
                    onClick={() => handleSizeClick("70x105")}
                  >
                    70x105
                  </button>
                  <button
                    type="button"
                    className={`btn btn-outline-warning ${
                      activeSize === "40x60" ? "active" : ""
                    }`}
                    onClick={() => handleSizeClick("40x60")}
                  >
                    40x60
                  </button>
                  <button
                    type="button"
                    className={`btn btn-outline-warning ${
                      activeSize === "60x90" ? "active" : ""
                    }`}
                    onClick={() => handleSizeClick("60x90")}
                  >
                    60x90
                  </button>
                </div>
              </div>

              <div className="quantity-control mb-3">
                <h6 className="text-secondary mb-2">Số lượng</h6>
                <div className="quantity-group">
                  <button className="btn-quantity" onClick={decreaseQuantity}>
                    -
                  </button>
                  <input
                    type="number"
                    className="quantity-input"
                    value={quantity}
                    readOnly
                  />
                  <button className="btn-quantity" onClick={increaseQuantity}>
                    +
                  </button>
                </div>
              </div>

              <div className="mb-3">
                <h6 className="text-secondary">Tổng tiền</h6>
                <p className="my-price">
                  Giá: {(product.Unit_price * quantity).toLocaleString("vi-VN")}{" "}
                  VNĐ
                </p>
              </div>
              <div class="btn-container">
                <button
                  className="btn-add-to-cart mx-2"
                  onClick={handleAddToCart}
                >
                  <i className="fas fa-shopping-cart"></i> Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bootstrap */}
        <div
          className={`modal fade ${isModalOpen ? "show d-block" : ""}`}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Thông báo</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Sản phẩm đã được thêm vào giỏ hàng thành công!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setModalOpen(false)}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
