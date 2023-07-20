<!--
 * @Author: zhaoshali
 * @Date: 2023-07-19 14:30:32
 * @LastEditTime: 2023-07-20 16:07:49
 * @Description: 
-->
<script setup>
import { onMounted, ref } from 'vue';
import { useCategoryStore } from '@/store/category';
const categoryStore = useCategoryStore();
onMounted(() => {
  categoryStore.getcategory();
  console.log(categoryStore.categoryList,'categoryList')
})
const curActive = ref(-1)
</script>
<template>
  <div class="bg-pink-200 w-1200px m-auto mt-30px">
    <div class="relative">
      <swiper />
      <div class="absolute w-25% box-border bg-black opacity-80 text-white text-18px h-full top-0">
        <div v-for="(item,index) in categoryStore.categoryList" :key="index+'shfd'" @click="curActive=index">
          <div class="flex justify-between py-15px pl-30px pr-15px" :class="curActive===index?'tabActive':''">
            <span class="w-90% flex">
              <span class="text-18px mr-2">{{item.name}}</span>
              <span v-for="(k,i) in item.children.slice(0,2)" :key="i+'shfgf'">
                <span class="text-16px mr-1">{{ k.name }}</span>
              </span>
            </span>
            <span class="i-iconamoon:arrow-right-2-light inline-block text-25px allow"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.tabActive{
  background-color: #27ba9b;
  &.allow:hover{
    background-color: pink;
  }
}
</style>