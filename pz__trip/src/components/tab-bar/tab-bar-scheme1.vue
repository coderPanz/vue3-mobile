<template>
  <!-- 方案一: 直接写入数据渲染 -->
  <div class="tab-bar">
    <div class="tar-bar-item">
      <img src="./imgage/tabbar/tab_home.png" alt="">
      <span class="text">首页</span>
    </div>
    <div class="tar-bar-item">
      <img src="./imgage/tabbar/tab_favor.png" alt="">
      <span class="text">收藏</span>
    </div>
    <div class="tar-bar-item">
      <img src="./imgage/tabbar/tab_order.png" alt="">
      <span class="text">订单</span>
    </div>
    <div class="tar-bar-item">
      <img src="./imgage/tabbar/tab_message.png" alt="">
      <span class="text">消息</span>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
  .tab-bar {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    height: 55 px;
    display: flex;

    border-top: 1px solid #aaa; 
  }
  .tar-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text {
    font-size: 14px;
  }
  img {
    display: block;
    width: 36px;
  }
  .active {
    color: #ff9854;
  }
</style>
