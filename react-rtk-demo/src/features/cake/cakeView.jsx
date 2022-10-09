import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
  const numberOfCakes = useSelector(state => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  return (
    <div className='cake-section'>
      <h2>Cake Section</h2>
      <div>Available Cakes: {numberOfCakes}</div>
      <div className='flex-row-12 space-evenly'>
        <button onClick={() => {dispatch(ordered())}} className='btn-primary btn-cake-order'>Order Cake</button>
        <button onClick={() => {dispatch(restocked(2))}} className='btn-primary btn-cake-restock'>Restock Cake</button>
      </div>
    </div>
  )
}
