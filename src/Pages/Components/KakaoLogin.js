const Rest_api_key = '00263be163f8f3cd3c0f5c5cf0aecba6' //REST API KEY
const redirect_uri = 'http://localhost:3000' //Redirect URI
// oauth 요청 URL
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
const KakaoLogin = () => {
    window.location.href = kakaoURL
}

export default KakaoLogin;