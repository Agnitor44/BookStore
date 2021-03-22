import React from 'react'

export default function Modal({modal, setModal}) {


    return (
        <>
        
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
        
              
        </div>
                </div>
        </div>
    </div>
    </>
    )
}
