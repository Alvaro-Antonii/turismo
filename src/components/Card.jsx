import React from 'react'
import "./card.css"
export const Card = ({url}) => {
  return (
    <div className="card " style={{}}>
        <img src={url} className="card-img-top" alt="..."/>
        <div className="card-body">
            <p className="card-text"></p>
        </div>
    </div>
  )
}

 