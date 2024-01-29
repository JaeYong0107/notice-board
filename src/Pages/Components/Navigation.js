import React from "react";

const Nav = () => {
    return (
        <div>
            <nav className="Nav" style={{ height: 70 + 'px' }}>
                <img className="logo" src="../Icons/게시판_로고.png" />
                <h1>게시판</h1>
                <input className="search-bar" type="text" />
                <button className="search-btn">검색</button>
                <h3 className="login">로그인</h3>
            </nav>
        </div>
    )
}

export default Nav;