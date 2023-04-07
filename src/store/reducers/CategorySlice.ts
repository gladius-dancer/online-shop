import { createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CategoryState {
    name: string,
    id: number,
    children_category: [
        {
            name: string,
            id: number
        }
    ],
    parent_category: {
        name: string,
        id: number
    }
}

type CategoryType = {
    categories: CategoryState[];
}

const initialState: CategoryType = {
    categories: []
}

export const categoriesSlice= createSlice({
    name: "categories",
    initialState,
    reducers:{
        setCategories(state, action: PayloadAction<CategoryType>){
            state.categories = action.payload
        }
    }
})

export default categoriesSlice.reducer;