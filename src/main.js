import { createApp } from 'vue'
import App from './App.vue'
import router from "./router" //导入router
import request from './utils/request';
import storage from './utils/storage';

//导入ElementPlus(全局导入)
import ElementPlus from "element-plus";
import 'element-plus/lib/theme-chalk/index.css';

//导入基本的样式
import "./assets/style/index.css"

const app = createApp(App);

//app全局挂载变量request：使用时可以this.$request.get等调用,$storage同样道理
app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;

app.use(router).use(ElementPlus).mount('#app')


