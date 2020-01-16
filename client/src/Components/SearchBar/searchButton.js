import React from 'react'
import './styles.css'

export function SearchBtn (props) {
    return(
        <button onClick={props.onClick} className="btn btn-primary">{props.buttonTitle}</button>
    )
}

