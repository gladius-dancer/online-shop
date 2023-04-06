import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReduser from "./reducers/AuthSlice";
import navReduser from "./reducers/NavSlice";

console.log(authReduser)

const rootReducer = combineReducers({
    authReduser,
    navReduser
})

export const setupStore = ()=>{
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
