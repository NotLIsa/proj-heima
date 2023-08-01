<!--
 * @Author: zhaoshali
 * @Date: 2023-07-19 14:30:32
 * @LastEditTime: 2023-08-01 09:57:37
 * @Description: 
-->
<script setup>
import { onMounted, ref } from 'vue';
import { useCategoryStore } from '@/store/category';
import { getReCommentAPI, getHotPriceAPI, getFreshGoodsAPI,getGoodsAPI,getBannerAPI } from '@/apis/index';
const banners = ref([]);
const getBanners = async() => {
  const res =  await getBannerAPI();
  banners.value = res.result;
  // console.log(banners.value,'🍡banner--t-15');
}
const categoryStore = useCategoryStore();
const recommendList = ref([]);
const freshgoodsList = ref([]);
const hotpriceList = ref([]);
const goosDataList = ref([]);
// const bannerList = ref([])
const getReCommentData = async() => {
  const res = await getReCommentAPI();
  recommendList.value = res.result;
  // console.log(recommendList.value,'人气推荐');
};
const getHotPriceData = async() => {
  const res = await getHotPriceAPI();
  hotpriceList.value = res.result;
  // console.log(freshgoodsList.value,'热门品牌');
}
const getFreshGoodsData = async() => {
  const res = await getFreshGoodsAPI();
  freshgoodsList.value = res.result;
  // console.log(freshgoodsList.value,'新鲜好物');
}
const getGoodsData = async() => {
  const res = await getGoodsAPI();
  goosDataList.value = res.result;
  // console.log(goosDataList.value,'详情？');
}
onMounted(() => {
  getBanners();
  categoryStore.getcategory();
  // console.log(categoryStore.categoryList,'categoryList');
  getReCommentData();
  getHotPriceData();
  getFreshGoodsData();
  getGoodsData();
})
const curActive = ref(-1)
</script>
<template>
  <div>
    <!-- 轮播图 -->
    <div class="mt-30px bg-[#F5F5F5]">
      <div class="relative w-1200px m-auto">
        <swiper :banners="banners"/>
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
            <div v-for="(item,index) in freshgoodsList" :key="index+'dghf'" :title="item.name">
            <RouterLink :to="`/detail/${item.id}`">
              <img v-img-lazy="item.picture" class="w-295px h-295px bg-pink-200 cursor-pointer" :src="item.picture"/>
              <div class="text-18px mt-1 truncate w-280px">{{ item.desc }}</div>
              <div class="text-red-700 font-600 text-20px">￥ {{item.price}}</div>
            </RouterLink>
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
    <!-- <div>
      <div class="w-1200px m-auto py-40px">
        <div class="flex justify-between items-center text-[#999]  h-80px">
          <div class="flex text-base">
            <div class="text-[#333] font-600 text-26px">热门品牌</div>
            <div class="mt-2 ml-20px">国际经典 品质保障</div>
          </div>
          <div class="cursor-pointer">查看全部 ></div>
        </div>
        <div class="flex w-100% overflow-hidden">
          <div class="bg-pink-200" v-for ="(item, index) in bannerList" :key="index+'skjsh'"> 
          <img class="w-250px h-400px object-cover" :src="item.imgUrl" />
            {{item.name}}
        </div>
        </div>
        
      </div>
      </div> -->
    <!-- 生鲜 -->
    <div>
      <div class="w-1200px m-auto"  v-for="(item,index) in goosDataList" :key="index+'sjgf'" >
        <div class="flex justify-between items-center text-[#999]">
          <div class="flex text-base">
            <div class="text-[#333] font-600 text-26px">{{item.name}}</div>
            <div class="mt-2 ml-20px">国际经典 品质保障</div>
          </div>
          <div class="cursor-pointer">查看全部 ></div>
        </div>

        <div class="flex  my-30px mb-80px h-600px">
          <img class="w-20% object-cover" :src="item.picture" />
          <div class="w-80% grid ml-40px grid-cols-4 gap-y-40px gap-x-10px">
            <div v-for="(m, n) in item.goods" :key="n+'sjdhss'">
              <img v-img-lazy="m.picture" class="w-210px object-cover" :src="m.picture"/>
              <div class="truncate">{{ m.name }}</div>
              <div class="truncate">{{ item.children[index].name}}</div>
              <div class="text-red-700 text-20px mt-1">￥{{ m.price }}</div>
            </div>
           
             <!-- <div class="w-20% bg-pink-200">1</div>
             
             <div class="w-20% bg-pink-200">1</div>
             <div class="w-20% bg-pink-200">1</div>
             <div class="w-20% bg-pink-200">1</div> -->

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