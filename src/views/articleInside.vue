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

  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="h1 mb-3">{{ article.title }}</div>

        <div class="main" v-html="article.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      article: [],
      isLoading: false,
    };
  },
  methods: {
    getarticle() {
      this.isLoading = true;

      this.$http
        .get(
          `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/article/${this.id}`
        )
        .then((res) => {
          this.article = res.data.article;
          this.isLoading = false;
        })
        .catch((er) => {
          console.log(er);
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getarticle();
  },
};
</script>
