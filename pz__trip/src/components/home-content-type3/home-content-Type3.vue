<template>
  <div class="type3">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData?.image.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span>{{ itemData.location }}</span>
        </div>
        <div class="summary">{{ itemData?.summaryText }}</div>
        <div class="name">{{ itemData?.houseName }}</div>
        <div class="price">
          <div class="new">￥{{ itemData.finalPrice }}</div>
          <div class="old">￥{{ itemData.productPrice }}</div>
          <div class="tip">{{ itemData.priceTipBadge?.text }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

  const props =  defineProps({
    itemData: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<style lang="less" scoped>
  .type3 {
    width: 50%;
    .item-inner {
      position: relative;
      margin: 5px;
      background: #fff;
      border-radius: 6px;
      overflow: hidden;
      .cover {
        img {
          width: 100%;
        }
      }
      .info {
        padding: 8px 10px;
        .location {
          padding-bottom: 5px;
          img {
            width: 15px;
            height: 15px;
          }
          span {
            font-size: 12px;
          }
        }
        .summary {
          font-size: 12px;
        }
        .name {
          margin: 5px 0;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .price {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          .new {
            color: #ff9854;
          }
          .old {
            text-decoration: line-through;
          }
          .tip {
            text-align: center;
            padding-top: 2.5px;
            border: #ff9854 solid 1px;
            border-radius: 5px;
            background-color: #FF7F50;
            margin-top: 2px;
          }
        }
      }
    }

  }
</style>
