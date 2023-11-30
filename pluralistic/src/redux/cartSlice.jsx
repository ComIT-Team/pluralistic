import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    products:[],
    userInfo:null,
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state, action)=> {
            const item = state.products.find((item)=> item.id === action.payload.id)
            if(item){
                item.quantity += action.payload.quantity;
            }else(

                state.products.push(action.payload)
            )
        },
        deleteItem:(state, action)=>{
            state.products = state.products.filter((item) => item.id!== action.payload)
        },
        resetCart:(state)=>{
            state.products=[]
        }, 
        incrementQuantity:(state, action)=>{
            const item = state.products.find((item)=>item.id === action.payload)
            item.quantity++
        },
        decrementQuantity:(state, action)=>{
            const item = state.products.find((item)=>item.id === action.payload)
            if(item.quantity === 1){
                item.quantity = 1
            }else{

                item.quantity--
            }
        }
    }
})

export const{addToCart,deleteItem,resetCart, incrementQuantity, decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer;