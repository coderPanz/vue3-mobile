<template>
  <div class="collect">
    <nav-bar :title="'收藏'" :nav-ctrl="[{title:'我的收藏', name:'favor'}, {title:'浏览历史', name:'history'}]">
      <template #favor>
        <collectFavor />
      </template>
      <template #history>
        <collectHistory />
      </template>
    </nav-bar>
  </div>
</template>

<script setup>
import navBar from '@/components/tab-bar/nav-bar.vue';
import useFavorStore from '@/store/modules/collect-favor';
import collectFavor from './components/collect-favor.vue';
import collectHistory from './components/collect-history.vue';

  // 在父组件中发送网络请求
  const favorStore = useFavorStore()
  favorStore.fetchgetHouseItems()

</script>

<style lang="less" scoped>
  .collect {
    .nav-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
  }
</style>
