import React from 'react'
import "./carhori.css"

export default function Cardhori(props) {
    return (
        <div className="card hori" style={{height:"40vh",width:"45vh"}}>
            <img src={props.url} className="card-img-top" alt="..." style={{height:"100%"}}/>
        </div>

    )
}
