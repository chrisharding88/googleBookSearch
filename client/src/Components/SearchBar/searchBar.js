import React from "react";

export function SearchBar(props){
    return (
        <div className="form-group">
           <input className="form-control" name="query" onChange={(event)=>props.onChange(event)} size="45"/> 
        </div>
    )
}

