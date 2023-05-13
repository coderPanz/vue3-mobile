<template>
  <div class="nav-bar">
    <van-nav-bar
    :title="title"
    left-text="返回"
    left-arrow
    @click-left="backClick"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
    </van-nav-bar>
  <van-tabs v-model:active="active">
    <template v-for="(item, index) in navCtrl" :key="index">
      <van-tab :title="item.title">
        <slot :name="item.name">
        </slot>
      </van-tab>
    </template>
</van-tabs>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

  // 让外部组件把数据传进来
  const props = defineProps({
    title: {
      type: String,
      default: "标题"
    },
    navCtrl: Array,
    default: []
  })
  const router = useRouter()
  function backClick() {
    router.push("/Home")
  }
  const active = ref()
  
</script>

<style lang="less" scoped>
</style>
