import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-b4314.firebaseio.com/'
})