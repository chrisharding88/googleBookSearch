import React from "react";
import './style.css';

function DeleteBtn (props){
    return(
        <button className="Btn-Btn Danger" {...props} role="button">Delete</button>
    )
}

export default DeleteBtn;