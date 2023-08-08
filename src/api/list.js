
import * as axios from './axios'

export default {
    // 获取列表信息
    getList: (data) => {
        return axios.get(`/list/getList`, data)
    },
}