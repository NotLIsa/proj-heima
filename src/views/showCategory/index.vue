<script setup>
import { ArrowRight } from '@element-plus/icons-vue';
import { ref, watchEffect } from 'vue';
import { getCategoryFilterAPI } from '@/apis/category';
import { useCategoryStore } from '@/store/category';
const categoryStore = useCategoryStore();
const childMenu = ref()
const getchildMenu = async() => {
  const res = await getCategoryFilterAPI(categoryStore.curCategoryId)
  childMenu.value = res.result;
  console.log('😄',childMenu.value)
}
watchEffect(()=>{
  getchildMenu()
})
</script>
<template>
  <div class="bg-[#f5f5f5]">
    <div class="w-1200px m-auto">
      <div v-if="childMenu" class="">
        <el-breadcrumb :separator-icon="ArrowRight" class="py-30px">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-if="childMenu.parentName">{{ childMenu?.parentName }}</el-breadcrumb-item>
          <el-breadcrumb-item v-if="childMenu.name">{{ childMenu.name }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div v-else>暂时没有数据</div>
    </div>
  </div>
</template>