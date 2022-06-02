<template>
  <NavBar></NavBar>
  <router-view />
  <Footer></Footer>
  <ToastMessages></ToastMessages>
  
</template>

<script>
import emitter from '@/libs/mitter';
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/footer.vue";
import ToastMessages from '@/components/ToastMessages.vue';




export default {
  provide(){
    return{
      emitter,
    }
  },
  components: {
    NavBar,
    Footer,
    ToastMessages
  },
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
@import "./assets/style/all";
</style>
