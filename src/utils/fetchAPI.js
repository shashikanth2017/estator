
import axios from "axios";
// headers: {
//     'X-RapidAPI-Key': '4786212398msh92f50d7aa534e7bp10cc45jsn648d61950bcf',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
export const baseUrl="https://bayut.p.rapidapi.com"
export const fetchApi=async(url)=>{
    const {data}= await axios.get((url),{headers: {
            'X-RapidAPI-Key': '4786212398msh92f50d7aa534e7bp10cc45jsn648d61950bcf',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }})
          return data;
}
