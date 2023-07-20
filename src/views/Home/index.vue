<!--
 * @Author: zhaoshali
 * @Date: 2023-07-19 14:30:32
 * @LastEditTime: 2023-07-20 17:10:21
 * @Description: 
-->
<script setup>
import { onMounted, ref } from 'vue';
import { useCategoryStore } from '@/store/category';
import { getReCommentAPI, getHotPriceAPI, getFreshGoodsAPI } from '@/apis/index'
const categoryStore = useCategoryStore();
const recommendList = ref([])
const freshgoodsList = ref([])
const hotpriceList = ref([])

const getReCommentData = async() => {
  const res = await getReCommentAPI();
  recommendList.value = res.result;
  console.log(recommendList.value,'人气推荐');
};
const getHotPriceData = async() => {
  const res = await getHotPriceAPI();
  freshgoodsList.value = res.result;
  console.log(freshgoodsList.value,'新鲜好物');
}
const getFreshGoodsData = async() => {
  const res = await getFreshGoodsAPI();
  hotpriceList.value = res.result;
  console.log(hotpriceList.value,'热门品牌');
}
onMounted(() => {
  categoryStore.getcategory();
  console.log(categoryStore.categoryList,'categoryList');
  getReCommentData();
  getHotPriceData();
  getFreshGoodsData();
})
const curActive = ref(-1)
</script>
<template>
  <div>
    <!-- 轮播图 -->
    <div class="mt-30px bg-[#F5F5F5]">
      <div class="relative w-1200px m-auto">
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
    <!-- 新鲜好物 -->
    <div>
      <div class="w-1200px m-auto py-40px">
        <div class="flex justify-between items-center text-[#999]  h-80px">
          <div class="flex text-base">
            <div class="text-[#333] font-600 text-26px">新鲜好物</div>
            <div class="mt-2 ml-20px">新鲜出炉 品质靠谱</div>
          </div>
          <div class="cursor-pointer">查看全部 ></div>
        </div>
        <!-- 新鲜好物--商品 -->
          <div class="text-center flex justify-between flex-wrap">
            <div v-for="(item,index) in hotpriceList" :key="index+'dghf'" :title="item.name">
              <img class="w-295px h-295px bg-pink-200 cursor-pointer" :src="item.picture"/>
               <div class="text-18px mt-1 truncate w-280px">{{ item.desc }}</div>
               <div class="text-red-700 font-600 text-20px">￥ {{item.price}}</div>
            </div>
          </div>
      </div>
    </div>
    <!-- 人气推荐 -->
    <div>
      <div class="w-1200px m-auto py-40px">
        <div class="flex justify-between items-center text-[#999]  h-80px">
          <div class="flex text-base">
            <div class="text-[#333] font-600 text-26px">人气推荐</div>
            <div class="mt-2 ml-20px">人气爆款不容错过</div>
          </div>
          <div class="cursor-pointer">查看全部 ></div>
        </div>
        <!-- 人气推荐--商品 -->
        <div class="text-center flex justify-between flex-wrap" >
            <div v-for="(item,index) in recommendList" :key="index+'dghf'" :title="item.alt">
              <img class="w-295px h-295px bg-pink-200 cursor-pointer" :src="item.picture"/>
               <div class="text-18px mt-1 truncate w-295px">{{ item.title }}</div>
               <div class="text-14px text-gray-500 mt-3">{{item.alt}}</div>
            </div>
          </div>
      </div>
      </div>
    <!-- 热门品牌 -->
    <div>
      <div class="w-1200px m-auto py-40px">
        <div class="flex justify-between items-center text-[#999]  h-80px">
          <div class="flex text-base">
            <div class="text-[#333] font-600 text-26px">热门品牌</div>
            <div class="mt-2 ml-20px">国际经典 品质保障</div>
          </div>
          <div class="cursor-pointer">查看全部 ></div>
        </div>
      </div>
      </div>
    <!-- 生鲜 -->
    <div>
      <div class="w-1200px m-auto py-40px">
        <div class="flex justify-between items-center text-[#999]  h-80px">
          <div class="flex text-base">
            <div class="text-[#333] font-600 text-26px">生鲜</div>
            <div class="mt-2 ml-20px">国际经典 品质保障</div>
          </div>
          <div class="cursor-pointer">查看全部 ></div>
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