import React from 'react'
import { Navigate } from 'react-router-dom'
import { UseStateContext} from '../context/user-context'
import '../styles/Cart.css';

export const Cart = () => {
  const {token}=UseStateContext()
  const checkLogin=()=>{
    if(!token){
       return <Navigate to="/login"/>
    }
  }

  return (
    <div className="cart">
      <div>
        <h1>Items In Your Cart</h1>
          <button type='button' onSubmit={checkLogin}>
            Check out
          </button> 
      </div>
      </div>
  )
}
