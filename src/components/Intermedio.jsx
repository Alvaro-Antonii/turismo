import React from 'react'
import "./intermedio.css"
import Boton from './Boton'
export default function Intermedio() {
  return (
    <div className='IntermedioDiv'>
        <div className="row">
            <div className="col-4"><Boton cont={"Asia"}/></div>
            <div className="col-4"><Boton cont={"Europa"}/></div>
            <div className="col-4"><Boton cont={"América"}/></div>
        </div>
                
    </div>
  )
}
