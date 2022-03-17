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
                  NT${{ item.price }}
                  <span class="text-muted ms-2"
                    ><del>NT${{ item.origin_price }}</del></span
                  >
                </p>
                <p class="text-muted mt-3"></p>
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
      pageobj: {},
      visible: false,
      isLoading:false
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
  },
  mounted() {
    this.getProducts();
  },
};
</script>