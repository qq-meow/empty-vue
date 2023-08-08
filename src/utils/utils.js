export default {
    /**
     * 获取sessionStorage数据
     * @param {*} key 
     * @returns 
     */
    getStorage(key) {
        return sessionStorage.getItem(key)
    },
    /**
     * 设置sessionStorage数据
     * @param {*} key 
     * @param {*} val 
     */
    setStorage(key, val) {
        sessionStorage.setItem(key, typeof val === 'object' ? JSON.stringify(val) : val)
    },
    /**
     * 获取localStorage数据
     * @param {*} key 
     * @returns 
     */
    getLocal(key) {
        return localStorage.getItem(key)
    },
    /**
     * 设置localStorage数据
     * @param {*} key 
     * @param {*} val 
     */
    setLocal(key, val) {
        localStorage.setItem(key, typeof val === 'object' ? JSON.stringify(val) : val)
    },
    /**
     * 获取前day天的时间，根据fmt返回日期格式
     * @param {*} day 
     * @param {*} fmt 
     */
    fitstDays(day, date, fmt) {
        let curTimestamp = date ? + new Date(date) : + new Date()
        let preTimestamp = curTimestamp - day * 24 * 60 * 60 * 1000
        let result = this.getDate(preTimestamp, fmt)
        return result
    },
    /**
     * 获取前hour小时的时间，根据fmt返回日期格式
     * @param {*} hour 
     * @param {*} fmt 
     */
    fitstHours(hour, date, fmt) {
        let curTimestamp = date ? + new Date(date) : + new Date()
        let preTimestamp = curTimestamp - hour * 60 * 60 * 1000
        let result = this.getDate(preTimestamp, fmt)
        return result
    },
    /**
     * 获取当前日期或者获取时间戳日期，根据fmt返回日期格式
     * @param {*} timeStamp 
     * @param {*} fmt 
     * @returns 
     */
    getDate(timeStamp, fmt = 'YYYY-MM-DD hh:mm:ss') {
        if (!timeStamp) return ''
        let date = timeStamp ? new Date(timeStamp) : new Date()
        let o = {
            'M+': date.getMonth() + 1, // 月份
            'D+': date.getDate(), // 日
            'h+': date.getHours(), // 小时
            'm+': date.getMinutes(), // 分
            's+': date.getSeconds(), // 秒
        }
        if (/(Y+)/.test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                (date.getFullYear() + '').substr(4 - RegExp.$1.length)
            )
        }
        for (let k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
                )
            }
        }
        return fmt
    }
}