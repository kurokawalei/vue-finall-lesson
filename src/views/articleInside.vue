<template>
  <Loading :active="isLoading"></Loading>
  <div
    class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 400px"
  >
    <div class="articleimages">
       <h2 class="fw-bold">文章列表</h2>
    </div>
    
  </div>

  <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-10">
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
        document.documentElement.scrollTop = 0;
  },
};
</script>
