import { createSlice } from "@reduxjs/toolkit"

const initialCarts = [
    {
        product: {
            id: 1,
            idCategory: 1,
            name: "Trà Sữa Bạc Hà",
            image: 'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Oolong-Milkfoam-3.png',
            price: '50000',
            description: "Sản phẩm nhà làm ngon như nhà làm!",
            inventory: 10,
            rating: 5,
        },
        quantity: 5,
    },
    {
        product: {
            id: 2,
            idCategory: 1,
            name: "Trà Sữa Socola",
            image: 'https://gongcha.com.vn/wp-content/uploads/2018/02/Tr%C3%A0-Oolong-Milkfoam-3.png',
            price: '45000',
            description: "Sản phẩm nhà mua ngon như nhà làm!",
            inventory: 8,
            rating: 4,
        },
        quantity: 4,
    },

]

const cart = createSlice({
    name: 'carts',
    initialState: initialCarts,
    reducers: {
        addCart: (state, action) => {
            const { product, quantity } = action.payload
            const indexAdd = findProductInCart(state, product)
            if (indexAdd !== -1) {
                state[indexAdd].quantity += quantity
            }
            else {
                state.push(action.payload)
            }
        },
        removeCart: (state, action) => {
            const removeCartId = action.payload.product.id

            state = state.filter(cart => cart.product.id !== removeCartId)
            return state

        },
    }
})

const findProductInCart = (cart, product) => {
    let index = -1
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i
                break
            }
        }
    }
    return index
}

const { reducer, actions } = cart
export const { addCart, removeCart, } = actions
export default reducer