# 全栈开发后台系统 Vue3+ElementPlus+Koa2 

使用koa2框架+MongoDB数据库+Vue3+ElementPlus，开发通用管理后台，审批流，鉴权

## 技术栈

· Vite2.0    丨   · Koa2    丨   · Vue3全家桶    丨 · log4js     丨    · axios封装     丨    · JWT   
· nodeJS    丨   · MongoDB    丨 · Mongoose     丨    · cors     


## 

### `API(接口)设计 & model模型`
* restful API风格 [点击访问](http://jdwebapp.thinkshe.com/api/)
* Model 数据模型 [点击访问](http://jdwebapp.thinkshe.com/api/model)

### `线上访问地址:`
* [点击访问](http://jdwebapp.thinkshe.com/)

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:8081](http://localhost:8081) to view it in the browser.

### `package-lock.json锁定开发依赖`

### `.env.dev 设置自定义环境变量`
获取环境变量

console.log("环境变量=>",import.meta.env)

package.json修改"scripts" ,修改成开发环境

 "dev": "vite --mode dev",