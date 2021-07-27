import { createRouter, createWebHashHistory } from "vue-router";

import Login from "../components/Login.vue";

const routes = [ //配置路由规则
  {
    name: "home",
    path: "/",
    meta: {
      title: "首页",
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../components/Home.vue"),
    redirect: "/welcome",
    children: [
      {
        name: "welcome",
        path: "/welcome",
        meta: {
          title: "欢迎页",
        },
        component: () =>
          import(/* webpackChunkName: "welcome" */ "../components/Welcome.vue"),
      },
      {
        name: "login",
        path: "/login",
        meta: {
          title: "登录",
        },
        component: Login,
      },
    ],
  },
];

const router = createRouter({  //创建路由
  history: createWebHashHistory(),
  routes,
});

export default router;  //导出
