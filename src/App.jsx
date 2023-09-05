

import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import { Centro } from './components/Centro'
import Lugares from './components/Lugares'
import Formulario from './components/Formulario'
import Footer from './components/Footer'
import Intermedio from './components/Intermedio'
function App() {
  

  return (
    <div className='contenedor'>
      <>
      <Header/>
      <Intermedio/>
      <Carousel/>
      <Centro/>
      <Lugares/>
      <Formulario/>
      <Footer/>
      </>

    </div>
    
  )
}

export default App
