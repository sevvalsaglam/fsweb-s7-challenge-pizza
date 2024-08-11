import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Header from './components/Header'
import PizzaAdi from './components/PizzaAdi'
import PizzaOzellikleri from './components/PizzaOzellikleri'
import EkMalzemeler from './components/EkMalzemeler'
import Siparis from './components/Siparis'


const malzemeler = [{
  
}]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <PizzaAdi></PizzaAdi>
    <PizzaOzellikleri></PizzaOzellikleri>
    <EkMalzemeler></EkMalzemeler>
    <Siparis></Siparis>
    </>
  )
}

export default App
