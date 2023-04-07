import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProductState {
    name: string,
    price: number,
    description: string,
    quantity: number,
    discount: number,
    id: number,
    images: [
        {
            product_id: number,
            image_path: string,
            id: number
        }
    ],
    category: {
        name: string,
        id: number,
        children_category: string[],
        parent_category: {
            name: string,
            id: number
        }
    },
    attributes: string[]

}

type ProductType = {
    products: ProductState[];
}

const initialState: ProductType = {
    products: []
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<ProductType>) {
            console.log(action.payload)
            state.products = action.payload
        }
    }
})

export default productsSlice.reducer;