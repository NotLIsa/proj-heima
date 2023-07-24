<script setup>
/**
 * goods{
 *  id,name,desc,price,picture,orderNum
 * }
 */
defineProps(['goods'])
</script>
<template>
  <div class="w-160px m-auto h-280px" hover="bg-pink">
    <img v-img-lazy="goods.picture" class="w-full h-160px cursor-pointer object-cover" :src="goods.picture"/>
    <div class="ahover text-16px  truncate mt-2 w-160px">{{ goods.name }}</div>
    <div class="text-14px  truncate my-2 text-gray-400 w-160px">{{ goods.desc }}</div>
    <div class="text-red-600 text-18px">￥ {{goods.price}}</div>
  </div>
</template>
<style lang="scss" setup>
.ahover{
  background-color:white;
  &:hover{
    background-color:pink;
  }
}
</style>