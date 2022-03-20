<template>
  <div id="nav" class="pt-2 pb-2 btn-primary">
    <nav
      class="navbar navbar-expand-lg navbar-dark container"
      style="background-image: none"
    >
      <router-link to="/" class="navbar-brand">黑川玩具店</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end pe-5"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link">首頁</router-link>
            <router-link to="/article" class="nav-item nav-link">文章</router-link>
          <router-link to="/products" class="nav-item nav-link"
            >產品列表</router-link
          >
          <!-- <router-link to="/cart" class="nav-item nav-link position-relative">
            <i class="bi bi-cart"></i>
            <span
              class="
                position-absolute
                top-0
                start-100
                translate-middle
                badge
                rounded-pill
                bg-danger
              "
            >
              {{ cartData.carts.length }}
            </span>
           結帳
          </router-link> -->
          <div class="dropdown">
            <button
              class="btn dropdown-toggle text-white"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              購物車
            </button>
            <span
              class="
                position-absolute
                top-0
                start-100
                translate-middle
                badge
                rounded-pill
                bg-danger
              "
            >
              {{ cartData.carts.length }}
            </span>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="min-width: 400px;">
              <li
                v-for="item in cartData.carts"
                :key="item"
                class="mb-1 ps-3 pe-3"
              >
                {{ item.product.title }}|價格：$NT{{ item.product.price }}元
              </li>
              <div class="text-center ps-3 pe-3">
                <router-link class="btn-danger btn mt-2 mb-2 w-100" to="/cart"
                  >結帳</router-link
                >
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import emitter from "@/libs/mitter.js";
export default {
  data() {
    return {
      cartData: {
        carts: [],
      },
    };
  },

  methods: {
    getCarList() {
      this.$http(
        `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      )
        .then((res) => {
          this.cartData = res.data.data;
          emitter.emit("get-cart");
        })
        .catch((er) => {
          console.log(er);
        });
    },
  },
  mounted() {
    this.getCarList();
    emitter.on("get-cart", () => {
      this.getCarList();
    });
  },
};
</script>

