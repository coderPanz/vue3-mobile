import { createRouter, createWebHashHistory } from "vue-router";

  const router = createRouter({
    // 基于哈希的路由实现（Hash 模式）的工厂函数, 管理App中的路由历史记录
    history: createWebHashHistory(),
    // 映射关系
    routes: [
      {
        path: "/",
        redirect: "/home"
      },
      {
        path: "/Home",
        component: () => import("../views/home/Home.vue")
      },
      {
        path: "/Collect",
        component: () => import("../views/collect/Collect.vue")
      },
      {
        path: "/Message",
        component: () => import("../views/message/Message.vue")
      },
      {
        path: "/Order",
        component: () => import("../views/order/Order.vue")
      },
      {
        path: "/HomeCity",
        component: () => import("../views/home/components/home-city.vue")
      },
      {
        path: "/home-search-start",
        component: () => import("../views/home/components/home-search-start.vue"),
        meta: {
          hideTabBar: true
        }
      },
      {
        // push的时候接收了参数, 所以这里可以使用动态路由
        path: "/home-details/:id",
        component: () => import("../views/home/components/home-details.vue"),
        meta: {
          hideTabBar: true
        }
      },
      {
        path: "/Collect-favor",
        component: () => import("../views/collect/components/collect-favor.vue")
      },
      {
        path: "/Collect-history",
        component: () => import("../views/collect/components/collect-history.vue")
      },
    ]
  })

  export default router