import { createSlice} from "@reduxjs/toolkit";

interface DateState {
    day: number[];
    month: string[];
    year: number[];
}

const initialState: DateState = {
    day: [1],
    month: ["Январрь"],
    year: [1990,2012]
}

export const authSlice= createSlice({
    name: "date",
    initialState,
    reducers:{

    }
})

export default authSlice.reducer;