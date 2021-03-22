import React, {useEffect, useState} from 'react'
import '../styles/spiner.css'
import Modal from './Modal'
import List from './List'

const losu = () => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z']
  return arr[Math.floor(Math.random() * arr.length)]
}
export default function Home() {
    const [homeList, setHomeList] = useState(null)
    const [go, setGo] = useState(false)
    const [modal, setModal] = useState(null)
    useEffect(async() => {
       await fetch(`https://www.googleapis.com/books/v1/volumes?q=${losu()}&orderBy=newest`).then(data => data.json()).then(res => {
        setHomeList(res)
         } )
         setGo(true)
    }, [])


    return (
        
      
     go ? <><div className = 'container'>
           
        {homeList.items.map(item => <List setModal = {setModal} item = {item}/>)}

        </div>
        {modal && 
          <Modal modal = {modal} setModal = {setModal}/>
        }
        </> : <div className = 'allSpn'><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    
    )
}
