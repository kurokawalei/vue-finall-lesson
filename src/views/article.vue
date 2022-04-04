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
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row row-cols-1 row-cols-md-4">
      <div class="col mb-3" v-for="item in articleList" :key="item">
        <div class="card" >
          <img :src="item.imageUrl" class="card-img-top img-fluid" :alt="item.title" style="width: 300px; height: 200px; object-fit: cover">
         
      
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p>發布時間：{{getDate(item.create_at)}}</p>
            <p class="card-text">
           {{item.description}}
            </p>
           
            <router-link class="btn btn-primary w-100 ps-2 pe-2" :to="`/article/${item.id}`">查看文章</router-link>
            
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-light py-4"></div>
</template>


<script>
export default {
  data() {
    return {
      articleList: [],
      isLoading: false,
      pageobj: {},
    };
  },

  methods: {
    getArticle(page = 1) {
      this.isLoading = true;
      let url = `${process.env.VUE_APP_API}/v2/api/${process.env.VUE_APP_PATH}/articles?page=${page}`;

      this.$http(url)
        .then((res) => {
          this.articleList = res.data.articles;
          this.pageobj = res.data.pagination;
          this.isLoading = false;
          console.log(this.articleList);
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


  },

  mounted() {
    this.getArticle();
  },
};
</script>