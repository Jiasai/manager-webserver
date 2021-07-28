/**
 * Storage二次封装
 * @author Masion
 */
import config from "../config/index";

export default {
  setItem(key, val) {
    let storage = this.getStorage(); //取到Storage
    storage[key] = val; //添加新值
    window.localStorage.setItem(config.namespace, JSON.stringify(storage)); //写入
  },
  getItem(key) {
    return this.getStorage()[key];
  },
  getStorage() {
    return JSON.parse(window.localStorage.getItem(config.namespace) || "{}");
  },
  clearItem(key) {
    let storage = this.getStorage();
    delete storage[key];
    window.localStorage.setItem(config.namespace, JSON.stringify(storage)); //写入
  },
  clearAll() {
    //只清空本命名空间的
    let AllStorage = window.localStorage;
    delete AllStorage[config.namespace];
    for (let i in AllStorage) {
      window.localStorage.setItem(`${i}`, AllStorage[key]); //其他的写入
    }
  },
};

/*
使用：
1.首先全局挂载 app.config.globalProperties.$storage = storage;
2. this.$storage.setItem('name','jack')
*/
