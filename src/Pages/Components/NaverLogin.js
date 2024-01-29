const NaverLogin = () => {
    const NAVER_CLIENT_ID = 'udlT3OHiZTIe1yQ3Mfp_';
    const REDIRECT_URI = 'http://localhost:3000';
    const STATE = 'false';
    const NAVER_AUTH_URL = `https://nid.naver.com/ouath2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;


    return window.location.href = NAVER_AUTH_URL;
}

// const { naver } = window;

// // 네이버 로그인 기능 및 버튼 구현
// const NaverLogin = new naver.LoginWithNaverId({
//     clientId: "rJOz4VuQkXYfVh49P3aO",
//     callbackUrl: "http://localhost:3000",
//     isPopup: true,
//     loginButton: {
//         color: "green",
//         type: 3,
//         height: 50,
//     },
// });

export default NaverLogin;
