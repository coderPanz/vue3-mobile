<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <!-- 提升开发效率:可以在组件上监听组件点击时实现对应操作, 但需要注意的是, 在模板组件会把对应方法传递到具体组件中的根元素上, 当具体组件的根元素存在多个时就需要配置具体要传入到哪个根元素上-->
        <home-content-Type3 
        v-if="item.discoveryContentType === 3"
        :item-data="item.data"
        @click="typeClick(item)"/>
        <home-content-Type9 
        v-else-if="item.discoveryContentType === 9"
        :item-data="item.data"
        @click="typeClick(item)"/>
      </template>
    </div>
  </div>
</template>

<script setup>
  import useHomeAdviseStore from '@/store/modules/home-advise'
  import { storeToRefs } from 'pinia';
  import HomeContentType3 from '../../../components/home-content-type3/home-content-Type3.vue'
  import HomeContentType9 from '../../../components/home-content-type9/home-content-Type9.vue'
  import { useRouter } from 'vue-router';
  import useDetailsStore from '@/store/modules/home-details';

  const homeAdviseStore = useHomeAdviseStore()
  const { houseList } = storeToRefs(homeAdviseStore)

  // 在组件上监听事件, 并传入参数
  const router = useRouter()
  const detailsStore =  useDetailsStore()
  function typeClick(item) {
    router.push("/home-details/" + item.data.houseId)
    // 点击进入details组件后发送网络请求
    detailsStore.fetchgetDetailsData(item.data.houseId)
  }
</script>

<style lang="less" scoped>
  .content {
    padding: 20px 20px 0 20px;
    .list {
      display: flex;
      flex-wrap: wrap;
      padding-top: 10px;
    }
  }
</style>
