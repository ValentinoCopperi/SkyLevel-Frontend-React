import axios from "axios";
export default async function getAllProducts(){
    return axios.get('https://api-4-ai9l.onrender.com/api/products', {
        withCredentials: true, // Asegura que las cookies se envíen con la solicitud
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res)
    .then(response => {
        
        const products = response.data.data;

        if (response.status !== 200) return { error: true, message : response.error  }
        return { products  , error : false}
    })
    .catch(err => res.json({error:true,message:err}))
}

// export default async function getCategories(){
//     return axios.get('http://localhost:3000/categorias')
//     .then(res => res.json())
//     .then(data => {
//         if (res.data.error == true) return { error: true, message : res.data.message }
//         return { products : data.data , error: false  , message : res.data.message}
//     })
//     .catch(err => res.json({error:true,message:res.data.message}))
// }

// export default async function getMarcas(){
//     return axios.get('http://localhost:3000/marcas')
//     .then(res => res.json())
//     .then(data => {
//         if (res.data.error == true) return { error: true, message : res.data.message }
//         return { products : data.data , error: false  , message : res.data.message}
//     })
//     .catch(err => res.json({error:true,message:res.data.message}))
// }