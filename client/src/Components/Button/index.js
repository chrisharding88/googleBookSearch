import React from "react";
import './styles.css';

export function SaveBtn (){
    return(
        <button className="Btn-Btn Primary" role="button">Save</button>
    )
}

export function DeleteBtn (props){
    return(
        <button className="Btn-Btn Danger" role="button">X</button>
    )
}

