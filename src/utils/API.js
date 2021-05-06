import axios from "axios";

 

 const API = {getEmployee: () => {
     return axios.get("https://randomuser.me/api/?results=75")
 }};
     
 
export default API