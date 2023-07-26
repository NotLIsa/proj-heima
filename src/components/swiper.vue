<!--
 * @Author: zhaoshali
 * @Date: 2023-07-20 14:35:55
 * @LastEditTime: 2023-07-24 17:07:22
 * @Description: 
-->

<script setup>
const props = defineProps({
  banners: {
    type: Array, // 属性类型为数组
    required: true // 设为必需属性
  }
});

// type imgurlType = {
//   hrefUrl: string,
//   id: number,
//   imgUrl: string,
//   type: number,
// }
</script>
<template>
 <div class="home-banner">
  <ElCarousel :interval="5000" arrow="always" height="500px">
    <ElCarousel-item v-for="(item, index) in props.banners" :key="index+'sjhfdb'">
      <a :href="item.hrefUrl">
         <img :src="item.imgUrl"/>
      </a>
    </ElCarousel-item>
  </ElCarousel>
 </div>
</template>

<style scoped lang="scss">
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}
:deep(.el-carousel__arrow--left){
  left:27%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>