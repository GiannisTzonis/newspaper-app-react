import React from "react"

export default function Card(props) {
    // let badgeText
    // if (props.item.openSpots === 0) {
    //     badgeText = "SOLD OUT"
    // } else if (props.item.location === "Online") {
    //     badgeText = "ONLINE"
    // }
    
    
    return (
        <div className="card">
            {/* {badgeText && <div className="card--badge">{badgeText}</div>} */}
            <img src={props.item.imageUrl} className="card--image" />
            <div className="card--stats">
                <h2>{props.item.title}</h2>
                <h3>{props.item.location}</h3>
                <span>({props.item.year})</span>
                {/* <span>{props.item.description}</span> */}
            </div>
            <p className="card--descipription">{props.item.description}</p>
            {/* <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p> */}
        </div>
    )
}