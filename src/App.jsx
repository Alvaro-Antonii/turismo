

import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import { Centro } from './components/Centro'
import Lugares from './components/Lugares'

function App() {
  

  return (
    <div className='contenedor'>
      <>
      <Header/>
      <Carousel/>
      <Centro/>
      <Lugares/>
      </>

    </div>
    
  )
}

export default App
