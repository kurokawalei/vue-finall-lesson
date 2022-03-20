<template>

  <router-view v-if="checkSuccess"></router-view>
</template>

<script>
import emitter from "@/libs/mitter";

export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common.Authorization = `${token}`;
      this.$http
        .post(`${process.env.VUE_APP_API}/v2/api/user/check`, {
          api_token: token,
        })
        .then(() => {
          this.checkSuccess = true; // 通過 check api 驗證後改為 true
        })
        .catch((err) => {
          console.log(err);
          this.$router.push("/login");
        });
    }
   
  },
  

  mounted() {
    this.checkLogin();
  },
};
</script>
