<!--
 * @Author: zhaoshali
 * @Date: 2023-07-21 11:07:00
 * @LastEditTime: 2023-07-21 11:49:07
 * @Description: 
-->
<script setup>
import { getGooddetailAPI } from '@/apis/good';
import { ref, onMounted } from 'vvue'
const goodList = ref([])
const getgoodDatail = async() => {
  const res = await getGooddetailAPI;
  goodList.value = res.result;
  console.log('🍡goodDetail  ----Good/index/ts-13')
}
onMounted(() => {
  getgoodDatail();
})
</script>
<template>
  <div>我是商品详情页</div>
</template>