<!--
 * @Author: zhaoshali
 * @Date: 2023-07-19 14:30:32
 * @LastEditTime: 2023-07-24 14:28:45
 * @Description: 
-->
<script setup>
import { ArrowRight } from '@element-plus/icons-vue';
import { getBannerAPI } from '@/apis/index';
import { getChildCategoryAPI } from '@/apis/layout';
import { ref, onMounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';
import { useCategoryStore } from '@/store/category';
const categoryStore = useCategoryStore();
const bannerList = ref([])
const childcategoryList = ref({});
const route = useRoute();
const newCategory = ref([])
const curActive = ref(0);
const getchildcategory = async(id = route.params.id) => {
  const res = await getChildCategoryAPI(id);
  childcategoryList.value = res.result;
  // console.log(childcategoryList.value,'🍡二级分类');
};
//目标路由参数变化时，可以把分类数据接口重新发送
const getSomeBanners = async(params=2) => {
  const res = await getBannerAPI({params});
  bannerList.value = res.result;
};
onMounted(() => { 
  getchildcategory();
  getSomeBanners();
 }
);
/**
 * 路由缓存问题
 * 原因：当路由只有参数变化时，会复用组件实例
 * 解决办法：① onBeforeRouteUpdate (在意性能问题时选这个，精细化控制) （优先选择）
 *          ② 选择key 绑定到routerview上面
 */
onBeforeRouteUpdate((to)=>{
  // console.log('路有变化了',to.params.id);
  //存在问题：使用最新的路由参数请求最新的分类数据 解决方法，传当前路由路径to，直接重新获取最近路径的数据 const getchildcategory = async(id = route.params.id)！！！
  getchildcategory(to.params.id);
})
watchEffect(() => {
  if (childcategoryList.value && childcategoryList.value.children) {
    categoryStore.curCategoryId = childcategoryList?.value.children?.[curActive.value].id;
    const newChildren = [...childcategoryList.value.children];
    newChildren.splice(curActive.value, 1);
    newCategory.value = newChildren;
    // console.log('🛐🛐🛐', childcategoryList?.value.children?.[curActive.value].id)
    // console.log('🛐🛐',curActive.value)
    // console.log(newCategory.value,'过滤curActive后的二级分类')
  }
})
</script>

<template>
  <div class="w-full bg-[#f5f5f5] pb-40px">
    <div class="w-1200px m-auto text-center">
      <el-breadcrumb :separator-icon="ArrowRight" class="py-30px">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{childcategoryList.name}}</el-breadcrumb-item>
      </el-breadcrumb>
      <swiper :banners="bannerList"/>
      <div class="py-30px px-50px bg-white mt-30px">
        <div class="text-26px text-[#333] font-600">全部分类</div>
        <div class="flex flex-wrap gap-x-60px mt-40px font-700">
          <RouterLink :to="`/category/showCategory/${item.id}`" v-for="(item,index) in childcategoryList.children" :key="index+'sjsg'" >
            <div class="w-100px h-130px cursor-pointer text-14px" @click="curActive = index">
              <img v-img-lazy="item.picture" class="w-100px bg-gray-200 h-100px border-2 mb-1" :src="item.picture"/>
              <div :class="curActive===index?'text-[#27ba9b]':''">{{ item.name }}</div>
            </div>
          </RouterLink>

        </div>
      </div>
      <div class="py-30px px-30px bg-white mt-30px">
        <div class="font-700 text-24px mb-40px">{{ '一 ' + childcategoryList?.children?.[curActive]?.name + ' 一' }}</div>
        <div class="grid grid-cols-5 gap-x-25px ml-20px">
          <div v-for="(k, i) in childcategoryList?.children?.[curActive]?.goods" :key="i+'shsfg'" class="w-180px">
            <img v-img-lazy="k.picture" :src="k.picture" class="w-180px h-180px object-cover"/>
            <div class="truncate my-2">{{ k.name }}</div>
            <div class="text-gray-500 truncate">{{ k.desc }}</div>
            <div class="text-red-700 font-400 text-20px mt-2">￥{{ k.price }}</div>
          </div>
        </div>
      </div>
      <div class="py-30px px-30px bg-white mt-30px" v-for="(m, n) in newCategory" :key="n+'sjsgh'">
        <div class="font-700 text-24px mb-40px">{{ '一 ' + m.name + ' 一' }}</div>
        <div class="grid grid-cols-5 gap-x-25px ml-20px">
          <div v-for="(k, i) in newCategory[n].goods" :key="i+'shsfg'" class="w-180px">
            <img v-img-lazy="k.picture" :src="k.picture" class="w-180px h-180px object-cover"/>
            <div class="truncate my-2">{{ k.name }}</div>
            <div class="text-gray-500 truncate">{{ k.desc }}</div>
            <div class="text-red-700 font-400 text-20px mt-2">￥{{ k.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

