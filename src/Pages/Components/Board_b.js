import React from "react";
import { useNavigate } from "react-router";

const Board_b = () => {
    const navigete = useNavigate();
    const toWrite = () => {
        navigete('/writeBoard');
    }
    return (
        <div className="Board">
            <button onClick={toWrite} style={{ width: 30 + '%', margin: 1 + '%' }}>게시글 작성</button>
            <div className="Board-content">
                <div className="Board-article">
                    <div style={{ width: 50 + 'vw', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <h4 style={{ margin: 0, padding: 1 + '%' }}>세 번째 타이틀</h4>
                        <p style={{ margin: 0, padding: 1 + '%' }}> dasdsajdksajdsalkdjasldjsaldjsaldsajdlsajdlskajdsakdjasldjsalkdjsalkdjsadsakl </p>
                    </div>
                    <img />
                </div>
            </div>
        </div >
    )
}

export default Board_b;