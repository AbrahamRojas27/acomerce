import axios from "axios";

function fetchApi(api){
    return axios.get(api)
            .then(res => res.data)
            .catch(err => console.log(err))
} 

export default fetchApi