import React, {useEffect, useState} from 'react'
import {
    NavLink,
   useParams
  } from "react-router-dom";
  import Modal from './Modal'
import List from './List'
import '../styles/spiner.css'

function remove_duplicates_es6(arr) {
    let s = new Set(arr);
    let it = s.values();
    return Array.from(it);
}

export default function Search() {
    const lu = useParams()
    const [homeList, setHomeList] = useState(null)
    const [go, setGo] = useState(false)
    const [modal, setModal] = useState(null)
    const [error, setError] = useState(false)
   const [buy, setBuy] = useState(false)
   
    useEffect(async() => {
       
        setGo(false)
     
       await fetch(`https://www.googleapis.com/books/v1/volumes?q=${lu.code}&orderBy=newest`).then(data => data.json()).then(res => {
       
        setHomeList(res)
         } )
        
         setGo(true)
       
        
    }, [lu])
   
  
    return (
        go ? <>
        <h1 style = {{textAlign: 'center', fontSize: '22px'}} className = 'searchFor'>{`searched for "${lu.code}"`}</h1>
        <div className = 'container'>


            {  homeList.totalItems ? homeList.items.map(item => <List setModal = {setModal} item = {item}/>) :   <h1>Błąd 404</h1> }
        </div>
            
        {modal && 
          <Modal modal = {modal} setModal = {setModal}/>
        }
        </>
         :
        <>
        {modal ? 
        <>
        <Modal  modal = {modal} setModal = {setModal}/>
       <div className = 'pop'><h1>Produkt został dodany</h1><NavLink to = '/cart'>Koszyk</NavLink></div>
        </>
        
        : 
        <>
    
        <div className = 'allSpn'><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
        </>
        }
       
          
        
        </>
    )
}
