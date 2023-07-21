<!--
 * @Author: zhaoshali
 * @Date: 2023-07-19 11:05:13
 * @LastEditTime: 2023-07-21 14:32:52
 * @Description: 
-->
<script setup>
import { ref ,onMounted} from 'vue';
import { Search } from '@element-plus/icons-vue'
import { useCategoryStore } from '@/store/category';
const categoryStore = useCategoryStore();
// const { categoryList, getcategory } = useCategoryStore();
// import { getCategory } from '@/apis/testAPI';
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
// const menu = ref();
const input3 = ref('');
// const getcategory = async() => {
//   const res = await getCategory();
//   menu.value = res.result;
//   console.log(menu.value,'resss')
// }
onMounted(() => {
  categoryStore.getcategory();
  console.log(categoryStore.categoryList,'categoryList')
})
const curActive = ref(-1)
</script>
<template>
  <div class="w-1200px m-auto">
    <div class="flex h-100px justify-between pt-10px">
     <div class="flex">
      <img src="../assets/image/logo.png" />
      <div class="flex ml-40px" v-show="categoryStore.categoryList">
        <RouterLink to="/"  class="pt-2 lh-70px font-700 my-15px mx-15px cursor-pointer" :class="curActive===-1?'active':''" @click="curActive=-1">首页</RouterLink>
        <RouterLink :to="`/category/${item.id}`" v-for="(item,index) in categoryStore.categoryList" :key="index+'sjg'" class="pt-2 lh-70px font-700 my-15px mx-15px cursor-pointer" :class="curActive===index?'active':''"
       @click="curActive=index">
          <div>
            {{ item.name }}
          </div>
        </RouterLink>
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
.active{
  color: $xxtColor;
  font-weight: 700;
  border-bottom: 2px solid $xxtColor;

}
.app-header-sticky{ 
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top:0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  //此处为关键样式！！！
  //状态一，往上平移自身高度+完全透明
  transform: translateY(-100%);
  opacity: 0;

  //状态二：移除平移+完全不透明
  &.show{
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

}
:deep(.el-icon svg){
  color: black;
  font-weight: 700;
}
:deep(.el-input--small .el-input__wrapper){
  border-radius: 40px;
  width:120px;
  border-bottom: 1px solid #dcdfe6;
  box-shadow: none;
}
:deep(.el-input){
  --el-input-border:none;
}
</style>