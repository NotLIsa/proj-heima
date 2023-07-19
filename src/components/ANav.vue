<!--
 * @Author: zhaoshali
 * @Date: 2023-07-19 15:18:43
 * @LastEditTime: 2023-07-19 16:43:38
 * @Description: 
-->
<script setup>
const tab = ['请先登录','帮助中心','关11于我们']
</script>
<template>
  <div class="flex bg-[#333] text-gray-200 text-14px p-15px px-40px justify-end">
    <div class="flex">
      <div v-for="(item,index) in tab" :key="index+'usjgdj'" class="">
        {{ item }}
        <span class="mr-2" v-show="index<tab.length-1">
          <el-divider direction="vertical" />
        </span>
      </div>
    </div>
  </div>
</template>