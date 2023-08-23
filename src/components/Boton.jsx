import React from 'react'
import "./boton.css"
function Boton({cont}) {
  return (
    <>
        <button type="button" class="btn btn-warning">{cont}</button>
    </>
  )
}

export default Boton