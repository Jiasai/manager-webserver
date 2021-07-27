import { createApp } from 'vue'
import App from './App.vue'
import router from "./router" //导入router

const app = createApp(App);
app.use(router).mount('#app')


//获取环境变量
//console.log("环境变量=>",import.meta.env)
// package.json修改script ,修改成开发环境
//   "dev": "vite --mode dev",