import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const addCustomer =createAsyncThunk("customer/addCustomer",async(entity)=>{

     const response =
     await axios.post("http://localhost:5000/customers",entity)
     return response.data;
})

export const deleteCustomer = createAsyncThunk("customer/deleteCustomer",async(id)=>{
    const response= axios.delete(`http://localhost:5000/customers/${id}`)
  
    return response.data;}
)
 export const getCustomers =
              createAsyncThunk("customer/getCustomers",async()=>{
                const response =await axios.get("http://localhost:5000/customers")
                return response.data;

              })

const sliceOptions ={
    name: 'customer',
    initialState: {
        customers: [],isLoading:false,hasError:null
    },
    reducer:{},
    extraReducers:(builder) =>{
        builder.addCase(getCustomers.fulfilled, (state, action) => {
            state.customers = action.payload;
            state.isLoading=false
        });
        builder.addCase(getCustomers.rejected, (state, action) => {
            state.hasError = action.error.message;
            state.isLoading=false
        });
        builder.addCase(getCustomers.pending, (state, action) => {
            state.isLoading=true
        });

        builder.addCase(addCustomer.fulfilled, (state, action) => {
            state.customers.push(action.payload);
            state.isLoading=false
        });
        builder.addCase(addCustomer.rejected, (state, action) => {
            state.hasError = action.error.message;
            state.isLoading=false
        });
        builder.addCase(addCustomer.pending, (state, action) => {
            state.isLoading=true
        });

        builder.addCase(deleteCustomer.fulfilled, (state, action) => {
            
            state.customers = state.customers.filter(x=>x.id!==action.payload.id);
            state.isLoading=false
        });
        builder.addCase(deleteCustomer.rejected, (state, action) => {
            state.hasError = action.error.message;
            state.isLoading=false
        });
        builder.addCase(deleteCustomer.pending, (state, action) => {
            state.isLoading=true
        });
    }

}

const customerSlice = createSlice(sliceOptions);

export default customerSlice.reducer;

