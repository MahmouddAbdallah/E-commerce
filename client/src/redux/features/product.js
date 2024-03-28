import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    review: [],
    cart: []
}
const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        cart(state, action) {
            state.cart = action.payload
        }
        ,
        addToCart(state, action) {
            state.cart.push(action.payload)
        },
        removeFromCart(state, action) {
            const cart = state.cart.find((item) => item._id == action.payload);
            state.cart = state.cart.filter((item) => item !== cart)
        }
    }
})
export const { addToCart, cart, removeFromCart } = product.actions
export default product.reducer