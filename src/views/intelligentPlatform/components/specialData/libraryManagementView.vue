<template>
  <div class="bg-white">
    <div class="title">专题库管理</div>
    <div class="links">
      <RouterLink active-class="active" to="databaseView">数据库管理</RouterLink
      >&nbsp;&nbsp;&nbsp;&nbsp;
      <RouterLink active-class="active" to="tableView">表管理</RouterLink
      >&nbsp;&nbsp;&nbsp;&nbsp;
      <RouterLink active-class="active" to="fieldView">字段管理</RouterLink>
    </div>
  </div>
  <RouterView />
</template>

<script setup></script>

<style lang="scss" scoped>
.title {
  font-weight: 700;
  font-size: 18px;
  padding: 3vh;
  padding-bottom: 1vh;
}
.links {
  padding: 2vh;
  padding-left: 0;
  margin-left: 3vh;
  .router-link-exact-active {
    font-weight: bold;
    color: #007f99;
    border-bottom: 2px solid #007f99;
    padding-bottom: 1vh;
  }
}

a {
  text-decoration: none;
  color: black;
}
</style>
