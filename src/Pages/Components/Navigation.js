import React from "react";
import { useNavigate } from "react-router-dom";
import 로고 from "../Icons/게시판 로고.png";
import 돋보기 from "../Icons/돋보기.png"

const Nav = () => {

    const navigate = useNavigate();
    const toLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <nav className="Nav" style={{ height: 70 + 'px' }}>
                <img className="logo" src={로고} />
                <h1>게시판</h1>
                <input className="search-bar" type="text" />
                <img className="search-btn" src={돋보기} />
                <h3 onClick={toLogin} style={{ cursor: 'pointer' }}>로그인</h3>
            </nav>
        </div>
    )
}

export default Nav;