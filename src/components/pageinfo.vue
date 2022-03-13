<template>
  <nav class="d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a class="page-link" href="javascript:;" aria-label="Previous" @click.prevent=" $emit('getpage', pages.current_page-1 ) ">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="(page, i) in pages.total_pages" :key="i"  :class="{ active:pages.current_page == page }">
        <a class="page-link" href="javascript:;" @click=" $emit('getpage', page ) " >{{ page }}</a>
      </li>

      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a class="page-link" href="javascript:;" aria-label="Next" @click.prevent=" $emit('getpage', pages.current_page+1 ) ">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["pages"],
};
</script>