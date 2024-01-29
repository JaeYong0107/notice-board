import React from "react";
import Nav from "./Components/Navigation";
import Category from "./Components/Category";
import Board from "./Components/Board";
import PageNum from "./Components/PageNumber";

const Main = () => {
    return (
        <div>
            <Nav />
            <Category />
            <Board />
            <PageNum />
        </div>
    )
}

export default Main;