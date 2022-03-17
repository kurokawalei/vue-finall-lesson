<template>
  <Loading :active="isLoading"></Loading>
  <section class="cart-images"></section>
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
          <div class="order-step-box active">
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
      <div class="row justify-content-center">
        <div class="col-md-8">
          <Form
            class="col-md"
            v-slot="{ errors }"
            @submit="createOrder"
            ref="form"
          >
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></Field>
              <error-message
                name="email"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <error-message
                name="姓名"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <Field
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                :rules="isPhone"
                v-model="form.user.tel"
              ></Field>
              <error-message
                name="電話"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <error-message
                name="地址"
                class="invalid-feedback"
              ></error-message>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea
                id="message"
                class="form-control"
                cols="30"
                rows="3"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="text-center mt-5 mb-5">
              <button
                type="submit"
                class="btn btn-danger"
                :disabled="Object.keys(errors).length > 0"
              >
                送出訂單
              </button>
            </div>
          </Form>
        </div>
      </div>
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
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
      isLoading: false,
      carData: [],
      isCoupon: false,
      code: "",
    };
  },
  methods: {
    createOrder() {
      this.isLoading = true;
      const obj = {
        data: this.form,
      };
      this.$http
        .post(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/order`,
          obj
        )
        .then((res) => {
          Toast.fire({
            icon: "success",
            showClass: {
              popup: "animate__animated animate__fadeIn",
            },
            title: res.data.message,
          });

          // console.log(res.data)
          this.isLoading = false;
          // 重整表單
          this.$refs.form.resetForm();
          const id = res.data.orderId;
          //推到結帳頁面
          this.$router.push(`/pay/${id}`);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },

    // vee-validate 規則
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "請輸入正確的電話號碼";
    },
  },
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>