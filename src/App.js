import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/RegisterPage/Register';

import Artworks from './Pages/ArtworksPage/ArtworksPage';
import NotSignIn from './Pages/NotSignIn/NotSignIn';
import ExampleService from './services/example.service';
import AboutPage from './Pages/AboutPage/AboutPage';
import ProductDetail from './Pages/DetailArtwork/DetailArtwork';
import ForumPage from './Pages/ForumPage/ForumPage';
import ForumPageDetails from './Pages/ForumPageDetails/ForumPageDetails';
import HomePage from './Pages/HomePage/HomePage';
import AddCart from './Pages/AddCart/AddCart';
import { CartProvider } from './CartContext/CartContext';
import Cart from './Pages/Cart/Cart';
import ProfileCreator from './Pages/ProfileCreator/ProfileCreator';
import ProfileOther from './Pages/ProfileOther/ProfileOther';
import Login from './Pages/LoginPage/Login';
import Creatorregister from './Pages/CreatorRegisterPage/CreatorRegisterPage';
import Payment from './Pages/Payment/Payment';
import ProfileOthers from './Pages/ProfileOthers/ProfileOthers';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  // Khai báo trạng thái cho artworks, creators và error
  const [artworks, setArtworks] = useState([]);
  const [creators, setCreators] = useState([]);
  const [error, setError] = useState(null);
  const [featuredArtworks, setFeaturedArtworks] = useState([]); // 9 sản phẩm nổi bật
  const [searchKeyword, setSearchKeyword] = useState('');

   // Hàm xử lý tìm kiếm
   const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  useEffect(() => {
    // Lấy dữ liệu artworks
    ExampleService.getAllArtworks()
      .then((data) => {
        setArtworks(data);
        setFeaturedArtworks(data.slice(0, 9));
      }) // Cập nhật dữ liệu artworks vào state
      .catch(err => setError(err.message)); // Cập nhật lỗi nếu có

    // Lấy dữ liệu creators
    ExampleService.getAllCreators()
      .then(data => setCreators(data)) // Cập nhật dữ liệu creators vào state
      .catch(err => setError(err.message)); // Cập nhật lỗi nếu có
  }, []); // Chạy effect chỉ 1 lần khi component được mount

  return (
    <CartProvider>
      <div className="app-container">
      <BrowserRouter>
        <div className="content-container">
          {/* <Container>  */}
            <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>

              <Route path="/home-page" element={<HomePage artworks={featuredArtworks} />}/>
              <Route
                path='/artworks'
                element={<Artworks artworks={artworks} creators={creators} error={error} onSearch={handleSearch}/>}
              />
              <Route path="/product-detail/:id" element={<ProductDetail artworks={artworks} onSearch={handleSearch}/>} />
              <Route path="/forum-page" element={<ForumPage/>}/>
              <Route path="/forum-page-details" element={<ForumPageDetails/>}/>
              <Route path='/about-page' element={<AboutPage />} />
              <Route path='/' element={<NotSignIn />} />
              <Route path="/addtocart" element={<AddCart />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile-creator" element={<ProfileCreator />} />
              <Route path="/profile-other/:id" element={<ProfileOther creators={creators}/>} />
              <Route path="/profile-others" element={<ProfileOthers/>} />
              <Route path="/creator-register" element={<Creatorregister/>} />
              <Route path="/payment" element={<Payment/>} />
              <Route path="/*" element={<PageNotFound/>} />
              </Routes>
          {/* </Container> */}
        </div>
      </BrowserRouter>
    </div>
    </CartProvider>
  );
}

export default App;
