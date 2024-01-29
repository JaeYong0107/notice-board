import React from "react";
import Nav from "./Components/Navigation";
import Category from "./Components/Category";
import Board from "./Components/Board";
import Footer from "./Components/Footer";
import Article from "./Article";

const Main = () => {
    return (
        <div className="Main">
            <Article />
            <div>
                <Nav />
                <Category />
                <Board />
                <Footer />
            </div>
            <Article />
        </div>
    )
}

export default Main;