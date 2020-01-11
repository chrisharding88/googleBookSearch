import React from 'react'
import './styles.css'

export function searchBtn (props) {
    return(
    <button {...props} className = "btn btn-primary">{props.children}</button>
    )
}

