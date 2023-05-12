<template>
  <div class="all-order">
    <template v-for="(item, index) in orderData" :key="item.orderId">
      <div class="order-item">
        <div class="title-state">
          <span class="title">{{ item.unitName }}</span>
          <span class="awaitPay">{{ item.orderStatusDesc }}</span>
        </div>
        <div class="image">
          <img :src="item.unitPicture" alt="">
          <div class="cover">
            <div class="start-date">
              <div class="day">{{ dayTime(index) }}</div>
              <div class="hour">{{ item.checkInLatestTime }}</div>
            </div>
            <img src="@/assets/img/order/icon_right_orderlist.png" alt="" style="width: 16px;height: 12px">
            <div class="start-date">
              <div class="day">{{ dayTime(index) }}</div>
              <div class="hour">{{ item.checkOutLatestTime }}</div>
            </div>
            <div class="Price">
              <div class="totalPrice">支付总价</div>
              <div class="payPrice">￥{{ item.prepayAmount }}</div>
            </div>
          </div>
        </div>
        <div class="details-state">
          <div class="left">
            <img src="@/assets/img/order/icon-time.png">
            <span class="time">19分钟</span>
            <span class="tips">{{ item.summary }}</span>
          </div>
          <div class="right">
            <span class="linkHost">联系房东</span>
            <span class="toPay linkHost">去支付</span>
          </div>
        </div>
      </div>
    </template>
    
  </div>
</template>

<script setup>
import useOrderStateStore from '@/store/modules/order-state';
import { storeToRefs } from 'pinia';
import { formatMonthDay } from '@/utils/format_date'

  const orderStateStore = useOrderStateStore()
  const { orderData } = storeToRefs(orderStateStore)

  // 日期处理
  const dayTime = (index) => {
    return formatMonthDay(orderData.value[index].checkOutDate) 
  }
</script>

<style lang="less" scoped>
  .all-order {
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 0 20px 85px 20px;
    .order-item {
      .title-state {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        .title {
          display: inline-block;
          width: 196px;
          height: 22px;
          line-height: 23px;
          text-align: center;
          color: var(--order-state-color);
          white-space: nowrap; /* 防止文字换行 */
          overflow: hidden;    /* 溢出隐藏 */
          text-overflow: ellipsis; /* 显示省略号 */
          font-size: 12px;
        }
        .awaitPay {
          font-size: 18px;
          color: var(--primary-color);
        }
      }
      .image {
        position: relative;
        img {
          border-radius: 5px;
          width: 100%;
          height: 220px;
        }
        .cover {
          display: flex;
          align-items: center;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 70px;
          background: rgba(9, 10, 14, 0.7);
          box-sizing: border-box;
          border-radius: 5px;
          padding-left: 20px;
          .start-date {
            text-align: center;
            .day {
              font-size: 18px;
              color: #fff;
            }
            .hour {
              display: inline-block;
              font-size: 14px;
              color: #fff;
            }
          }
          img {
            margin: 12px;
          }
          .Price {
            margin-top: 3px;
            color: #fff;
            margin-left: 45px;
            .totalPrice {
              font-size: 16px;
            }
            .payPrice {
              font-size: 18px;
              color: var(--primary-color);
            }
          }
        }
      }
      .details-state {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 15px;
        .left {
          font-size: 14px;
          img {
            width: 14px;
            height: 14px;
          }
          .time {
            color: var(--primary-color);
          }
        }
        .right {
          .linkHost {
            display: inline-block;
            width: 75px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            border-radius: 5px;
            border: 1px solid var(--primary-color) ;
            margin-left: 10px;
          }
          .toPay {
            background-color: var(--primary-color);
            border: 1px solid #e9e9e9;
          }
        }
      }
    }
  }
</style>
