import React from "react";
import './card-list.styles.css'

const CardList = (props) => {
    return(
        <div className="card-list">
            <h1>Hello there! I am {props.name}</h1>
            {
                props.children
            }
        </div>
    )
}

export default CardList