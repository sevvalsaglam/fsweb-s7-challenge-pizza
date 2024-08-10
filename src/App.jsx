import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Header from './componenets/Header'
import PizzaAdi from './componenets/PizzaAdi'
import PizzaOzellikleri from './componenets/PizzaOzellikleri'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <PizzaAdi></PizzaAdi>
    <PizzaOzellikleri></PizzaOzellikleri>
    </>
  )
}

export default App
