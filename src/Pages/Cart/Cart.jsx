import React, { useState } from "react";
import Header from "../../Components/Header/header";
import Sidebar from "../../Components/Sidebar/sidebar";
import "./Cart.css";
import { useCart } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useCart();
  const [checkedItems, setCheckedItems] = useState({}); // Lưu trạng thái checkbox của từng sản phẩm
  const [showModal, setShowModal] = useState(false); // Trạng thái hiển thị modal

  const decreaseQuantity = (index) => {
    const item = cartItems[index];
    if (item.quantity > 1) {
      const updatedItem = {
        ...item,
        quantity: item.quantity - 1,
        totalPrice: item.Unit_price * (item.quantity - 1),
      };
      addItemToCart(updatedItem);
    }
  };

  const increaseQuantity = (index) => {
    const item = cartItems[index];
    const updatedItem = {
      ...item,
      quantity: item.quantity + 1,
      totalPrice: item.Unit_price * (item.quantity + 1),
    };
    addItemToCart(updatedItem);
  };

  const removeItem = (index) => {
    const item = cartItems[index];
    removeItemFromCart(item._id);
  };

  // Hàm xử lý khi checkbox thay đổi
  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId], // Đảo trạng thái của checkbox
    }));
  };

  // Hàm tính tổng số tiền của các sản phẩm được tick
  const calculateTotal = () => {
    const total = cartItems.reduce((sum, item) => {
      if (checkedItems[item._id]) {
        return sum + item.totalPrice;
      }
      return sum;
    }, 0);
  
    // Chuyển đổi tổng số thành chuỗi định dạng kiểu Việt Nam
    return total.toLocaleString("vi-VN");
  };
  

  // Kiểm tra xem có sản phẩm nào được tick hay không
  const hasCheckedItems = Object.values(checkedItems).some((isChecked) => isChecked);

  // Hàm xử lý nút đặt hàng
  const handleOrder = () => {
    if (!hasCheckedItems) {
      setShowModal(true); // Hiển thị modal nếu không có sản phẩm nào được chọn
    }
  };

  return (
    <div className="my_cart">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="cart-container">
          <h2 className="cart-title">Giỏ hàng</h2>

          <table className="cart-table">
            <thead>
              <tr>
                <th></th>
                <th>Tác phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th>Xóa</th>
              </tr>
            </thead>
            
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item._id}>
                  <td>
                    {/* Checkbox để chọn sản phẩm */}
                    <input
                      type="checkbox"
                      checked={!!checkedItems[item._id]} // Kiểm tra trạng thái checkbox
                      onChange={() => handleCheckboxChange(item._id)} // Cập nhật trạng thái checkbox
                    />
                  </td>

                  <td>
                    <div className="item-info">
                      <img
                        src={item.Artwork_image}
                        alt={item.Artwork_name}
                        onError={() => console.error("Error loading image")}
                      />
                      <div>
                        <h4 style={{color: '#0059B3'}}>{item.Artwork_name}</h4>
                        <p className="text-warning" >
                          <b>&#64; {item.Creator_ID?.Name || "Unknown Creator"}</b>
                        </p>
                        <p>
                          <b>Hashtag:{" "}</b>
                          {item.Artwork_tag
                            ? item.Artwork_tag.join(", ")
                            : "N/A"}
                        </p>
                        <p>
                          <b>Kích thước:{" "}</b>
                          {item.selectedSize ? item.selectedSize : "N/A"}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>{item.Unit_price.toLocaleString("vi-VN")}đ</td>
                  <td>
                    <div className="cart-quantity-controls">
                      <button onClick={() => decreaseQuantity(index)}>-</button>
                      <input
                        type="number"
                        value={item.quantity ? item.quantity : 1}
                        min="1"
                        readOnly
                  
                        onClick={() => console.log("Quantity: ", item.quantity)}
                      />
                      <button onClick={() => increaseQuantity(index)}>+</button>
                    </div>
                  </td>
                  <td>{item.totalPrice.toLocaleString("vi-VN")}đ</td>
                  <td>
                  <button
                      className="delete-btn"
                      onClick={() => {
                        if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
                          removeItem(index);
                        }
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <p>
              <strong>TỔNG SỐ TIỀN (tạm tính):</strong> {calculateTotal()}Đ
            </p>
            {hasCheckedItems ? (
              <Link to="/payment" state={{ selectedItems: cartItems.filter((item) => checkedItems[item._id]) }}>
                <button className="order-btn">ĐẶT HÀNG</button>
              </Link>
            ) : (
              <button className="order-btn" onClick={handleOrder}>
                ĐẶT HÀNG
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Thông báo</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Chọn sản phẩm để thanh toán!</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    
    </div>
    
  );
};

export default Cart;

