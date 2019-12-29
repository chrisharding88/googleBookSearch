import React from "react";
import './styles.css';

export function SearchBtn (props){
    return(
        <button className="Btn-Btn Primary" {...props} role="button">Search</button>
    )
}

export function DeleteBtn (props){
    return(
        <button className="Btn-Btn Danger" {...props} role="button">Delete</button>
    )
}

