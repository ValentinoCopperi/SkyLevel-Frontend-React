import axios from "axios"
export default async function registerUser(datos) {


    try {
        const res = await axios.post('https://api-4-ai9l.onrender.com/api/auth/register', datos);
        if (res.status !== 200) {
            return { error: true, message: res.data.msg };
        }
        return { error: false, message: res.data.msg };
    } catch (err) {
        if (err.response) {
            return { error: true, message: err.response.data.msg };
        } else {
            return { error: true, message: 'An unknown error occurred' };
        }
    }


}
