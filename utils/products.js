import axios from "axios";
export default async function getAllProducts(){
    return axios.get('http://localhost:3000/productos')
    .then(res => res)
    .then(data => {
        const res = data.data
        if (res.error == true) return { error: true, message : res.message }
        return { products : res.data , error: false  , message : res.message}
    })
    .catch(err => res.json({error:true,message:res.message}))
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