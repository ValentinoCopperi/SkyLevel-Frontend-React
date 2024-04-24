import axios from "axios"
export default async function registerUser(datos) {


    return axios.post('http://localhost:3000/register', datos)
        .then(res => {
            if (res.data.Error == true) return { error: true, message : res.data.Message }
            return { error: false  , message : res.data.Message}
        })
        .catch(err => {
            return { error: true , message : res.data.Message}
        })


}

