<template>
  <div id="nav" class="pt-2 pb-2 btn-primary">
    <nav
      class="navbar navbar-expand-lg navbar-dark container"
      style="background-image: none"
    >
      <router-link to="/" class="navbar-brand">黑川玩具店</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end pe-5"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link to="/admin" class="nav-item nav-link">首頁</router-link>
            <router-link to="/admin/articles" class="nav-item nav-link">文章</router-link>
        
        
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  data() {
    return {
     
    };
  },

  methods: {
  
  },
  mounted() {
  
  },
};
</script>

