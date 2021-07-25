import { createApp } from 'vue'
import App from './App.vue'

//获取环境变量
console.log("环境变量=>",import.meta.env)

createApp(App).mount('#app')
