<template>
  <Loading :active="isLoading"></Loading>
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
        background-image: url(https://1.bp.blogspot.com/-U28DM8cXUdY/YA90PmpW_GI/AAAAAAAAEJg/1N99BGUFJuoE9N8oAWdX1Hf5p4mmgtmhACPcBGAYYCw/s1600/IMG_3348.jpg);
        background-position: center center;
        opacity: 0.25;
        background-repeat: no-repeat;
        background-size: cover;
      "
    ></div>
    <h2 class="fw-bold">產品列表</h2>
  </div>

  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-4">
        <CAccordion>
          <CAccordionItem :item-key="1">
            <CAccordionHeader @click="getProducts(1, '絨毛玩具')"
              >絨毛玩具</CAccordionHeader
            >
            <CAccordionBody>
              <ul class="list-unstyled">
                <li v-for="(item, i) in productsList" :key="i">
                  <router-link
                    class="py-2 d-block text-muted"
                    :to="`/product/${item.id}`"
                  >
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem :item-key="2">
            <CAccordionHeader @click="getProducts(1, '模型')"
              >模型</CAccordionHeader
            >
            <CAccordionBody>
              <ul class="list-unstyled">
                <li v-for="(item, i) in productsList" :key="i">
                  <router-link
                    class="py-2 d-block text-muted"
                    :to="`/product/${item.id}`"
                  >
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem :item-key="3">
            <CAccordionHeader @click="getProducts(1, '益智')"
              >益智</CAccordionHeader
            >
            <CAccordionBody>
              <ul class="list-unstyled">
                <li v-for="(item, i) in productsList" :key="i">
                  <router-link
                    class="py-2 d-block text-muted"
                    :to="`/product/${item.id}`"
                  >
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem :item-key="4">
            <CAccordionHeader @click="getProducts(1, '抱枕')"
              >抱枕</CAccordionHeader
            >
            <CAccordionBody>
              <ul class="list-unstyled">
                <li v-for="(item, i) in productsList" :key="i">
                  <router-link
                    class="py-2 d-block text-muted"
                    :to="`/product/${item.id}`"
                  >
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem :item-key="5">
            <CAccordionHeader @click="getProducts(1, '擺飾')"
              >擺飾</CAccordionHeader
            >
            <CAccordionBody>
              <ul class="list-unstyled">
                <li v-for="(item, i) in productsList" :key="i">
                  <router-link
                    class="py-2 d-block text-muted"
                    :to="`/product/${item.id}`"
                  >
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem :item-key="6">
            <CAccordionHeader @click="getProducts(1, '電子玩具')"
              >電子玩具</CAccordionHeader
            >
            <CAccordionBody>
              <ul class="list-unstyled">
                <li v-for="(item, i) in productsList" :key="i">
                  <router-link
                    class="py-2 d-block text-muted"
                    :to="`/product/${item.id}`"
                  >
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem :item-key="7">
            <CAccordionHeader @click="getProducts(1, '兒童玩具')"
              >兒童玩具</CAccordionHeader
            >
            <CAccordionBody>
              <ul class="list-unstyled">
                <li v-for="(item, i) in productsList" :key="i">
                  <router-link
                    class="py-2 d-block text-muted"
                    :to="`/product/${item.id}`"
                  >
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </CAccordionBody>
          </CAccordionItem>
        </CAccordion>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6" v-for="item in productsList" :key="item.id">
            <div class="card border-0 mb-4 position-relative position-relative">
              <router-link :to="`/product/${item.id}`" title="查看商品">
                <img
                  :src="item.imageUrl"
                  class="card-img-top rounded-0"
                  :alt="item.title"
                />
              </router-link>

              <div class="card-body p-0">
                <div class="d-flex">
                  <div class="col">
                    <h4 class="mb-0 mt-3">
                      {{ item.title }}
                    </h4>
                    <p class="card-text mb-0">
                      NT${{ item.price }}
                      <span class="text-muted ms-2"
                        ><del>NT${{ item.origin_price }}</del></span
                      >
                    </p>
                  </div>
                  <div class="col-auto align-self-center">
                    <p class="text-muted text-end mb-0">
                      <button
                        v-if="favorite.includes(item.id)"
                        type="button"
                        class="btn btn-danger"
                        @click="saveFav(item.id)"
                      >
                        已收藏
                      </button>

                      <button
                        v-else
                        type="button"
                        class="btn btn-primary"
                        @click="saveFav(item.id)"
                      >
                        收藏商品
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pageinfo :pages="pageobj" @getpage="getProducts"></pageinfo>
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
</template>


<script>
import pageinfo from "@/components/pageinfo.vue";

import { CAccordion } from "@coreui/vue";
import { CAccordionHeader } from "@coreui/vue";
import { CAccordionItem } from "@coreui/vue";
import { CAccordionBody } from "@coreui/vue";

export default {
  data() {
    return {
      productsList: [],
      favorite: JSON.parse(localStorage.getItem("favorite")) || [],
      pageobj: {},
      visible: false,
      isLoading: false,
    };
  },
  components: {
    pageinfo,
    CAccordion,
    CAccordionHeader,
    CAccordionItem,
    CAccordionBody,
  },
  methods: {
    getProducts(page = 1, category) {
      this.isLoading = true;
      let url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      if (category) {
        url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/products?page=${page}&category=${category}`;
      }
      this.$http(url)
        .then((res) => {
          this.productsList = res.data.products;
          this.pageobj = res.data.pagination;
          this.isLoading = false;
        })
        .catch((er) => {
          console.log(er);
        });
    },
    saveFav(id) {
      const favoriteIndex = this.favorite.findIndex((item) => item === id);
      if (favoriteIndex === -1) {
        //如果沒有
        this.favorite.push(id);
      } else {
        //如果有
        this.favorite.splice(favoriteIndex, 1);
      }

      console.log(this.favorite);
    },
  },
  watch: {
    favorite: {
      handler() {
        localStorage.setItem("favorite", JSON.stringify(this.favorite));
      },
      deep: true,
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>