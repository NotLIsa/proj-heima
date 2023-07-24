<!--
 * @Author: zhaoshali
 * @Date: 2023-07-19 15:11:48
 * @LastEditTime: 2023-07-19 15:38:38
 * @Description: 
-->
<script setup>
import Header from '@/components/Aheader.vue'
import Footer from '@/components/Afooter.vue'
import Nav from '@/components/ANav.vue'

</script>
<template>
  <div class="w-full">
    <Nav />
    <Header />
    <RouterView :key="$route.fullpath"/>
    <Footer />
  </div>
</template>