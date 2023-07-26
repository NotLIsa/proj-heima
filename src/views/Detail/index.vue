<!--
 * @Author: zhaoshali
 * @Date: 2023-07-24 16:57:38
 * @LastEditTime: 2023-07-26 09:51:14
 * @Description: 
-->
<script setup>
import { getGooddetailAPI } from '@/apis/good';
import { ref, onMounted } from 'vue';
import DetailHot from '@/components/DetailHot.vue'
import { useRoute } from 'vue-router';
const dataList = ref();
const route =useRoute()
const getList = async() => {
  const res = await getGooddetailAPI(route.params.id);
  dataList.value = res.result;
  console.log('🛐🛐',dataList.value)
};
onMounted(() => {
  getList();
});
const curIndex = ref(0);
const labelActive = ref(0);
const picActive = ref(0);
const count = ref(1);
const goComment = (() => {

})
const label = ['无忧退货','快速退款','免费包邮']
</script>
<template>
  <div class="bg-[#f5f5f5] w-full h-full">
    <div class="w-1200px m-auto py-30px">
    <!-- 面包屑 -->
      <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/category/${dataList?.categories[1].id}` }">{{ dataList?.categories[1].name }}</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: `/category/showCategory/${dataList?.categories[0].id}`}">{{ dataList?.categories[0].name }}</el-breadcrumb-item>
          <el-breadcrumb-item>{{ dataList?.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <div class="bg-white">
        <div class="mt-30px py-30px px-40px flex">
        <div>
          <div class="h-400px w-500px flex">
            <img class="w-400px h-400px bg-blue-100" :src="dataList?.mainPictures?.[curIndex]"/>
            <div class="ml-15px flex flex-col justify-between">
              <div v-for="(item, index) in dataList?.mainPictures" :key="index + 'shsg'" @mouseenter="curIndex=index">
                <img :src="item" class="w-70px h-70px"  :class="curIndex===index ? 'activepic' : 'pic'"/>
              </div>
            </div>
          </div>
          <div class="my-20px flex text-14px w-400px justify-between items-center text-[#666]">
            <div class="flex flex-col justify-between items-center">
              <div class="count">销量人气</div>
              <div class="money">{{ dataList?.salesCount+'+' }}</div>
              <div class="flex justify-center items-center"><span class="inline-block i-bxs:flag-alt icon-style"></span>销量人气</div>
            </div>
            <hr class="hrstyle"/>
            <div class="flex flex-col justify-between items-center" @click="goComment">
              <div class="count">商品评价</div>
              <div class="money">{{ dataList?.commentCount }}</div>
              <div class="flex justify-center items-center"><span class="i-mdi:comment-minus inline-block icon-style"></span>查看评价</div>
            </div>
            <hr class="hrstyle"/>
            <div class="flex flex-col justify-between items-center" @click="goComment">
              <div class="count">收藏人气</div>
              <div class="money">{{ dataList?.collectCount +'+' }}</div>
              <div class="flex justify-center items-center"><div class="inline-block i-material-symbols:star-rounded icon-style"></div><div>收藏商品</div></div>
            </div>
            <hr class="hrstyle"/>
            <div class="flex flex-col justify-between items-center" @click="goComment">
              <div class="count">商品信息</div>
              <div class="money">{{ dataList?.brand.name }}</div>
              <div class="flex justify-center items-center"><span class="lh-34px i-solar:crown-star-bold inline-block icon-style"></span>品牌主页</div>
            </div>
          </div>
        </div>
        
        <div class="ml-30px text-[#999] text-14px">
          <div class="text-[#333] text-20px">{{ dataList?.name }}</div>
          <div class="my-4">{{ dataList?.desc }}</div>
          <div>
            <span class="text-red-600 text-20px"><span class="text-12px">￥</span>{{ dataList?.price }}</span>
            <span class="decoration-[#999] line-through ml-3 text-14px">{{ '￥'+dataList?.oldPrice }}</span>
          </div>

          <div class="bg-[#f5f5f5] py-15px my-10px">
            <div class="mb-20px"><span class="mx-10px">促销</span>十二月好物放送，App促销购买直降120元</div>
            <div>
              <span class="mx-10px">服务</span>
              <span v-for="(item, index) in label" :key="index+'sjsh'">
                <span class="mx-4px"><span class="green">▪</span>{{item}}</span>
              </span>
              <!-- <a href="javascript:;">了解详情</a> -->
              <span class="green">了解详情</span>
            </div>
          </div>

          <div class="flex items-center my-5px" v-for="(item, index) in dataList?.specs" :key="'shsgf'+index">
            <div class="w-40px">{{item.name}}</div>
            <div class="ml-10px flex flex-wrap text-13px text-[#333]">
              <div v-for="(k, i) in item.values" :key="i+'shgs'" :title="i.name">
                <img :class="picActive===i ? 'activepic' :'border'" class="cursor-pointer w-40px h-40px pl-15px px-20px py-4px my-4px text-center mx-5px" @click="picActive=i" v-if="k.picture" :src="k.picture" />
                <div v-else :class="labelActive===i ? 'activepic' :'border'" class="cursor-pointer px-20px py-4px my-4px text-center mx-5px" @click="labelActive=i">{{ k.name }}</div>
              </div>
            </div>
          </div>

          <div class="flex h-25px text-center my-20px text-18px">
            <div class="countborder h-full w-30px bg-gray-100 cursor-pointer" @click="count--">－</div>
            <div class="countborder h-full px-30px text-16px">{{ count }}</div>
            <div class="countborder h-full w-30px bg-gray-100 cursor-pointer" @click="count++">＋</div>
          </div>

          <div class="border py-5px text-center text-[#666] w-100px">加入购物车</div>
        </div>
        </div>
      </div>
      <!-- 24热榜＋专题推荐 -->
      <div>
      <!-- 24小时 -->
        <DetailHot :hot-type="1"/>
        <DetailHot :hot-type="2"/>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.green{
  color: $xxtColor;
  margin: 0 3px;
}
.icon-style{
  color: $xxtColor;
  font-size: 18px;  
}
.hrstyle{
  border: 1px solid #ece9e9;
}
.count{
 color: #999;
}
.money{
  color:rgb(209, 27, 27);
  margin: 7px 0;
}
.pic:hover{
  border: 2px solid $xxtColor;
}
.activepic{
  border: 2px solid $xxtColor;
}
.countborder{
  border: 1px solid rgb(218, 206, 206);
}
.border{
  border: 1px solid rgb(218, 206, 206);
  border-radius: 4px;
}
</style>