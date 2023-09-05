import React from 'react'
import "./boton.css"
function Boton({cont}) {
  
  return (
    <>
        <button  type="button" class="btn btn-warning"><a href="#${cont}"></a>{cont}</button>
    </>
  )
}

export default Boton