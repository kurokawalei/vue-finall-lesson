<template>
  <Loading :active="isLoading"></Loading>
  <section class="cart-images"></section>
  <div class="mt-3">
    <div class="container mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-md-2">
          <div class="order-step-box active">
            <p>STEP1</p>
            <p>確認商品</p>
          </div>
        </div>
        <div class="col-md-2">
          <div class="order-step-box">
            <p>STEP2</p>
            <p>訂購資訊</p>
          </div>
        </div>
        <div class="col-md-2">
          <div class="order-step-box">
            <p>STEP3</p>
            <p>確認付款</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="border-0 ps-0">產品名稱</th>
                <th scope="col" class="border-0">訂購數量</th>
                <th scope="col" class="border-0">價格</th>
                <th scope="col" class="border-0"></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="item in carData.carts" :key="item.id">
                <tr class="border-bottom border-top">
                  <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <img
                      :src="item.product.imageUrl"
                      :alt="item.product.title"
                      style="width: 72px; height: 72px; object-fit: cover"
                    />
                    <p class="mb-0 fw-bold ms-3 d-inline-block">
                      {{ item.product.title }}
                    </p>
                  </th>
                  <td class="border-0 align-middle" style="max-width: 160px">
                    <div class="input-group pe-5">
                      <!-- <div class="input-group-prepend">
                        <button
                          class="btn btn-outline-dark border-0 py-2"
                          type="button"
                          id="button-addon1"
                          @click="upLoadItem(item)"
                        >
                          <i class="bi bi-dash-square"></i>
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
                        "
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                        v-model="item.qty"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn btn-outline-dark border-0 py-2"
                          type="button"
                          id="button-addon2"
                          @click="upLoadItem(item)"
                        >
                          <i class="bi bi-plus-square"></i>
                        </button>
                      </div> -->
                      <select
                        class="form-select"
                        v-model="item.qty"
                        @change="upLoadItem(item)"
                        panelHeight="100"
                      >
                        <option v-for="(num, i) in 99" :value="num" :key="i">
                          {{ num }}
                        </option>
                      </select>
                    </div>
                  </td>
                  <td class="border-0 align-middle">
                    <p class="mb-0 ms-auto">NT${{ item.total }}</p>
                  </td>
                  <td class="border-0 align-middle">
                    <button
                      type="button"
                      class="btn"
                      title="移除"
                      @click.prevent="delItem(item.id)"
                    >
                      <i class="bi bi-x-lg"></i>
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
          <div class="input-group w-50 mb-3">
            <div class="input-group-append">
              <button
                class="
                  btn btn-outline-dark
                  border-bottom border-top-0 border-start-0 border-end-0
                  rounded-0
                "
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-4">訂單資訊</h4>
            <table class="table text-muted border-bottom">
              <tbody>
                <template v-for="item in carData.carts" :key="item.id">
                  <tr>
                    <th
                      scope="row"
                      class="border-0 px-0 mb-1 font-weight-normal"
                    >
                      {{ item.product.title }} 共
                      <span class="h6">{{ item.qty }}</span> 件
                    </th>
                    <td class="text-end border-0 px-0 mb-1">
                      NT${{ item.total }}元
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
            <div class="d-flex">
              <div class="col">
                <input
                  type="text"
                  class="
                    form-control
                    rounded-0
                    border-bottom-0 border-top-0 border-start-0 border-end-0
                    shadow-none
                  "
                  placeholder="請輸入vip888-(6折)"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  v-model="code"
                />
              </div>

              <div class="col-auto align-self-center">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click.prevent="coupon()"
                >
                  套用
                </button>
              </div>
            </div>

            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h5 fw-bold">總和</p>
              <p class="mb-0 h5 fw-bold">NT${{ carData.total }}元</p>
            </div>
            <div class="mt-2 h5 text-end text-success" v-if="isCoupon">
              折扣價：NT${{ Math.trunc(carData.final_total) }}元
            </div>
            <router-link to="/checkout" class="btn btn-dark w-100 mt-4"
              >下一步</router-link
            >
          </div>
        </div>
      </div>
      <!-- <div class="my-5">
        <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
        <div class="swiper-container mt-4 mb-5">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <a href="#" class="text-dark"> </a>
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
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
  timer: 3000,
  timerProgressBar: true,
});

export default {
  data() {
    return {
      carData: [],
      isLoading: false,
      isCoupon: false,
      code: "",
    };
  },
  methods: {
    getCarList() {
      this.isLoading = true;
      this.$http(
        `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart`
      )
        .then((res) => {
          this.carData = res.data.data;
          console.log(this.carData);
          this.isLoading = false;
        })
        .catch((er) => {
          console.log(er);
        });
    },
    upLoadItem(item) {
      this.isLoading = true;
      const data = {
        product_id: item.id,
        qty: item.qty,
      };

      this.$http
        .put(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart/${item.id}`,
          { data }
        )
        .then((res) => {
          console.log(res);
          this.getCarList();
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
          console.log(er);
        });
    },
    delItem(item) {
      this.isLoading = true;
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/cart/${item}`
        )
        .then((res) => {
          this.getCarList();
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
          console.log(er);
        });
    },
    coupon(num) {
      num = this.code;
      console.log(num);

      let data = {
        code: this.code,
      };

      this.$http
        .post(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/coupon`,
          { data }
        )
        .then((res) => {
          this.isCoupon = true;
          Toast.fire({
            icon: "success",
            showClass: {
              popup: "animate__animated animate__fadeIn",
            },
            title: res.data.message,
          });
          this.code = "";

          this.getCarList();

          // console.log(res.data.data.final_total)
        })
        .catch(() => {
          Toast.fire({
            icon: "error",
            showClass: {
              popup: "animate__animated animate__fadeIn",
            },
            title: "無效的優惠碼",
          });
        });

      // https://vue3-course-api.hexschool.io/v2/api/kurokawa2021/coupon
      //  this.isCoupon = true;
    },
  },
  mounted() {
    this.getCarList();
  },
};
</script>

