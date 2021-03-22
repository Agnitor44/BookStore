import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import {cartAdd} from '../actions/CartAction'
export default function Modal({modal, setModal}) {
const dispatch = useDispatch()
const log = useSelector(state => state.cart)
const [many, setMany] = useState(1)
const [pop, setPop] = useState(false)


const subAdd = (what) => {
   
    if(what === 'add') {
        setMany(many + 1)
    }
   else {
      
        setMany(many - 1)
      
    }
  
}
 const popUp = () => {
   
    setPop(true)
    setTimeout(() => {
        setPop(false)
        
    }, 3000)
 }
const handleBuy = () => {

if(pop) return
const obj = {
  
   id: Math.random(),
   many: many,
   data: modal,
   

}
dispatch(cartAdd(obj))
popUp()

}



    return (
        <>
         {pop&& <div className = 'pop'><h1>Produkt został dodany</h1><NavLink to ='/cart'>Koszyk</NavLink></div>}
        <div class="modal">
          
        <div class="infoBox">
            <button onClick = {() => setModal(null)} className = 'back'><i class="fas fa-backward"></i></button>
           <div className = 'titleWrapPlus'><h1 className = 'title'>{modal.volumeInfo.title}</h1></div> 
                <div class="rowInfo">
        <div class="basic">
         
        {modal.volumeInfo.imageLinks?  <img src= {modal.volumeInfo.imageLinks.thumbnail} alt="img"/> : <div className = 'emptyPlus'><h2>Brak okładki</h2></div> }
            <div className = 'authorWrap'>
            {modal.volumeInfo.authors.map(item => <h3>{item}</h3>)[0]}
            </div>
            
        </div>
        <div class="adv">
            <article>
                <p>
                  {modal.volumeInfo.description}
                </p>
            </article>
                <span>{modal.volumeInfo.publishedDate}</span>
                <div class="buyZone">
                    {
                        modal.saleInfo.retailPrice &&
                        <div class="buttons">
                        <button class="add"onClick = {() => handleBuy()} >{many != 1 ? <div className = 'wrapperInButton'><h1>{many}</h1><i class="fas fa-cart-plus"></i> </div>: <i class="fas fa-cart-plus"></i>}</button>
                        <div class="ile">
                            <button  onClick = {() => subAdd('add')}><i class="fas fa-sort-up"></i></button>
                            <button disabled = {many === 1} onClick = {() => subAdd('sub')}><i class="fas fa-sort-down"></i></button>
                        </div>
                    </div>
                    }
                   
                   
                    {modal.saleInfo.retailPrice ? <h1>{`${modal.saleInfo.retailPrice.amount.toFixed(2)}zł`}</h1> : null}
                </div>
              
        </div>
                </div>
        </div>
    </div>
    </>
    )
}
