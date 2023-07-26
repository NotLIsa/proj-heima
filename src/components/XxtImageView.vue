<script setup>
import { ref, watch } from 'vue';
import { useMouseInElement }  from '@vueuse/core'
defineProps(['data']);
//1.小图切大图显示
const curIndex = ref(0);
/**
 * 1. 左侧滑块跟随鼠标移动
 * 2. 右侧大图放大效果实现
 * 3. 鼠标移入控制滑块和大图显示隐藏
 */
//2.获取鼠标相应位置
const target = ref(null);
const { elementX, elementY, isOutside } = useMouseInElement(target);
const top = ref(0);
const left = ref(0);
const positionX = ref(0);
const positionY = ref(0);
watch([elementX, elementY, isOutside], () => {
  if(isOutside.value){
    return;
  }
  if(elementX.value > 100 && elementX.value < 300){
    left.value = elementX.value - 10;
  }
  if(elementX.value>300){
    left.value=200;
  }
  if(elementX.value<100){
    left.value=0;
  }
  if(elementY.value >100 && elementY.value <300){
    top.value = elementY.value-50;
  }
  if(elementY.value >300){
    top.value=200;
  }
  if(elementY.value<100){
    top.value=0;
  }
  positionX.value = -left.value*2;
  positionY.value = -top.value*2
})
</script>
<template>
  <div class="h-400px w-500px flex relative">
  <!-- 左侧大图 -->
    <div ref="target">
      <img class="w-400px h-400px bg-blue-100" :src="data?.[curIndex]"/>
      <!-- 蒙层小滑块 -->
      <div class="layer" v-show="!isOutside" :style="{left:`${left}px`, top:`${top}px`}"></div>
    </div>
    <div class="ml-15px flex flex-col justify-between">
    <!-- 右侧小图 -->
      <div v-for="(item, index) in data" :key="index + 'shsg'" @mouseenter="curIndex=index">
        <img :src="item" class="w-70px h-70px" :class="curIndex===index ? 'activepic' : 'pic'"/>
      </div>
    </div>
    <!-- 放大镜大图 -->
    <div class="large" :style="[
      {
        backgroundImage: `url(${data?.[curIndex]})`,
        backgroundPositionX: `${positionX}px`,
        backgroundPositionY: `${positionY}px`,
      },
    ]" v-show="!isOutside"></div>
  </div>
 <!-- ({{ (elementY>0 && elementY<400 && elementX>0 && elementX<400 ) ? elementX : !isOutside}},
  {{ (elementY>0 && elementY<400 && elementX>0 && elementX<400 ) ? elementY : !isOutside}}) -->
</template>
<style lang="scss" scoped>
.large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    z-index: 500;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    // 背景图:盒子的大小 = 2:1  将来控制背景图的移动来实现放大的效果查看 background-position
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }
.pic:hover{
  border: 2px solid $xxtColor;
}
.activepic{
  border: 2px solid $xxtColor;
}
.layer {
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 0.2);
    // 绝对定位 然后跟随咱们鼠标控制left和top属性就可以让滑块移动起来
    left: 0;
    top: 0;
    position: absolute;
  }

</style>