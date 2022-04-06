import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://curiocity-bf93e.firebaseio.com/'
    
    //baseURL: 'https://curiosdata-73c25.firebaseio.com'
})

export default instance;