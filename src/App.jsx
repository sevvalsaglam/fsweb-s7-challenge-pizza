import { useState } from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import OrderPizza from './pages/OrderPizza'
import { Redirect } from 'react-router-dom'



function App() {
  return (
    <>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home"/>
      </Route>
      <Route path="/orderPizza">
        <OrderPizza></OrderPizza>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/success">
        <Success></Success>
      </Route>
    </Switch>

    </>
  )
}

export default App
