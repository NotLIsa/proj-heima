<!--
 * @Author: zhaoshali
 * @Date: 2023-07-31 11:59:16
 * @LastEditTime: 2023-08-01 09:42:10
 * @Description: 
-->
<script setup>
import { ref, onMounted } from 'vue';
import powerSet from '@/composable/power-set'
const props = defineProps(['goods'])
const labelActive = ref(0);
// const picActive = ref(0);
const emits = defineEmits(['change']);
// const selectspecs = ref();
//切换选中状态
const changeSelectedStatus = (item, k) => {
  //不可选中直接返回
  if(k.disabled) return
  
  emits('change', labelActive.value);
  if (k.selected) {
    k.selected = false;
  } else {
    item?.values.forEach((value) => (value.selected = false));
    k.selected = true;
  }
  const pathMap = getPathMap(props.goods)
  // const selecArr = item?.values.find((value) => value.selected);
  // selectspecs.value = goods.specs;
  console.log(pathMap, 'pathMap==========');
  console.log(props.goods.specs, 'props==========');
  initDisabledStatus(props.goods.specs,pathMap)
}
//生成有效的路径字典对象
const getPathMap = (goods) => {
  const pathMap = {}
  //1.根据skkus字段生成有效的skus数组
  const effectiveSkus = goods.skus.filter(sku => sku.inventory > 0)
  //2.根据有效的sku使用算法（子集算法[1,2] => [1], [2,], [1,2]）
  effectiveSkus.forEach(sku => {
    //2.1获取匹配的valueName组成的数组
    const selectedValArr = sku.specs.map(k => k.valueName)
    //2.2使用power算法获取子集
    const valueArrPowerSet = powerSet(selectedValArr)
    //3.把得到的子集生成最终的路径字典对象
    valueArrPowerSet.forEach(arr=>{
      //初始化key 数组join => 字符串 对象的key
      const key = arr.join('-')
      //如果已经存在当前key了 就往数组中直接添加skuID 如果不存在key 直接做赋值
      if(pathMap[key]){
        pathMap[key].push(sku.id)
      }else{
        pathMap[key] = [sku.id]
      }
    })
  })
  return pathMap
}
//初始化禁用状态
const initDisabledStatus = (specs, pathMap) => {
  specs.forEach(spec => {
    spec.values.forEach(val => {
      if(pathMap[val.name]){
        val.disabled = false
      }else{
        val.disabled = true
      }
    })
  })
}
onMounted(() => {})
</script>
<template>
  <div class="flex items-center my-5px" v-for="(item, index) in goods?.specs" :key="'shsgf'+index">
    <div class="w-40px">{{item.name}}</div>
    <div class="ml-10px flex flex-wrap text-13px text-[#333]">
      <div v-for="(k, i) in item.values" :key="i+'shgs'" :title="i.name">
        <img v-if="k.picture" :class="{activepic:k.selected,disabled:k.disabled}" class="border w-40px h-40px" @click="changeSelectedStatus(item,k)" :src="k.picture" :title="k.name"/>
        <div v-else :class="k.selected? 'activepic':''" class="border px-20px py-4px" :title="k.name" @click="changeSelectedStatus(item,k)">{{ k.name }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.activepic{
  border: 1px solid $xxtColor!important;
}
.disabled{
  background: pink;
}
.border{
  text-align: center;
  margin: 4px 5px;
  cursor: pointer;
  border: 1px solid rgb(218, 206, 206);
  box-sizing: border-box;
  border-radius: 4px;
}
</style>