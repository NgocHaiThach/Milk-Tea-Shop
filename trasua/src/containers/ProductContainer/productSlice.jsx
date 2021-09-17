import { createSlice } from "@reduxjs/toolkit"

const initialProducts = [
    {
        product:
        {
            id: 1,
            idCategory: 1,
            name: "Trà Sữa Bạc Hà",
            image: 'http://store.bobapop.com.vn/resource/uploads/2019/06/09-Tra-xanh-Xoai-600x600.jpg',
            price: '50000',
            description: "Sản phẩm nhà làm ngon như nhà làm!",
            inventory: 10,
            rating: 5,
        },
        quantity: 1


    },
    {
        product: {
            id: 2,
            idCategory: 1,
            name: "Trà Sữa Socola",
            image: 'http://store.bobapop.com.vn/resource/uploads/2019/06/09-Tra-xanh-Xoai-600x600.jpg',
            price: '45000',
            description: "Sản phẩm nhà mua ngon như nhà làm!",
            inventory: 8,
            rating: 4,
        },
        quantity: 1

    },
    {
        product: {
            id: 3,
            idCategory: 1,
            name: "Trà Sữa Truyền Thống",
            image: "http://store.bobapop.com.vn/resource/uploads/2019/06/09-Tra-xanh-Xoai-600x600.jpg",
            price: "49000",
            description: "Sản phẩm nhà làm ngon như nhà làm!",
            inventory: 9,
            rating: 3,
        },
        quantity: 1

    },


]

const product = createSlice({
    name: 'products',
    initialState: initialProducts,
    reducers: {
        addProduct: (state, action) => {
            const { product, quantity } = action
            state.push({ product, quantity })
        },
        removeProduct: (state, action) => {
            const remveProductId = action.payload
            state = state.filter(product => product.id !== remveProductId)
            return state
        },

    }
})

const { reducer, actions } = product
export const { addProduct, removeProduct, } = actions
export default reducer