import {
  createRouter,
  createWebHashHistory
} from "vue-router";


const routes = [{
    path: "/",
    name: "首頁",
    component: () =>
      import("../views/Home.vue"),
  },
  {
    path: "/products",
    name: "產品列表頁",
    component: () =>
      import("../views/Products.vue"),
  },
  {
    path: "/product/:id",
    name: "產品內頁",
    component: () =>
      import("../views/Product.vue"),
  },
  {
    path: "/cart",
    name: "購物車",
    component: () =>
      import("../views/cart.vue"),
  },
  {
    path: "/checkout",
    name: "訂購資訊",
    component: () =>
      import("../views/checkout.vue"),
  },
  {
    path: "/pay/:id",
    name: "付款頁面",
    component: () =>
      import("../views/payView.vue"),
  },
  {
    path: "/article",
    name: "文章列表頁面",
    component: () =>
      import("../views/article.vue"),
  },
  {
    path: "/article/:id",
    name: "文章內頁",
    component: () =>
      import("../views/articleInside.vue"),
  },
  {
    path: '/login',
    component: () => import('../views/loginView.vue')
  }, 
  {
    path: '/admin',
    component: () => import( /* webpackChunkName: "about" */ '../views/DashboredView.vue'),
    children: [
      {
        path: 'products',
        component: () => import( /* webpackChunkName: "about" */ '../views/AdminProducts.vue')
      },
      {
        path: 'articles',
        component: () => import( /* webpackChunkName: "about" */ '../views/Adminarticle.vue')
      }
      
    ]
  }




];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
});

export default router;