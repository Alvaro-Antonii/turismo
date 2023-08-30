import React from 'react'
import { Card } from './Card'
export default function Lugares() {
  return (
    <div className='container'>
        <h2>ASIA</h2>
        <div className="row">
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/asia-landi.jpg?raw=true"}/></div>
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/asia-chi.jpg?raw=true"}/></div>
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/asia-tai.jpg?raw=true"}/></div>
        </div>
        <h2>EUROPA</h2>
        <div className="row">
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/eu-hol.jpg?raw=true"}/></div>
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/eu-ing.jpg?raw=true"}/></div>
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/eu-it.jpeg?raw=true"}/></div>
        </div>
        <h2>AMÉRICA</h2>
        <div className="row">
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/am-ar.jpg?raw=true"}/></div>
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/am-ch.jpg?raw=true"}/></div>
            <div className="col"><Card url={"https://github.com/Alvaro-Antonii/img/blob/main/am-pe.jpg?raw=true"}/></div>
        </div>

    </div>
  )
}
