import {AppDispatch} from "../store";
import axios from "axios";


const login = async () => {
    try {
        const response = await axios.post(
            "https://ecommerce.icedev.uz/token",
            {
                username: "polat",
                password: "12345678"
            },
            {
                headers:{
                    'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            })
        await console.log(response);
    } catch (e) {

    }
}

login()
