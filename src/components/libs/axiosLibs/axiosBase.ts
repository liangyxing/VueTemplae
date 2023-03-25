import axios from "axios"
axios.defaults.baseURL="https://localhost:44363"

const request=axios.create({
    // baseURL:"",timeout:60000
})

export default request