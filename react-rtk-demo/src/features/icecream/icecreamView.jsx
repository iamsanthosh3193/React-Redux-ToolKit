import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
  const numberOfIceCreams = useSelector(state => state.icecream.numberOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div className='icecream-section'>
      <h2>Icecream Section</h2>
      <div>Available IceCreams: {numberOfIceCreams}</div>
      <div className='flex-row-12 sm-flex-col-12 space-evenly'>
        <button onClick={() => {dispatch(ordered())}} className='btn-primary btn-icecream-order'>Order Icecream</button>
        <button onClick={() => {dispatch(restocked(2))}} className='btn-primary btn-icecream-restock'>Restock Icecream</button>
      </div>
    </div>
  )
}
