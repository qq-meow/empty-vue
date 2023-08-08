import * as axios from './axios'

export default {
    // 获取首页信息
    getHome: (data) => {
        return axios.get(`/home/getHome`, data)
    },
}