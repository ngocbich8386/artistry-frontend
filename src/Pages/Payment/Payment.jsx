import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Lấy dữ liệu từ Cart
import { useCart } from "../../CartContext/CartContext"; // Import CartContext
import Header from "../../Components/Header/header";
import Sidebar from "../../Components/Sidebar/sidebar";
import { useNavigate } from 'react-router-dom';
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const { removeSelectedItemsFromCart } = useCart(); // Hàm xóa sản phẩm đã chọn từ giỏ hàng
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [shipping, setShipping] = useState("standard");
  const [payment, setPayment] = useState("cod");

  // Lấy dữ liệu từ Cart (sản phẩm đã chọn)
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || []; // Đảm bảo selectedItems là một mảng

  // Kiểm tra nếu không có sản phẩm nào thì hiển thị thông báo
  if (selectedItems.length === 0) {
    return <div>Không có sản phẩm nào được chọn để thanh toán!</div>;
  }

  // Nhóm các sản phẩm theo Creator_ID.Name
  const groupedItems = selectedItems.reduce((acc, item) => {
    const creatorName = item.Creator_ID?.Name || "Unknown Artist";
    if (!acc[creatorName]) {
      acc[creatorName] = [];
    }
    acc[creatorName].push(item);
    return acc;
  }, {});

  // Hàm tính tổng tiền bao gồm phí vận chuyển
  const calculateTotal = () => {
    const shippingFee = shipping === "express" ? 20000 : 0;
    return selectedItems.reduce((total, item) => total + item.totalPrice, 0) + shippingFee;
  };

  // Xử lý thay đổi thông tin khách hàng
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  // Xử lý khi nhấn nút đặt hàng
  const handleOrder = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Vui lòng nhập đầy đủ thông tin khách hàng!");
      return;
    }

    const orderData = {
      customer,
      products: selectedItems,
      shippingMethod: shipping,
      paymentMethod: payment,
      total: calculateTotal(),
    };

    console.log("Đơn hàng:", orderData);

    alert("Đặt hàng thành công!");

    // Xóa các sản phẩm đã thanh toán khỏi giỏ hàng
    removeSelectedItemsFromCart(selectedItems); // Truyền selectedItems vào hàm này

    navigate('/cart');
  };

  return (
    <div className="checkout">
      {/* Header và Sidebar */}
      <Sidebar />
      <div className="payment-content-container">
        <Header />

        {/* Thông tin khách hàng */}
        <div className="customer-info">
          <h3>Thông tin khách hàng:</h3>
          {["name", "phone", "address"].map((field) => (
            <div className="form-group" key={field}>

              <label htmlFor={field}>
                {field === "name" ? "Tên:" : field === "phone" ? "Số điện thoại:" : "Địa chỉ:"}
              </label>

              <input
                id={field}
                type="text"
                name={field}
                value={customer[field]}
                onChange={handleInputChange}
                placeholder={field === "name" ? "Tên khách hàng" : field === "phone" ? "Số điện thoại" : "Địa chỉ"}
              />
            </div>
          ))}
        </div>

        {/* Chi tiết tác phẩm */}
        <div className="product-details">
          <h3>Chi tiết tác phẩm:</h3>

          {/* Nhóm các sản phẩm theo tác giả */}
          {Object.keys(groupedItems).map((creatorName) => (
            <div className="product-group" key={creatorName}>
              <h4>@{creatorName}</h4>
              {/* Lặp qua các sản phẩm của tác giả */}
              {groupedItems[creatorName].map((product, index) => (
                <div className="product-box" key={index}>
                  <div className="product-image">
                    <p className="artist">&#64;{product.Creator_ID?.Name || "Unknown Artist"}</p>
                    <img src={product.Artwork_image} alt={product.Artwork_name} />
                  </div>
                  <div className="payment-product-info">
                    <p><strong>Tên tác phẩm:</strong> {product.Artwork_name}</p>
                    <p><strong>Kích thước:</strong> {product.selectedSize || "N/A"}</p>
                    <p><strong>Số lượng:</strong> {product.quantity}</p>
                    <p><strong>Yêu cầu:</strong> {product.requirement || "Không có yêu cầu"}</p>
                    <p><strong>Thành tiền:</strong> {product.totalPrice.toLocaleString()}đ</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Phương thức vận chuyển */}
        <div className="payment-shipping-method">
          <h3>Phương thức vận chuyển:</h3>
          {[{ value: "standard", label: "Vận chuyển tiêu chuẩn" }, { value: "express", label: "Vận chuyển hỏa tốc (+20.000đ)" }].map((option) => (
            <label key={option.value}>
              <input
                type="radio"
                name="shipping"
                value={option.value}
                checked={shipping === option.value}
                onChange={() => setShipping(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>

        {/* Phương thức thanh toán */}
        <div className="my-payment-method">
          <h3>Phương thức thanh toán:</h3>
          {[{ value: "cod", label: "Thanh toán khi nhận hàng (COD)" }, { value: "momo", label: "Thanh toán bằng Ví điện tử Momo" }, { value: "bank", label: "Thanh toán qua Ngân hàng" }].map((option) => (
            <label key={option.value}>
              <input
                type="radio"
                name="payment"
                value={option.value}
                checked={payment === option.value}
                onChange={() => setPayment(option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>

        {/* Tổng tiền và đặt hàng */}
        <div className="summary">
          <p>
            <strong>Tổng tiền hàng ({selectedItems.length} tác phẩm):</strong> {calculateTotal().toLocaleString()}đ
          </p>
          <button className="order-btn" onClick={handleOrder}>ĐẶT HÀNG</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
