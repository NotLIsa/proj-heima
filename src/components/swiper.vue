<!--
 * @Author: zhaoshali
 * @Date: 2023-07-20 14:35:55
 * @LastEditTime: 2023-07-20 15:59:13
 * @Description: 
-->

<script setup>
import { ref, onMounted } from 'vue';
import { getBannerAPI } from '@/apis/index';
const banners = ref([]);
const getBanners = async() => {
  const res =  await getBannerAPI();
  banners.value = res.result;
  console.log(banners.value,'banner');
}
onMounted(() => {(
  getBanners()
)})
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
    <ElCarousel-item v-for="(item, index) in banners" :key="index+'sjhfdb'">
      <div>
         <img :src="item.imgUrl"/>
      </div>
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