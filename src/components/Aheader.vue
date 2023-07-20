<!--
 * @Author: zhaoshali
 * @Date: 2023-07-19 11:05:13
 * @LastEditTime: 2023-07-19 19:19:31
 * @Description: 
-->
<script setup>
import { ref,onMounted } from 'vue';
import { Search } from '@element-plus/icons-vue'
import { getCategory } from '@/apis/testAPI';
// const menu = ['首页','居家','美食','服饰','母婴','首页','居家','美食','首页','杂项'];
// type menuType = {
//   children: {
//     children: object,
//     goods: object,
//     id: number,
//     name: string,
//     picture: string,
//   }[],
//     goods: {
//       desc: string,
//       id: number,
//       name: string,
//       orderNum: Object,
//       picture: string,
//       price: number,
//     }[],
//     id: number,
//     name: string,
// }
// const menu:menuType = ref()
const menu = ref();
const input3 = ref('');
const getcategory = async() => {
  const res = await getCategory();
  menu.value = res.result;
  console.log(menu.value,'resss')
}
onMounted(() => {
  getcategory();
})
</script>
<template>
  <div class="container m-auto">
    <div class="flex h-100px justify-between px-30px">
     <div class="flex">
      <img src="../assets/image/logo.png" />
      <div class="flex">
        <div v-for="(item,index) in menu" :key="index+'sjg'" class="pt-2 lh-100px pl-50px">
         {{ item.name }}
      </div>
      </div>
     </div>
     <div class="flex h-100% items-center pt-2">
        <div class="mx-20px">
          <el-input
          v-model="input3"
          class="w-50 m-2"
          size="small"
          placeholder="搜一搜"
          :prefix-icon="Search"
        />
        </div>
          <div class="i-material-symbols:shopping-cart-outline-rounded text-24px text-[#666]"></div>
        </div>
  </div>
  </div>
  
</template>
<style lang="scss" scoped>
:deep(.el-icon svg){
  color: #333;
}
:deep(.el-input--small .el-input__wrapper){
  border-radius: 40px;
  width:120px;
  border: 1px solid #dcdfe6;
  box-shadow: none;
}
:deep(.el-input){
  --el-input-border:none;
}
</style>