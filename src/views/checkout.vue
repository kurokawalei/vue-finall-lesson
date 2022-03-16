<template>
  <Loading :active="isLoading"></Loading>
  <section class="cart-images"></section>
  <div class="mt-3">
    <div class="container mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-md-2">
          <div class="order-step-box ">
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
      <div class="row">
        <div class="col-md-8">
       表單
        </div>
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-4">訂單資訊</h4>
            <table class="table text-muted border-bottom">
              <tbody>
              
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
                  placeholder="優惠碼"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
              </div>

              <div class="col-auto align-self-center">
                <button type="button" class="btn btn-primary">套用</button>
              </div>
            </div>

            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總和</p>
              <p class="mb-0 h4 fw-bold">11</p>
            </div>

            <router-link to="/checkout" class="btn btn-dark w-100 mt-4"
              >下一步</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
     
      isLoading: false,
    };
  },
  methods: {
   
  },
  mounted() {
    
  },
};
</script>