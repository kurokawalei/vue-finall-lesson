<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light container">
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
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link">首頁</router-link>
          <router-link to="/products" class="nav-item nav-link"
            >產品列表</router-link
          >
          <router-link to="/cart" class="nav-item nav-link">購物車</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>