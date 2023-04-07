import {AppDispatch} from "../store";
import axios from "axios";
import {authSlice} from "./AuthSlice";

export const login = (data)=> async (dispatch: AppDispatch) => {
    try {
        dispatch(authSlice.actions.login())
        const response = await axios.post(
            "https://ecommerce.icedev.uz/token",
            {
                username: data.username,
                password: data.password
            },
            {
                headers:{
                    'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            })
            localStorage.setItem("token", JSON.stringify(response.data));
            dispatch(authSlice.actions.loginSuccess(true))
    } catch (e: any) {
        dispatch(authSlice.actions.loginError(e.message))
    }
}

