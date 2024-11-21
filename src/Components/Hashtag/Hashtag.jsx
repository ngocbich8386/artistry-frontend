// /components/Hashtag.js
import React from 'react';
import './Hashtag.css';

function Hashtag({ onFilter }) {
  const handleFilter = (hashtag) => {
    onFilter(hashtag);  // Gọi callback từ component cha để lọc tác phẩm
  };

  return (
    <div className="my_container hashtag_container">
      <button type="button" className="btn btn-primary" onClick={() => handleFilter('')}>
        Tất cả
      </button>
      <button type="button" className="btn btn-warning" onClick={() => handleFilter('Dễ thương')}>
        #Dễ thương
      </button>
      <button type="button" className="btn btn-warning" onClick={() => handleFilter('Hoạt hình')}>
        #Hoạt hình
      </button>
      <button type="button" className="btn btn-warning" onClick={() => handleFilter('Huyền bí')}>
        #Huyền bí
      </button>
      <button type="button" className="btn btn-warning" onClick={() => handleFilter('Trừu tượng')}>
        #Trừu tượng
      </button>
      <button type="button" className="btn btn-warning" onClick={() => handleFilter('Phong cảnh')}>
        #Phong cảnh
      </button>
      <button type="button" className="btn btn-warning" onClick={() => handleFilter('Thực vật')}>
        #Thực vật
      </button>
      <button type="button" className="btn btn-warning" onClick={() => handleFilter('Cổ đại')}>
        #Cổ đại
      </button>
      <button type="button" className="btn btn-warning" onClick={() => handleFilter('Cổ tích')}>
        #Cổ tích
      </button>
      <button type="button" className="btn btn-warning" onClick={() => handleFilter('Thần tượng')}>
        #Thần tượng
      </button>
    </div>
  );
}

export default Hashtag;
