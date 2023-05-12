<template>
  <div class="search-box">
    <div class="data">
      <div class="start-data">
        <span class="com">住</span>
        <span class="new">{{ startDateStr }}</span>
      </div>
      <div class="end-data">
        <span class="com">离</span>
        <span class="new">{{ endDateStr }}</span>
      </div>
    </div>
    <div class="key-location-house">
      <span class="desc com">关键字/位置/民宿</span>
    </div>
    <div class="search-btn">
      <img src="@/assets/img/home/搜索.png" alt="">
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/store/modules/main';
import { formatMonthDay } from '@/utils/format_date';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)
  const startDateStr = computed(() => formatMonthDay(startDate.value, "MM.DD"))
  const endDateStr = computed(() => formatMonthDay(endDate.value, "MM.DD"))

</script>

<style lang="less" scoped> 
  .search-box {
    display: flex;
    width: 100%;
    align-items: center;
    background: #f5f5f5;
    border-radius: 8px;
    height: 32px;
    padding: 8px;
    margin-top: -6px;
    .com {
      color: #888;

    }
    .key-location-house {
      padding-left: 10px;
      flex: 1;
    }
    .search-btn {
      
      img {
        width: 25px;
        height: 25px;
      }
    }
}
</style>
