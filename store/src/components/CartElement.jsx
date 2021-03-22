import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import {cartSub, cartMore} from '../actions/CartAction'
import ModalRead from './ModalRead'
export default function CartElement({cart}) {
    const dispatch = useDispatch()
    const [follow, setFollow] = useState(cart.many)
    const [modal, setModal] = useState(false)
    return (
        <>
        <div className="cartElement">
            <div className="imgColumn">
            {cart.data.volumeInfo.imageLinks && <img src= {cart.data.volumeInfo.imageLinks.thumbnail} alt="img"/> }
            </div>
            <div onClick = { () => setModal(true)} className="column">
            <h2 className = 'krzyz'>{cart.data.volumeInfo.title}</h2>
            </div>
            <div className="columnMini">
             
                <h2>{follow}</h2>
                <div className="more">
                    <button onClick = {() => {
                    dispatch(cartMore({what: 'add', data: cart}))
                    setFollow(follow + 1)
                    } }>
                        <i class="fas fa-sort-up"></i>
                    </button>
                     <button onClick = {() => {
                    dispatch(cartMore({what: 'sub', data: cart}))
                    if(follow >= 2)  setFollow(follow - 1)
                    return
                    } }>
                        <i class="fas fa-sort-down"></i>
                    </button>
                </div>
                

            </div>
            <div className="column">
            <h2>{`${(cart.data.saleInfo.retailPrice.amount * cart.many).toFixed(2)}zł`}</h2>
            </div>
          
           <button onClick = {() => dispatch(cartSub(cart))} className="del"><i class="fas fa-trash-alt"></i></button>
          
        </div>
        {
            modal && <ModalRead modal = {cart.data} setModal = {setModal}/>
        }
        
        </>
    )
}
