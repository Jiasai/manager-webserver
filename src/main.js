import { createApp } from 'vue'
import App from './App.vue'
import router from "./router" //导入router
import request from './utils/request';

//导入ElementPlus(全局导入)
import ElementPlus from "element-plus";
import 'element-plus/lib/theme-chalk/index.css';



const app = createApp(App);

//app全局挂载变量request：使用时可以this.$request.get等调用
app.config.globalProperties.$request = request;

app.use(router).use(ElementPlus).mount('#app')


//获取环境变量
//console.log("环境变量=>",import.meta.env)
// package.json修改script ,修改成开发环境
//   "dev": "vite --mode dev",