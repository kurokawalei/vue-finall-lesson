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

    <div class="info mt-3 mb-3">
      購買前需知
      <ul>
        <li>請留意彩色部份均由人手上色，或會出現色彩濃淡不均勻的情況。</li>
        <li>
          由於用戶的電腦設定各有不同，貨品真實顏色及形狀可能與螢幕顯示的略有差異。
        </li>
        <li>照片為研發中的試製品，實際商品可能略有差異，請見諒。</li>
        <li>
          這產品的生產數量有限, 如已達到預定銷售數量就會終止預訂。敬請見諒。
        </li>
        <li>
          在各地區發行之商品，含有人物角色的版權和安全標誌，為了符合各國相關規格的要求，所以包裝盒上可能貼有各國的版權標籤，請在購買前留意。
        </li>
        <li>
          商品有可能因故變更交貨日期或缺貨而導致寄送延遲，在此狀況下本公司不負任何賠償責任。
        </li>
        <li>
          今後在所有商品頁面標示如SNS及廣告標示與商品頁內容有異時，一切以商品頁內容為最終且最正確的內容。
        </li>
        <li>本商品有可能在本公司所主辦的活動或其他企劃中推出販售。</li>
        <li>服務期限 : 於收取商品當日起計7天後中止</li>
        <li>
          [產品包裝盒缺陷 ]<br />
          運輸箱損壞若未傷及商品本身則無法提供退貨或換貨的服務
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import emitter from "@/libs/mitter.js";

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
          emitter.emit("get-cart"); //傳給外面

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
