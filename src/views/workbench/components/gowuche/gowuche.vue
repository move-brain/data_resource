<template>
    <div class="mian">
        <h2>购物车</h2>
      <div class="links">
        <RouterLink active-class="active" to="/unpaid">待支付</RouterLink>&nbsp;&nbsp;&nbsp;&nbsp;
        <RouterLink active-class="active" to="/purchaseHistory">购买记录</RouterLink>
      </div>
      <RouterView />
    </div>
  </template>
  
  <script setup>
  import {RouterView, RouterLink} from "vue-router"
  </script>
  
  <style scoped>
    .links {
      padding: 2vh;
    }
   .active {
      font-weight: bold;
      color: #007f99;
      border-bottom: 2px solid #007f99;
      padding-bottom: 2vh;
    }
  
    a {
      text-decoration: none;
      color: black;
    }
  
    h2 {
      padding: 2vh 0 0 2vh;
      font-weight: 700;
    }
  
  </style>