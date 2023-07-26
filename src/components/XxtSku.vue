<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps(['data'])
const labelActive = ref(0);
const picActive = ref(0);
const emits = defineEmits(['changeSku']);
const selectskus = ref();
const selectspecs = ref();
/* todo-开始误将  @click="changeSku""写成 @click="changeSku()"导致父组件接受数值一直显示undefined */
// const changeSku = () => {
  // count.value++

  // console.log(selectspecs.value,'💥💥specs');
  // console.log(props.data.specs,'💥💥specs');
  // console.log('子组件',count.value)
  // console.log(labelActive,picActive);
// }
const clickSpecs = (item,k) => {
  emits('changeSku', labelActive.value);
  selectskus.value = props.data.skus.filter((sku) => {
    return sku.specs.some((specs,index) => specs[index].name=k.name);
  });
  // selectskus.value = props.data.skus;
  selectspecs.value = props.data.specs;
  console.log(item,k,'ghhh');
  console.log(k.name,'规格');
  console.log(selectskus.value,'💥skus');
  
}
onMounted(() => {})
</script>
<template>
  <div class="flex items-center my-5px" v-for="(item, index) in data?.specs" :key="'shsgf'+index">
    <div class="w-40px">{{item.name}}</div>
    <div class="ml-10px flex flex-wrap text-13px text-[#333]">
      <div v-for="(k, i) in item.values" :key="i+'shgs'" :title="i.name">
        <img v-if="k.picture" :class="picActive===i ? 'activepic' :'border'" class="cursor-pointer w-40px h-40px pl-15pxpy-4px my-4px text-center mx-5px" @click="clickSpecs(item,k)" :src="k.picture" />
        <div v-show="k.name" v-else :class="labelActive===i ? 'activepic' :'border'" class="cursor-pointer px-20px py-4px my-4px text-center mx-5px" @click="clickSpecs(item,k)">{{ k.name }}</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.activepic{
  border: 2px solid $xxtColor;
}

.border{
  border: 1px solid rgb(218, 206, 206);
  box-sizing: border-box;
  border-radius: 4px;
}
</style>