import { configureStore } from '@reduxjs/toolkit'
import Product from '../features/product'
const store = configureStore({
    reducer: {
        Product
    }
})
export default store