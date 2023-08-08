import * as axios from './axios'

export default {
    // 获取用户信息
    getUser: (data) => {
        return axios.get(`/system/getUser`, data)
    },
}