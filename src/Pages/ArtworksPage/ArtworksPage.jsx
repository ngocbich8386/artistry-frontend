import React, { useEffect, useState } from 'react';
import Hashtag from '../../Components/Hashtag/Hashtag';
import Header from '../../Components/Header/header';
import Sidebar from '../../Components/Sidebar/sidebar';
import './ArtworksPage.css';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ArtworksPage = ({ artworks }) => {
  const [selectedHashtag, setSelectedHashtag] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const location = useLocation(); // Lấy thông tin URL hiện tại

  useEffect(() => {
    // Lấy từ khóa từ query parameters
    const params = new URLSearchParams(location.search);
    const keyword = params.get('search') || ''; // Nếu không có thì để chuỗi rỗng
    setSearchKeyword(keyword); 
  }, [location.search]);

  const filteredArtworks = artworks.filter((a) => {
    const matchesHashtag = selectedHashtag
      ? a.Artwork_tag.includes(selectedHashtag)
      : true;

    const matchesSearch = searchKeyword
      ? a.Artwork_name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        a.Artwork_tag.some((tag) =>
          tag.toLowerCase().includes(searchKeyword.toLowerCase())
        ) ||
        a.Creator_ID.Name.toLowerCase().includes(searchKeyword.toLowerCase())
      : true;

    return matchesHashtag && matchesSearch;
  });

  return (
    <div className="my_container">
      <Sidebar />

      <div className="content">
        <Header onSearch={(keyword) => setSearchKeyword(keyword)} />

        <div className="list-artwork">
          <Hashtag onFilter={(hashtag) => setSelectedHashtag(hashtag)} />

          <div style={{ color: '#a25c48', fontWeight: 'bold' }}>
            Kết quả hiển thị
          </div>

          <div className="container_0">
            {filteredArtworks.map((a) => (
              <div
                className="card"
                key={a._id}
                style={{ width: '240px', height: '320px' }}
              >
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
                  <div className="card-title truncated-text">
                    {a.Artwork_name}
                  </div>
                  <div>@{a.Creator_ID.Name}</div>
                </div>
                <div className="container_1">
                  <span className="badge bg-warning category">
                    {a.Category_ID.Category_name}
                  </span>
                  <div className="price">
                    {a.Unit_price.toLocaleString("vi-VN")} đ
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworksPage;
