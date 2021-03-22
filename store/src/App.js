import React, {useRef, useState, useContext, createContext} from 'react'
import './styles/app.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
 
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Home from './components/Home.jsx'
import Search from './components/Search'
import Cart from './components/Cart'
import Navi from './components/Navi'
import {createStore, subscribe} from 'redux'
import {Provider, useSelector} from 'react-redux'
import Combine from './reducers/Combine'


function App() {
  const input = useRef()
 let history = useHistory()

 const persistedState = localStorage.getItem('reduxState') 
                       ? JSON.parse(localStorage.getItem('reduxState'))
                       : []
 const store = createStore(Combine, persistedState)
 const [all, setAll] = useState(store.getState())

 store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))

  setAll(store.getState())
})


  const create = (cos) => {
    return `/search/${cos}`
  }

  const handleSub = (e) => {
    e.preventDefault()
   history.push(create(input.current.value))
   input.current.value = ''
  }

  return (
   
<Provider store = {store}>
    
   <Navi input = {input} handleSub = {handleSub} all = {all}/>
   
      <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route  path = '/cart' component = {Cart}/>
          <Route path = '/search/:code' component = {Search}/>
      </Switch>
   

    </Provider>
  
  );
}

export default App;

