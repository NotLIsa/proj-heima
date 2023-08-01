<script setup>
import { fetchHotGoodsAPI } from '@/apis/detail';
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  hotType: {
    type: Number // 将 Type 修改为 type
  }
});

const TYPEMAP = {
  1: '24小时热榜',
  2: '周热榜'
};

const title = computed(() => TYPEMAP[props.hotType]);
const good = ref([]);
const route = useRoute();

const gethotgoods = async () => {
  try {
    const res = await fetchHotGoodsAPI({
      id: route.params.id,
      type: props.hotType,
    });
    good.value = res.result;
    console.log(good.value, title.value);
  } catch (error) {
    console.error('Error fetching hot goods:', error);
  }
};

onMounted(() => {
  gethotgoods();
});
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <div class="flex">
      <div v-for="(item, index) in good" :key="index + 'sdhst'">
        <RouterLink :to="`/detail/${item.id}`" class="w-250px text-center mr-50px">
          <img class="w-250px h-250px" :src="item.picture" />
          <div class="truncate">{{ item.name }}</div>
          <div class="text-[#666] truncate my-2 text-14px">{{ item.desc }}</div>
          <div class="text-red-700 font-600">￥{{ item.price }}</div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
