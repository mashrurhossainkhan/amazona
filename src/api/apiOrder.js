import axios from "../../node_modules/axios/index"

export const initPayment = () => {
    return axios.get(`/api/payment`,{
        header: {
            //"Authorization": `Bearer ${token}`
        }
    })
}

//next task: check if userInfo has token or not