import axios from "axios";

export default {
    viewAll: (query) => {
        return axios.get(`https://randomuser.me/api/?results=${query}`)
    }
}