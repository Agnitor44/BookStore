import React, {useEffect} from 'react'
import '../styles/cart.css'
import { useSelector } from 'react-redux'
import CartElement from './CartElement'

export default function Cart() {
    const cart = useSelector(state => state.cart)

    
    return (
     
        <div className = 'cartContainer'>
       
        {cart.map(item => <CartElement cart = {item}/>)}
       
        
        </div>
     
    )
}
