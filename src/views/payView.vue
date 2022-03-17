<template>
  <Loading :active="isLoading"></Loading>
  <div class="mt-3">
    <div class="container mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-md-2">
          <div class="order-step-box">
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
          <div class="order-step-box active">
            <p>STEP3</p>
            <p>確認付款</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="text-center mb-5">
      <h1>
        <i class="bi bi-check-circle-fill me-3 text-success"></i>訂單建立成功
      </h1>
      <p>您的訂單編號為：{{ orderinfo.id }}</p>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">聯絡人資訊</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">地址</th>
              <td>{{ orderinfo.user.address }}</td>
            </tr>
            <tr>
              <th scope="row">聯絡信箱</th>
              <td>
                {{ orderinfo.user.email }}
              </td>
            </tr>
            <tr>
              <th scope="row">姓名</th>
              <td>{{ orderinfo.user.name }}</td>
            </tr>
            <tr>
              <th scope="row">連絡電話</th>
              <td>{{ orderinfo.user.tel }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">購買項目</th>
              <th scope="col">件數</th>
              <th scope="col">單價</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="item in orderinfo.products" :key="item">
              <tr>
                <th scope="row">{{ item.product.title }}</th>
                <td>{{ item.qty }}</td>
                <td>NT${{ item.product.price }}元</td>
              </tr>
            </template>
            <tr>
              <th scope="row" class="border-bottom-0">總和(含折扣價)</th>
              <td class="border-bottom-0"></td>
              <td class="border-bottom-0 text-success">
                NT${{ orderinfo.total }}元
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row justify-content-center mt-5">
      <div class="col-6">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">訂單資訊</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">訂購編號</th>
              <td>{{ orderinfo.id }}</td>
            </tr>
            <tr>
              <th scope="row">訂購時間</th>
              <td>{{ getDate(orderinfo.create_at) }}</td>
            </tr>
            <tr>
              <th scope="row">付款狀態</th>
              <td>
                <span class="text-success" v-if="orderinfo.is_paid"
                  >付款完成</span
                >
                <span class="text-danger" v-else>未付款</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="text-center mt-3 mb-5">
      <button
        type="button"
        class="btn btn-primary btn-lg"
        @click.prevent="payover()"
      >
        我要付款<i class="bi bi-hand-index ms-2"></i>
      </button>
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
      isLoading: false,
      orderId: "",
      orderinfo: {
        user: {},
      },
    };
  },

  methods: {
    getPayinfo() {
      this.isLoading = true;
      //vue3-course-api.hexschool.io/v2/api/kurokawa2021/order/-MyKedeJmoIF1fuLXTma
      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
        )
        .then((res) => {
          this.orderinfo = res.data.order;
          //  console.log(this.orderinfo);

          this.isLoading = false;
        })
        .catch((er) => {
          console.log(er);
        });
    },
    getDate(time) {
      //時間處理
      const date = new Date(time * 1000);
      return date.toLocaleDateString();
    },
    payover() {
      this.$http
        .post(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
        )
        .then((res) => {
          // console.log(res.data.message);
          Toast.fire({
            icon: "success",
            showClass: {
              popup: "animate__animated animate__fadeIn",
            },
            title: res.data.message,
          });
          this.isLoading = false;
        })
        .catch((er) => {
          console.log(er);
        });

      this.getPayinfo();
    },
  },
  mounted() {
    const { id } = this.$route.params;
    this.orderId = id;

    // console.log( this.$route.params.id );
    this.getPayinfo();
  },
};
</script>