import React from 'react'
import "./intermedio.css"

import Conten from './Conten'
export default function Intermedio() {
  return (
    <div className='IntermedioDiv'>
        <div className="row " style={{display:"flex",justifyContent:"center"}}>
            <div className="col"><Conten conti={"Asia"} ima={"https://randomuser.me/api/portraits/men/64.jpg"} tex={"loremipsummmmm"}/></div>
            <div className="col"><Conten conti={"Europa"} ima={"https://randomuser.me/api/portraits/women/20.jpg"} tex={"loremipsummmmm"}/></div>
            <div className=" col"><Conten conti={"America"} ima={"https://randomuser.me/api/portraits/men/41.jpg"} tex={"loremipsummmmm"}/></div>
            
        </div>
                
    </div>
  )
}
