import axios from 'axios'
const aaa = process.env
console.log(aaa)

const http = axios.create({
    headers: {
        'content-type': 'application/json;charset=UTF-8',
        'token': 'one'
    },
    baseURL: `${process.env.VUE_APP_PROTOCOL}://${process.env.VUE_APP_URL}`,
    timeout: 10000,
    // withCredentials: true
})

// 添加请求拦截器
http.interceptors.request.use(config => {
    // 在发送请求之前做某事，比如说 设置token
    config.headers['token'] = 'token';
    return config;
}, error => {
    // 请求错误时做些事
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(response => {
    // 对响应数据做些事
    if (response.status === 200) {
        console.log(response)
        if (response.data && response.data.data.code === 1) {
            console.log('成功')
            response.data.data.value = '我是返回成功' // 在请求成功后可以对返回的数据进行处理，再返回到前台
        } else {
            console.log('返回到登录...')
        }
    }
    return response;
}, error => {
    return Promise.reject(error.response.data); // 返回接口返回的错误信息
})

export default http;