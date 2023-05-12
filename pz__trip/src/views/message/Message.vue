<template>
  <div class="message">
    <nav-bar :title="'消息中心'" />
    <messageImage class="image"/>
  </div>
</template>

<script setup>
import navBar from '@/components/tab-bar/nav-bar.vue';
import messageImage from './compontens/message-image.vue'
</script>

<style lang="less" scoped>
  
</style>
