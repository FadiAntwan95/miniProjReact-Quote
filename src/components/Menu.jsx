import "./Menu.css"
import React from "react"

function Menu(props) {
    return(
        <div className="menu">
            <ul>
                <li><a href={props.link} target="_blank">{props.title}</a></li>
            </ul>
        </div>
    )
}

export default Menu