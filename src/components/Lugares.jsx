import React from 'react'
import { Card } from './Card'
import "./lugares.css"
export default function Lugares() {
  return (
    <div className='container' id='lug'>
        <h2>ASIA</h2>
        <div className="row">
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/asia-landi.jpg?raw=true"} lug={"Japón"}/></div>
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/asia-chi.jpg?raw=true"} lug={"China"}/></div>
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/asia-tai.jpg?raw=true"} lug={"Tailandia"}/></div>
        </div>
        <h2>EUROPA</h2>
        <div className="row">
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/eu-hol.jpg?raw=true"} lug={"Holanda"}/></div>
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/eu-ing.jpg?raw=true"} lug={"Inglaterra"}/></div>
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/eu-it.jpeg?raw=true"} lug={"Italia"}/></div>
        </div>
        <h2>AMÉRICA</h2>
        <div className="row">
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/am-ar.jpg?raw=true"} lug={"Argentina"}/></div>
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/am-ch.jpg?raw=true"} lug={"Chile"}/></div>
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/am-pe.jpg?raw=true"} lug={"Perú"}/></div>
        </div>

    </div>
  )
}
