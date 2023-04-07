import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice";
import navReducer from "./reducers/NavSlice";

console.log(authReducer)

const rootReducer = combineReducers({
    authReducer,
    navReducer
})

export const setupStore = ()=>{
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
