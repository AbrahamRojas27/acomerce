import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchApi from "../api/fetchApi";

const initialState = {
    products: [],
    addedToCart: [],
}

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, {dispatch}) =>{
        //loader
        const productsRes = await fetchApi('https://fakestoreapi.com/products')
        dispatch(setProducts(productsRes))
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        setProducts: (state, action) =>{
            state.products = action.payload
        },

        addProductToCart: (state, action) =>{
            const filteredProduct = state.products.filter(product => product.id === action.payload)
            state.addedToCart = [].push(filteredProduct)
        },
    }
})

export const { addProductToCart, setProducts } = productSlice.actions
export default productSlice.reducer