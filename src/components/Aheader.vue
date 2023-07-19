<!--
 * @Author: zhaoshali
 * @Date: 2023-07-19 11:05:13
 * @LastEditTime: 2023-07-19 16:00:57
 * @Description: 
-->
<script setup>
const menu = ['首页','居家','美食','服饰','母婴','首页','居家','美食','','杂项']
</script>
<template>
  <div class="flex px-30px h-100px bg-pink-100 justify-between">
     <div class="flex">
      <img src="../assets/image/logo.png" />
      <div v-for="(item,index) in menu" :key="index+'sjg'" class="px-30px bg-blue-100 lh-100px">
         {{ item }}
      </div>
     </div>
     <div class="flex h-100% items-center">
      <div>
        <el-input size="small" icon="input">search</el-input>
      </div>
      <div class="i-material-symbols:shopping-cart-outline-rounded"></div>
     </div>
  </div>
</template>
<style lang="scss" scoped>

</style>