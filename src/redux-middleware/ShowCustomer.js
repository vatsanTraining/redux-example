import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCustomers,deleteCustomer } from './CustomerSlice'

const ShowCustomer = () => {
  const [id, setId] = useState();

    const dispatch = useDispatch()
    const {customers,isLoading,hasError} = useSelector(state =>state.customer)
  
    useEffect(() => {
        dispatch(getCustomers())
    },[dispatch])
  
    
    return (
    <div>
        <h1>ShowCustomers</h1>
        {isLoading ? <div>Loading...</div> : 
          ( customers.map((ele,idx)=>{
            return <div> 
                    <p key={++idx}>{ele.customerName}</p>
                     <button key={++idx}>Edit</button>
                     <button key={++idx} onClick={() => dispatch(deleteCustomer(ele.id))}>Delete</button>

                    </div>
                  })
            
         )}
        
         
    </div>
  )
}

export default ShowCustomer