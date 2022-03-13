<template>
  <div
    class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 400px"
  >
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
        background-position: center center;
        opacity: 0.1;
      "
    ></div>
    <h2 class="fw-bold">Lorem ipsum.</h2>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-4">
        <div
          class="
            accordion
            border border-bottom border-top-0 border-start-0 border-end-0
            mb-3
          "
          id="accordionExample"
        >
          <div class="card border-0">
            <div
              class="
                card-header
                px-0
                py-4
                bg-white
                border border-bottom-0 border-top border-start-0 border-end-0
                rounded-0
              "
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">Lorem ipsum</h4>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card border-0">
            <div
              class="
                card-header
                px-0
                py-4
                bg-white
                border border-bottom-0 border-top border-start-0 border-end-0
                rounded-0
              "
              id="headingTwo"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">Lorem ipsum</h4>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card border-0">
            <div
              class="
                card-header
                px-0
                py-4
                bg-white
                border border-bottom-0 border-top border-start-0 border-end-0
                rounded-0
              "
              id="headingThree"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">Lorem ipsum</h4>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6" v-for="item in productsList" :key="item.id">
            <div class="card border-0 mb-4 position-relative position-relative">
                <router-link :to="`/product/${item.id}`">
             
                <img
                  :src="item.imageUrl"
                  class="card-img-top rounded-0"
                  :alt="item.title"
                />
             </router-link>
              <a href="#" class="text-dark">
                <i
                  class="far fa-heart position-absolute"
                  style="right: 16px; top: 16px"
                ></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  {{ item.title }}
                </h4>
                <p class="card-text mb-0">
                  NT${{ item.origin_price }}
                  <span class="text-muted ms-2"
                    ><del>NT${{ item.price }}</del></span
                  >
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
       <pageinfo :pages="pageobj" @getpage="getProducts" ></pageinfo>
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
import pageinfo from "@/components/pageinfo.vue";
export default {
  data() {
    return {
      productsList: [],
      pageobj:{}
    };
  },   
  components:{
    pageinfo
  },
  methods: {
    getProducts( page = 1 ) {
      this.$http(
        `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?page=${page}`
      )
        .then((res) => {
          this.productsList = res.data.products;
          this.pageobj= res.data.pagination;
         
          console.log(this.pageobj);
        })
        .catch((er) => {
          console.log(er);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>