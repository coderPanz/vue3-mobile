<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="categories-desc">
        <img :src="item.pictureUrl" alt="">
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
  import useHomeAdviseStore from '@/store/modules/home-advise'
  import { storeToRefs } from 'pinia';

  const homeAdviseStore = useHomeAdviseStore()
  // 方法一
  const { categories } = storeToRefs(homeAdviseStore)
  // 方法二
  // const itemNames = computed(() => {
  //   return homeAdviseStore.categories.map(item => item);
  // });
</script>

<style lang="less" scoped>
  .categories {
    display: flex;
    justify-content: center;
    margin: 20px 27px 0 27px;
    overflow-x: auto;
    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none;
    }
    .categories-desc {
      text-align: center;
      padding: 0 10px 0 10px;
      img {
        width: 48px;
        height: 48px;
      }
      .title {
        font-size: 12px;
        color: #666;
      }
    }
  }
</style>
