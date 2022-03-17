<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row align-items-center mt-5">
      <div class="col-md-7">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-muted">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/products" class="text-muted"
                >產品列表</router-link
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ product.title }}
            </li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end">
          <del>NT${{ product.origin_price }}元</del>
        </p>
        <p class="h4 fw-bold text-end">NT${{ product.price }}元</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon1"
                  @click="removeNum"
                >
                  <i class="bi bi-dash"></i>
                </button>
              </div>
              <input
                type="text"
                min="0"
                class="
                  form-control
                  border-0
                  text-center
                  my-auto
                  shadow-none
                  bg-light
                "
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                v-model.number="qty"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon2"
                  @click="addNum"
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <a
              href="./checkout.html"
              class="text-nowrap btn btn-dark w-100 py-2"
              @click.prevent="addToCat"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      {{ product.content }}
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

//宣告toast
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
});

export default {
  data() {
    return {
      product: {},
      id: "",
      qty: 1,
      isLoading: false,
    };
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      // console.log( this.$route );
      const { id } = this.$route.params;
      console.log(id);

      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/product/${id}`
        )
        .then((res) => {
          this.product = res.data.product;
          console.log(this.product);
          this.isLoading = false;
        })
        .catch((er) => {
          console.log(er);
        });
    },
    addNum() {
      this.qty += 1;
    },
    removeNum() {
      if (this.qty < 1) {
        return;
      } else {
        this.qty -= 1;
      }
    },
    addToCat() {
      this.isLoading = true;

      const { id } = this.$route.params;
      const data = {
        product_id: id,
        qty: this.qty,
      };

      this.$http
        .post(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        )
        .then((res) => {
          this.isLoading = false;

          Toast.fire({
            icon: "success",
            showClass: {
              popup: "animate__animated animate__fadeIn",
            },
            title: res.data.message,
          });
        })
        .catch((er) => {
          console.dir(er);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
