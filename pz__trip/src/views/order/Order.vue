<template>
  <div class="order">
    <nav-bar 
    class="order-item"
    :title="'订单列表'" 
    :nav-ctrl="[{title:'全部订单', name:'allOrder'}, 
    {title:'待支付', name:'pay'}, 
    {title:'待评价', name:'score'}]"
    >
    <template #allOrder>
      <allOrder />
    </template>

    <template #pay>
      <pay />
    </template>

    <template #score>
      <score />
    </template>

    </nav-bar>
  </div>
</template>

<script setup>
import navBar from '@/components/tab-bar/nav-bar.vue';
import allOrder from './components/all-order.vue'
import pay from './components/pay.vue'
import score from './components/score.vue'
import useOrderStateStore from '@/store/modules/order-state'
  // 统一在父组件中发送网络请求
  const orderStateStore =  useOrderStateStore()
  orderStateStore.fetchGetOrderData("pend")
  
</script>

<style lang="less" scoped>
  .order {
    .order-item {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }
  }
</style>
