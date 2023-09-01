import React from 'react'
import "./card.css"
export const Card = (props) => {
  return (
    <div className="card " style={{}}>
        <img src={props.url} className="card-img-top" alt="..."/>
        
        <div className="card-body">
        <p className="card-text">{props.lug}</p>
        </div>
    </div>
  )
}

 