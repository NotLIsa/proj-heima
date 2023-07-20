<!--
 * @Author: zhaoshali
 * @Date: 2023-07-19 11:05:13
 * @LastEditTime: 2023-07-20 12:08:56
 * @Description: 
-->
<script setup>
const menu = ['关于我们','帮助中心','售后服务','配送与验收','商务合作','搜索推荐','友情链接'];
</script>
<template>
  <div>
    <div class="flex h-full p-40x w-1200px m-auto pb-60px">
      <div class="w-25% h-full items-center justify-center text-center">
        <div class="mb-40px text-gray-400">客户服务</div>
        <div class="flex justify-center items-center">
          <div class="border  mr-20px">
            <div class="i-ion:chatbubble-working text-gray-500 w-40px h-40px mb-10px"></div>
            <div class="text-gray-400 ">在线客服</div>
          </div>
          <div class="border w-100px">
            <div class="i-akar-icons:question-fill text-gray-500 w-40px h-40px mb-10px"></div>
              <div class="text-gray-400 ">问题反馈</div>
          </div>
        </div>
      </div>
      <div class="w-25% b-border h-full items-center justify-center text-center">
        <div class="mb-40px text-gray-400">客户服务</div>
        <div class="flex justify-center items-center">
          <div class="border  mr-20px">
            <div class="i-majesticons:messages text-gray-500 w-40px h-40px mb-10px"></div>
            <div class="text-gray-400 ">公众号</div>
          </div>
          <div class="border w-100px">
            <div class="i-ant-design:weibo-outlined text-gray-500 w-40px h-40px mb-10px"></div>
              <div class="text-gray-500">微博</div>
          </div>
        </div>
      </div>
      <div class="w-25% b-border h-full items-center justify-center text-center">
        <div class="mb-40px text-gray-400">下载APP</div>
        <div class="flex justify-center items-center">
          <div class="border  mr-20px">
            <img src="../assets/image/qrcode.jpg" class="w-90px h-90px"/>
          </div>
          <div class="text-gray-400 text-14px">
            <div>扫描二维码</div>
            <div class="mb-12px">立马下载APP</div>
            <ElButton type="primary">下载页面</ElButton>
          </div>
        </div>
      </div>
      <div class="b-border text-gray-400 w-25% text-center">
        <div class="mb-40px">服务热线</div>
        <div class="flex flex-col h-100px justify-center">
          <div class="text-16px text-gray-500 mb-10px">400-0000-000</div>
          <div class="text-12px">周一至周日 8：00-18:00</div>
        </div>
      </div>
    </div>
    <!-- bxs:bowl-hot   bxs:cat    bxs:car-wash -->
    <div class="m-auto bg-[#333]">
    <div class="w-1200px m-auto">
      <div class="flex items-center text-20px text-[#f3f4f8] py-40px">
        <div class="w-1/3 flex  justify-center items-center"><div class=" i-carbon:accessibility-alt text-50px inline-block mr-3"></div>价格亲民</div>
        <div class="w-1/3 flex  justify-center items-center"><div class=" i-iconamoon:3d-light text-50px inline-block mr-3"></div>物流快捷</div>
        <div class="w-1/3 flex  justify-center items-center"><div class=" i-carbon:airport-01 text-50px inline-block mr-3"></div>品质新鲜</div>
      </div>
    </div>
      <hr class="w-90% m-auto border-1px border-[#525258]"/>
      <div class="text-[#81838f] text-sm w-1200px m-auto py-20px pt-30px">
        <div class="flex justify-center">
          <div v-for="(item,index) in menu" :key="index+'sejg'" class="">
            {{ item }}
            <span class="mr-2" v-show="index<menu.length-1">
              <el-divider direction="vertical" />
            </span>
          </div>
        <div>
      </div>
      </div>
      <div class="text-center mt-2 text-12px ">CopyRight @ 小兔鲜儿</div>
    </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/styles/var.scss';
.border-foot{
  border-top: 1px solid #525258;
}
.b-border{
  border-left: 1px solid #f3f4f8;
}
.border{
  border: 1px dashed #dcdfe6;
  width: 100px;
  height: 100px;
  display: flex;
  font-size: 12px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>