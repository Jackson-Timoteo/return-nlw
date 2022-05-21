 import axios from "axios";

 export const api = axios.create({
     baseURL:'http://localhost:3333',
 })


 //import.meta.env.VITE_API_URL