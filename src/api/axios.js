import axios from 'axios'
// import Vue from 'vue'
import utils from '@/utils/utils'


let service = axios.create({
    // 设置基础url，开发环境使用vue.config.js 里的proxy代理，其他环境则使用正式地址。
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : process.env.VUE_APP_URL,
    // 超时时间
    timeout: 1000 * 6,
    headers: {
        'token': process.env.NODE_ENV === 'development' ? `${process.env.VUE_APP_TOKEN_TYPE} ${process.env.VUE_APP_TOKEN}` : utils.getStorage('token')
    }
})

// 添加请求拦截器 
service.interceptors.request.use(async function (config) {
    // 在发送请求之前做些什么
    config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json';
    return config
}, function (error) {
    // 对请求错误做些什么
    // Vue.prototype.$toast.show(error.message)
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    if (response.data.code === 200) {
        // 返回code = 200 为正常--- 可根据自己业务进行修改
        return response.data;
    } else if (Object.prototype.toString.call(response.data) === '[object Blob]' || Object.prototype.toString.call(response.data) === '[object ArrayBuffer]') {
        // 处理二进制流
        return response;
    } else {
        // toast提示错误
    }
    // return response.data
}, function (error) {
    // 对响应错误做点什么
    // Object.keys(error).forEach(ele => {
    //     console.log(`${ele}:`, error[ele], 'this is ssss')
    // })
    
    if (error.response && error.response.status === 401) {
        // 鉴权失败跳转到统一登录页
        const urlHref = encodeURIComponent(window.location.href);
        window.location.replace(
            `/?return_url=${urlHref}`,
        );
    }
    return Promise.reject(error)
})


export const get = (api, params = {}, headers = {}) => {
    return service({
        method: 'get',
        url: api,
        headers: headers,
        params: params
    })
}
export const post = (api, data = {}, headers = {}) => {
    return service({
        method: 'post',
        url: api,
        headers: headers,
        data: data
    })
}

export const sendRequest = (method, api, data = {}, headers = {}) => {
    return service({
        method: method,
        url: api,
        headers: headers,
        data: data
    })
}