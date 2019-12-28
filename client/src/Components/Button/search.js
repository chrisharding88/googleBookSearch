import React from "react";
import './style.css';

function SearchBtn (props){
    return(
        <button className="Btn-Btn Primary" {...props} role="button">Search</button>
    )
}

export default SearchBtn;