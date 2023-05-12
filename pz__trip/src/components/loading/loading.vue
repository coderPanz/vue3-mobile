<template>
  <!-- 通过仓库变量决定loading的显示和隐藏, 而变量是由发送网络请求决定的 -->
  <div class="loading" v-if="mainStore.isLoading" @click="loadingFalse">
    <div class="bgc">
      <img src="@/assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/store/modules/main';

  const mainStore =  useMainStore()
  function loadingFalse() {  
    mainStore.isLoading = false
  }
</script>

<style lang="less" scoped>
  .loading {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    z-index: 999;

    background-color: rgba(0, 0, 0, 0.5);
    .bgc {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 104px;
      height: 104px;
      background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;
    }
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 11px;
    }
  }
</style>
