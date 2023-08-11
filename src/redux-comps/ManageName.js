import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ButtonPanel from './ButtonPanel'

const ManageName = () => {

      const firstName  =useSelector( (state) => state.names.firstName )
      const lastName  =useSelector( (state) =>state.names.lastName )
     const rating  =useSelector( (state) =>state.reviews.rating )

          const dispatch = useDispatch()


    const changeFirstName = ()=> {
        dispatch({
            type: 'CHANGE_FIRST_NAME',
            payload: "Ramesh"
        })
    }
    const changeLastName = ()=> {
        dispatch({
            type: 'CHANGE_LAST_NAME',
            payload: "Kumar"
        })
    }

    const changeRating = (event)=> {
        dispatch({
            type: 'CHANGE_RATING',
            payload: event.target.value
        })
    }
  return (
    <div>
        {firstName}{lastName}
        {rating}
        {/* <ButtonPanel changeFirstName={changeFirstName} changeLastName ={changeLastName}></ButtonPanel> */}
      
        <button onClick={changeFirstName}>FirstName</button>
        <button onClick={changeLastName}>LastName</button>
        
        <label>Rating</label>
        <input type="number" onChange={changeRating} max="1" min="5" step="1"/>



          </div>
  )
}

export default ManageName