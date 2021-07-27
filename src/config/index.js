/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || "prod";
const EnvConfig={
    dev:{
        baseApi:"/",
        mockApi:"https://www.fastmock.site/mock/01f18e0f92fc21b1fe4b424c6bc3fe53/api"
    },
    test:{
        baseApi:"//test.futurefe.com/api",
        mockApi:"https://www.fastmock.site/mock/01f18e0f92fc21b1fe4b424c6bc3fe53/api"       
    },
    prod:{
        baseApi:"//futurefe.com/api",
        mockApi:""        
    }
}
export default {
    env,
    mock:true,
    ...EnvConfig[env]
}