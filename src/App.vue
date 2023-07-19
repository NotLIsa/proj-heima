<!--
 * @Author: zhaoshali
 * @Date: 2023-07-19 09:57:10
 * @LastEditTime: 2023-07-19 14:29:49
 * @Description: 
-->
<script setup>
</script>

<template>
  <!-- 一级路由出口组件 -->
  <!-- <el-button type="primary">primary</el-button> -->
  <RouterView />
</template>

<style scoped lang="scss">
.nihao{
  color:$nihaocolor;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
