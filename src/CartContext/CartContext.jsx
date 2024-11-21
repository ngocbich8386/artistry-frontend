import React, { createContext, useState, useContext, useEffect } from 'react';

// Tạo context Cart
const CartContext = createContext();

// Tạo provider để cung cấp dữ liệu giỏ hàng cho toàn bộ ứng dụng
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Giỏ hàng hiện tại
  const [cartCount, setCartCount] = useState(0); // Số lượng sản phẩm trong giỏ hàng

  // Effect để cập nhật cartCount và lưu giỏ hàng vào localStorage
  useEffect(() => {
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalQuantity);

    // Lưu giỏ hàng vào localStorage khi cartItems thay đổi
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Thêm sản phẩm vào giỏ hàng
  const addItemToCart = (item) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      cartItem => cartItem._id === item._id && cartItem.selectedSize === item.selectedSize
    );
  
    if (existingItemIndex !== -1) {
      // Nếu sản phẩm đã có trong giỏ hàng, chỉ cần cập nhật số lượng và tính lại giá trị
      updatedCartItems[existingItemIndex].quantity = item.quantity; // Cập nhật lại số lượng mới
      updatedCartItems[existingItemIndex].totalPrice = updatedCartItems[existingItemIndex].Unit_price * item.quantity; // Tính lại totalPrice
    } else {
      // Nếu sản phẩm chưa có, thêm mới vào giỏ hàng
      item.totalPrice = item.Unit_price * item.quantity; // Tính toán totalPrice ngay khi thêm vào giỏ hàng
      item.isSelected = false; // Đánh dấu sản phẩm chưa được chọn thanh toán
      updatedCartItems.push(item);
    }
  
    setCartItems(updatedCartItems);
  };  

  // Xóa sản phẩm khỏi giỏ hàng
  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item._id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Xóa các sản phẩm đã thanh toán khỏi giỏ hàng
  const removeSelectedItemsFromCart = (selectedItems) => {
    setCartItems((prevCart) =>
      prevCart.filter(
        (item) => !selectedItems.some((selected) => selected.id === item.id)
      )
    );
  };

 // Lấy giỏ hàng từ localStorage khi component load lần đầu
 useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  if (storedCart && Array.isArray(storedCart)) {
    setCartItems(storedCart);
  } else {
    setCartItems([]); // Khởi tạo giỏ hàng trống nếu không có dữ liệu trong localStorage
  }
}, []);

// Lấy các sản phẩm đã được chọn để thanh toán
const getSelectedItems = () => {
  return cartItems.filter(item => item.isSelected);
};

// Đánh dấu sản phẩm là đã chọn để thanh toán
const toggleItemSelection = (itemId) => {
  const updatedCartItems = cartItems.map(item =>
    item._id === itemId ? { ...item, isSelected: !item.isSelected } : item
  );
  setCartItems(updatedCartItems);
};

return (
  <CartContext.Provider value={{
    cartItems, 
    cartCount, 
    addItemToCart, 
    removeItemFromCart,
    removeSelectedItemsFromCart,
    getSelectedItems,
    toggleItemSelection,
  }}>
    {children}
  </CartContext.Provider>
);
};

// Custom hook để dễ dàng sử dụng CartContext
export const useCart = () => useContext(CartContext);
