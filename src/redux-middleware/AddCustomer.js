import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addCustomer } from './CustomerSlice'
import { Formik,Form,Field } from 'formik'
import React from 'react'
import ShowCustomer from './ShowCustomer'

const AddCustomer = () => {

    const dispatch = useDispatch()
    const customers = useSelector(state=>state.customer)
    console.log(customers)
    const handleSubmit=(values)=>{
              console.log(values)
              dispatch(addCustomer(values))
    }
  return (
    <div>
        <div>
            <Formik initialValues=
                {{id:'',customerName:'',email:'',dateOfBirth:''}}

                   onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label>Customer Id</label>
                        <Field type="text" name="id"/>
                    </div>
                    <div>
                        <label>Customer Name</label>
                        <Field type="text" name="customerName"/>
                    </div>

                    <div>
                        <label>Date of Birth</label>
                        <Field type="date" name="dateOfBirth"/>
                    </div>

                    <div>
                        <label>Email</label>
                        <Field type="email" name="email"/>
                    </div>

                     <div>
                        <button type="submit">Add</button>
                     </div>
                </Form>
            </Formik>
        </div>
        <div><ShowCustomer></ShowCustomer></div>
    </div>
  )
}

export default AddCustomer