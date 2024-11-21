import React from "react";
import './sidebar.css';
import { Link } from "react-router-dom";


import logo from '../Assets/Data/Logo.png'
import userAvatar from '../Assets/Data/user.png'

const Sidebar = () => {
    return (
        <div class="sidebar">
    <div class="my-logo">
        <img src={logo} alt="Artistry Logo"/>
    </div>

    <ul class="menu mt-4">
        <li><Link to="/home-page"><i class="fas fa-home"></i>&nbsp;  Trang chủ</Link></li>
        <li><Link to="/artworks"><i class="fas fa-heart"></i> &nbsp; Tác phẩm</Link></li>
        <li><Link to="/forum-page"><i class="fas fa-users"></i> &nbsp;  Diễn đàn</Link></li>
        <li><a href="#"><i class="fas fa-comments"></i> &nbsp; Trò chuyện</a></li>
        <li><Link to="/about-page"><i class="fas fa-book"></i> &nbsp; Về Artistry</Link></li>
        <li><a href="#"><i class="fas fa-cog"></i> &nbsp; Cài đặt</a></li>
    </ul>

    <div class="user-info mt-5">
        <img src={userAvatar} alt="User Avatar"/>
        <p>Tên khách hàng</p>
        <span>Khách hàng</span>
    </div>
</div>


    )
}

export default Sidebar


