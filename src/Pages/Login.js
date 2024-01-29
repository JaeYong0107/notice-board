import React from "react";
import naver from "./Icons/네이버.png";
import kakao from "./Icons/카카오.png";
import KakaoLogin from "./Components/KakaoLogin";
import NaverLogin from "./Components/NaverLogin";

const Login = () => {

    return (
        <div className="Login">
            <h2>로그인 페이지</h2>
            <div className="input-box">
                <input type="text" placeholder="ID를 입력하시오." />
                <input type="text" placeholder="PassWord를 입력하시오." />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: 50 + '%', gap: 5 + 'px' }}>
                <button>로그인</button>
                <button>회원가입</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: 30 + 'px' }}>
                <img className="Naver" src={naver} style={{ width: 100 + 'px', height: 100 + 'px', cursor: 'pointer' }} onClick={NaverLogin} />
                <img className="KaKao" src={kakao} style={{ width: 100 + 'px', height: 100 + 'px', cursor: 'pointer' }} onClick={KakaoLogin} />
            </div >
        </div >
    )
}

export default Login;