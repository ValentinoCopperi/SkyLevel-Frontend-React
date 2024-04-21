import axios from "axios"
export default async function deleteUser(id_user){
        
    return axios.delete(`http://localhost:3000/deleteUser/${id_user}`)
    .then(res => {
       if(res.data.Error == true){
       return {error : true}
       }
       return {error:false}
        
    }).catch(err => {
        return {error : true}

    })
}

