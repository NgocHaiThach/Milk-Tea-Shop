import { configureStore, createReducer } from '@reduxjs/toolkit'
import productReducer from '../containers/ProductContainer/productSlice'
import cartReducer from '../containers/HeaderCartContainer/cartSlice'
const rootRecuder = {
    products: productReducer,
    carts: cartReducer,

}
const store = configureStore({
    reducer: rootRecuder,
})
export default store