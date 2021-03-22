import React from 'react'
import '../styles/home.css'

export default function List({item, setModal}) {
    return (
        <div class="card">
        <div class="vis">
            <div className="titleWrap">
            <h1>{item.volumeInfo.title}</h1>
            </div>
            
           {item.volumeInfo.imageLinks?  <img src= {item.volumeInfo.imageLinks.thumbnail} alt="img"/> : <div className = 'empty'><h2>Brak okładki</h2></div> }
            <div class="buy">
            {item.saleInfo.retailPrice ? <h2>{`${item.saleInfo.retailPrice.amount.toFixed(2)}zł`}</h2> : <h2>Not for sale</h2>}
                <button onClick = {() => setModal(item) }><i class="fas fa-info"></i></button>
            </div>
        </div>
        </div> 
    )
}
