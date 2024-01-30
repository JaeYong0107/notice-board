import React from "react";
import { Link } from "react-router-dom";

const Category = () => {


    return (
        <div className="Category">
            <Link
                to='/'
                style={{ textDecoration: "none", color: "black", fontWeight: 'bold' }}>전체</Link> |
            <Link
                to='/a'
                style={{ textDecoration: "none", color: "black", fontWeight: 'bold' }}>a</Link> |
            <Link
                to='/b'
                style={{ textDecoration: "none", color: "black", fontWeight: 'bold' }}>b</Link> |
            <Link
                to='/c'
                style={{ textDecoration: "none", color: "black", fontWeight: 'bold' }}>c</Link>
        </div>
    )
}

export default Category;