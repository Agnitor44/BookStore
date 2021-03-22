import React, {useEffect, useState, useLayoutEffect} from 'react'
import logo from '../images/logo.png'
import {Provider, useSelector, } from 'react-redux'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
   
  } from "react-router-dom";


  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

export default function Navi({input, handleSub, all}) {
    const [price, setPrice] = useState(null)
  
        const cart = useSelector(state => state.cart)
  
  
 
    const full =  all.cart.map(cart => cart.data.saleInfo.retailPrice.amount * cart.many).reduce((a, b) => a + b, 0)
  
    
    return (
        <nav>
        <NavLink to = '/'><img src= {logo} alt=""/></NavLink>
            <form onSubmit = {handleSub} action="submit">
                <input ref = {input}/>
                <button><i class="fas fa-search"></i></button>
            </form>
           
                <div className = 'cartInfo'>
                <NavLink className = 'cartNav' to = '/cart'>
              
                {cart ?   <h4>{`${full.toFixed(2)}zł`}</h4> : <h4>0</h4>  }
                <i class="fas fa-shopping-cart"></i>
                </NavLink>
                </div>
                
           
            
        </nav>
    )
}
