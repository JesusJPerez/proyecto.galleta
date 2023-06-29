import './App.css'
import phrases from './data/phrases.json'
import { useState } from 'react'
import Phrase from './components/Phrase'
import Contact from './components/Contact'

function App() {

  const [datorando, setDatorando ] = useState(0)

  const[fondorandon, setFondorandon] = useState(0)

  const fondos=["/public/fondos/fondo1.jpg","/public/fondos/fondo1.png", "/public/fondos/fondo2.jpg", "/public/fondos/fondo2.png", "/public/fondos/fondo3.jpg", "/public/fondos/fondo3.png", "/public/fondos/fondo4.jpg", "/public/fondos/fondo4.png"]

  
  document.body.style = `background-image: url(${fondos[fondorandon]})`

  const botonclick = () =>{
    setDatorando(Math.floor(Math.random() * ((phrases.length - 1) - 0 + 1)) + 0)
    setFondorandon(Math.floor(Math.random() * ((fondos.length - 1) - 0 + 1)) + 0)
  }
  

  return (
    <>
    <Phrase data={phrases[datorando]} ></Phrase>
    <button className='boton' onClick={botonclick}>Prueba tu suerte</button>
    
    <Contact data={phrases[datorando]}></Contact>
    
    </>
  )
}

export default App
