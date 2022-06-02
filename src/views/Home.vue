<template>
  <Loading :active="isLoading"></Loading>
  <div class="position-relative first-image">
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <div class="row justify-content-center mt-7">
        <div class="col-md-6 text-center fs-2">
          <h2>The Dreams</h2>
          <p class="text-muted mb-0">
            在這裡，年齡不是界限，快樂才是追求。<br />
            只要走進來，都可以尋找到屬於你的快樂！
          </p>

          <router-link class="fs-3 btn btn-dark rounded-0 mt-6" to="/products"
            >開始逛逛</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="text-center mt-5">
      <h2 class="h-title">最新文章</h2>
    </div>
    <div class="row mt-5">
      <div
        class="article-box col-md-4 mt-md-4"
        v-for="item in articleList"
        :key="item.id"
      >
        <div class="card border-0 mb-4">
          <router-link :to="`/article/${item.id}`">
            <img
              :src="item.imageUrl"
              class="card-img-top rounded-0"
              :alt="item.title"
            />
          </router-link>
          <div class="card-body text-center">
            <h4>{{ item.title }}</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-light mt-7 pt-5 pb-5">
    <div class="container">
      <div class="text-center">
        <h2 class="h-title">最新產品</h2>
      </div>

      <swiper
        :slides-per-view="1"
        :space-between="50"
        :modules="modules"
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints=" {
        767: {
          slidesPerView: 1,
          spaceBetween: 20
        },
         768: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        }"
        class="swiper-box"
      >
        <swiper-slide v-for="item in productsList" :key="item.id">
          <div class="row">
            <div class="col-md-8">
              <img :src="item.imageUrl" class="img-fluid" />
            </div>
            <div class="col-md-4 align-self-center text-center">
              <p class="h2 fs-3 mb-3">{{ item.title }}</p>
              <p>{{ item.content }}</p>
              <router-link
                class="btn btn-outline-primary btn-lg"
                :to="`/product/${item.id}`"
                >我要購買</router-link
              >
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- <div class="container my-7">
    <div class="row">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
      </div>
    </div>
  </div> -->
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
//import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";

export default {
  data() {
    return {
      isLoading: false,
      articleList: [],
      productsList: [],
      pageobj: {},
      modules: [Autoplay, Pagination],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    getArticle(page = 1) {
      let url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/articles?page=${page}`;

      this.$http(url)
        .then((res) => {
          this.articleList = res.data.articles;
          this.pageobj = res.data.pagination;
          this.isLoading = false;
          this.articleList.length = 3;
          console.log(this.articleList);
        })
        .catch((er) => {
          console.log(er);
        });
    },
    getProducts(page = 1, category) {
      let url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      if (category) {
        url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?page=${page}&category=${category}`;
      }
      this.$http(url)
        .then((res) => {
          this.productsList = res.data.products;
          this.productsList.length = 5;
        })
        .catch((er) => {
          console.log(er);
        });
    },
  },
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);

    this.getArticle();
    this.getProducts();
    
  },
};
</script>


