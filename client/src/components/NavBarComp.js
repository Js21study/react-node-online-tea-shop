
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Context } from '..'

const NavBarComp = ({id, price, multFunk})  => {

    const {tea} = useContext(Context)
    let [num, setNum] = useState(1)

    const changeMinus = (id) => {

        setNum(num-1)
        
        
        if(num < 2) {
        tea.setOrders(tea.orders.filter(el => el.id !== id))

    }}
    
    
    const changePlus = () => {
        
        setNum(num+1)
        
        
        
        }
        
 
 

        

  
 

    

            
        
       
    
    
  return (
    <div>
        
            <button  className='btn btn-info' onClick={()=>{
                changeMinus(id)
       
                }}>-</button>
        <span className='mx-2'> {num} шт</span>
       
       {multFunk(num, price)} грн
        
            <button  className='btn btn-warning' onClick={() => {
                changePlus()
    
            }}>+</button>
    </div>
    )
    }

export default NavBarComp