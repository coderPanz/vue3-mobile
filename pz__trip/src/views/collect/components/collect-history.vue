<template>
  <div class="favor-page">
    <template v-for="(item, index) in houseItem" :key="index">
      <div class="favor-item">
      <div class="img">
        <img :src="item.pictureList[0]" alt="">
      </div>
      <div class="desc">
        <div class="location-desc">
          <span class="location">{{ item.address }}</span>
          <span class="detail">{{ item?.unitSummeries[0]?.text }}·{{ item?.unitSummeries[1]?.text }}</span>
        </div>
        <div class="name">{{ item.unitName }}</div>
        <div class="tip1 tips">{{ item?.houseTags[0]?.text }}</div>
        <div class="tip2 tips">{{ item?.houseTags[1]?.text }}</div>
        <div class="price">
          <span class="new-price">￥{{ item.finalPrice }}</span>
          <span class="old-price">￥{{ item.productPrice }}</span>
          <span class="discount">
            <van-icon name="volume-o" />
            {{ item?.priceTipBadge?.text }}
          </span>
        </div>
      </div>
      </div>

    </template>
      
  </div>
</template>

<script setup>
import useCollectFavorStore from '@/store/modules/collect-favor';
import { storeToRefs } from 'pinia';

  const collectFavorStore = useCollectFavorStore()
  const { houseItem } = storeToRefs(collectFavorStore)

</script>

<style lang="less" scoped>
  .favor-page {
    // 设置在favor组件内滚动
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 0 20px 150px 20px;
    // padding-bottom: 100px;
    .favor-item {
      .img {
        img {
          width: 100%;
          height: 220px;
          border-radius: 5px;
        }
        
      }
      .desc {
        .location-desc {
          margin-top: 5px;
          .location {
            font-size: 12px;
            color: #fff;
            background: var(--van-bgc-color);
            border-radius: 2px
          }
          .detail {
            font-size: 12px;
            color: var(--detail-color);
            margin-left: 10px;
          }
        }
        .name {
          font-size: 18px;
          margin-top: 6px;
        }
        .tips {
          display: inline-block;
          border-radius: 2px;
          color: rgb(255, 102, 102);
          background: rgba(255, 102, 102, 0.1);
          margin-top: 5px;
        }
        .tip2 {
          margin-left: 5px;
        }
        .price {
          margin-bottom: 10px;
          .old-price {
            color: #999999;
            text-decoration: line-through;
          }
          .new-price {
            padding-right: 10px;
            font-size: 20px;
            color: #ff9645;
          }
          .discount {
            font-size: 12px;
            color: #fff;
            background-color: #fb4a4a;
            border-radius: 10px;
            padding: 0 5px;
            margin-left: 8px;
          }
        }
      }
    }
  }
</style>
