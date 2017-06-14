import axios from 'axios'

const httpUtil = axios.create({
  timeout: 5000
})

export default httpUtil
