import React from "react";
import Nav from "./Components/Navigation";
import Category from "./Components/Category";
import Board from "./Components/Board";
import Board_a from "./Components/Board_a";
import Board_b from "./Components/Board_b";
import Board_c from "./Components/Board_c";
import Footer from "./Components/Footer";
import Article from "./Article";
import { Routes, Route } from "react-router-dom";
import WriteBoard from "./WriteBoard";

const Main = () => {
    return (
        <div className="Main">
            <Article />
            <div style={{ width: 70 + 'vw' }}>
                <Nav />
                <Category />
                <Routes>
                    <Route path='/' element={<Board />} />
                    <Route path='/a' element={<Board_a />} />
                    <Route path='/b' element={<Board_b />} />
                    <Route path='/c' element={<Board_c />} />
                    <Route path='/writeBoard' element={<WriteBoard />} />
                </Routes>
                <Footer />
            </div>
            <Article />
        </div>
    )
}

export default Main;