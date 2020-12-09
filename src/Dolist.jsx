import React from 'react';
import "./Dolist.css";

function Dolist(props) {
    return (
        <div className="list-div">
        <button className="deleteButton" onClick={()=>{props.select(props.id)}}>Delete</button>
        <li className="list-items">{props.item}</li>
        </div>
    )
}

export default Dolist
