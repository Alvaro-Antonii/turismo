import React from 'react'
import "./formulario.css"

export default function Formulario() {
  return (
    <div className='container' id='formulario'>
        <h2>Contacto</h2>
        <form class="row g-3">
            <div class="col-md-5">
                <label for="inputNombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="inputNombre"/>
            </div>
            <div class="col-md-5">
                <label for="inputApellido" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="inputApellido"/>
            </div>
            <div class="col-md-10">
                <label for="inputEmail" class="form-label">Correo</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="correo@gmail.com"/>
            </div>
            <div class="col-md-5">
                <label for="inputAddress2" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Calle"/>
            </div>
            <div class="col-md-2">
                <label for="inputLoca" class="form-label">Localidad</label>
                <input type="text" class="form-control" id="inputLoca"/>
            </div>
           
            <div class="col-md-3">
                <label for="inputProv" class="form-label">Provincia</label>
                <select id="inputProv" class="form-select">
                <option selected>Seleccionar</option>
                <option>Buenos Aires</option>
                <option>Ciudad Autónoma</option>
                <option>Catamarca</option>
                <option>Chaco</option>
                <option>Chubut</option>
                <option>....</option>
                </select>
            </div>
            
            <div class="col-10">
                <label for="exampleFormControlTextarea1">Consulta</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-10">
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
        </form>


    </div>
  )
}
