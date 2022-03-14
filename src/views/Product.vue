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
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item">
             
              <router-link to="/" class="text-muted">首頁</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/products" class="text-muted">產品列表</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ product.title}}</li>
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
                >
                  <i class="bi bi-dash"></i>
                </button>
              </div>
              <input
                type="text"
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
                value="1"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon2"
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
  <div class="bg-light py-4">
    <div class="container">
      <div
        class="
          d-flex
          flex-column flex-md-row
          justify-content-between
          align-items-md-center align-items-start
        "
      >
        <p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p>
        <div class="input-group w-md-50 mt-md-0 mt-3">
          <input type="text" class="form-control rounded-0" placeholder="" />
          <div class="input-group-append">
            <button class="btn btn-dark rounded-0" type="button" id="search">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-dark py-5">
    <div class="container">
      <div
        class="
          d-flex
          align-items-center
          justify-content-between
          text-white
          mb-md-7 mb-4
        "
      >
        <a class="text-white h4" href="./index.html">LOGO</a>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="fab fa-facebook"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"
              ><i class="fab fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a>
          </li>
        </ul>
      </div>
      <div
        class="
          d-flex
          flex-column flex-md-row
          justify-content-between
          align-items-md-end align-items-start
          text-white
        "
      >
        <div class="mb-md-0 mb-1">
          <p class="mb-0">02-3456-7890</p>
          <p class="mb-0">service@mail.com</p>
        </div>
        <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      product: {},
      isLoading:false
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
  },
  mounted() {
    this.getProduct();
  },
};
</script>
