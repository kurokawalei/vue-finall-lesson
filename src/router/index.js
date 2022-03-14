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
} ];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
});

export default router;