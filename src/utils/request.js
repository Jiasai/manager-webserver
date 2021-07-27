/**
 * axios二次封装
 */
import axios from "axios";
import config from "../config/index";
import {ElMessage} from "element-plus";
import router from "../router/index";
import { def } from "@vue/shared";


//提示信息
const TOKEN_INVALID = "Token认证失败，请重新登录"
const NETWORK_ERROR = "网络请求异常，请稍后重试"

//创建axios实例对象，添加全局配置
const service = axios.create({
    baseURL:config.mockApi,
    timeout:8000,

})

//请求拦截 (发送请求前)
service.interceptors.request.use((req)=>{
    //待做:Token
    const headers = req.headers;
    if(!headers.Authorization) headers.Authorization="Bear Jack";
    return req;
})

//响应拦截(接收响应后,对返回值处理，返回报错处理，状态码处理等)
service.interceptors.response.use((res)=>{
    const {code,data,msg} = res.data; //根据数据结构解构值
    if(code === 0){
        return data;
    }else if(code === 40001){ //40001代表约定的登录失效过期
        ElMessage.error(TOKEN_INVALID)//提示
        setTimeout(()=>{
            router.push('/login')
        },2000)
        return Promise.reject(TOKEN_INVALID) //抛到控制台异常
    }else{
        ElMessage.error(msg||NETWORK_ERROR)
        return Promise.reject(msg||NETWORK_ERROR)
    }
})

//封装请求
/**
 * 请求核心函数
 * @param {Object} options 请求配置
 */
function request(options){
    options.method = options.method || "get";
    if(options.method.toLowerCase() === 'get'){
        options.params = options.data
    }

    if(config.env === "prod"){
        service.defaults.baseURL=config.baseApi
    }else{
        service.defaults.baseURL = config.mock?config.mockApi:config.baseApi
    }

    return service(options)
}

//添加get/post/patch等方法 async和await同步
['get','post','put','delete','patch'].forEach(item=>{
    request[item]=async(url,data,options)=>{
        return await request({
            url,
            data,
            method:item,
            ...options
        })
    }
})

//使用示例
/*
this.$request.get(
    '/login',
    {username:'jack'},{withCredentials:true}
).then(data=>{
    console.log(data)
})
*/

export default request;

