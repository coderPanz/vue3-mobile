<template>
  <div class="app">
    <!-- <router-view />渲染匹配到的路由-->
    <!-- 优化: 1.在切换 tab-bar 组件的时候 希望让组件保持活跃状态. 好处: 可以避免频繁的发送网络请求
              2.在home中我们监听了window(就是在如何页面中)滑动到底部时就发送一层网络请求, 那么当切换到其他tab-bar的时候该页面可能已经显示到底部了, 于是又发送了一次网络请求, 解决方法: 监听页面元素的滚动即可, 而不是监听整个window的滚动-->
    <!-- 在keep-alive中一个动态组件, 当切换到对应组件时在替换掉 -->
    <!-- 注意: 插槽不能写注释, 是组件替换插槽 -->
    <router-view v-slot="{ Component }">
      <keep-alive include="home">
        <component :is="Component" />
      </keep-alive>
    </router-view> 
    <tab-bar class="tab-bar" v-show="!route.meta.hideTabBar"/>  
    <loading />
  </div>
</template>

<script setup>
import tabBar from './components/tab-bar/tab-bar.vue';
import { useRoute } from 'vue-router';
import loading from './components/loading/loading.vue';
  const route = useRoute()
</script>

<style lang="less" scoped>
</style>
