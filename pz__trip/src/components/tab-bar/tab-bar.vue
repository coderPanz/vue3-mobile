<template>
  <!-- 方案二: 通过对数据进行封装在之后使用v-for导入 -->
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData">
      <div class="tar-bar-item"
           @click="BtnClick(index, item.path)"
           :class="{ active: index === currentIndex }"
           >
        <img v-if="index !== currentIndex" :src="getDataURL(item.image)" alt="">
        <img v-else :src="getDataURL(item.imageAction)" alt="">
        <span class="text">{{ item.text }}</span>
    </div>
    </template>
  </div>
</template>

<script setup>
  import tabbarData from "@/assets/data/tarbar";
  import { ref, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";
  const router = useRouter()
  // vite src加载的特殊方式
  const getDataURL = (image) => {
    // 参数一: 相对路径
    return new URL(`../../assets/img/tabbar/${image}`, import.meta.url).href
  }
  
  // 设置动态active
  function BtnClick(index, routpath) {
    currentIndex.value = index
    router.push(routpath)
  }
   // 解决默认tab-bar默认索引的bug
  // 监听路由的改变, 并返回把索引赋值给currentindex
  const route = useRoute()
  const currentIndex = ref(0)
  watch(route, (newRout) => {
    const index = tabbarData.findIndex(item => item.path == newRout.path)
    if(index === 1) return
    currentIndex.value = index
  })
</script>

<style lang="less" scoped>
  .tab-bar {
    position: fixed;
    bottom: -1px;
    right: 0;
    left: 0;
    height: 55px;
    display: flex;
    background-color: #fff;
    // border-top: 1px solid #aaa; 
  }
  .tar-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 55px;
  }
  .text {
    font-size: 14px;
  }
  img {
    display: block;
    width: 30px;
  }
  .active {
    color: #ff9854;
  }
</style>
