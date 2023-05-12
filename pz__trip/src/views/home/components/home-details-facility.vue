<template>
  <div class="facility">
    <defailsFacility title="房屋设备" infos="查看更多设备">
      <div class="facility-inner">
        <template v-for="(item, index) in houseFacility?.houseFacilitys">
          <div class="item" v-if="houseFacility?.facilitySort?.includes(index)" :key="index">
              <div class="head">
                <img :src="item.icon" alt="">
                <div class="text">{{ item.groupName }}</div>
              </div>
              <div class="list">
                <template v-for="(item, index) in item.facilitys.slice(0, 4)">
                  <div class="item">
                    <i class="icon_check icon"></i>
                    <span>{{ item.name }}</span>
                  </div>
                </template>
              </div>
          </div>
        </template>
      </div>
    </defailsFacility>
  </div>
</template>

<script setup>
  import defailsFacility from '@/components/details-facility/details-facility.vue'
  defineProps({
    houseFacility: {
      type: Object,
      default: () => ({})
    }
  })
</script>
<style lang="less" scoped>
  // .facility-inner {
  //   display: flex;
  //   flex-wrap: wrap;
  //   align-items: center;
  //   padding: 0 15px;
  //   background-color: #f8f8f8;
  //   border-radius: 8px;
  //   height: 250px;
  //   .item {
  //     display: flex;
  //     align-items: center;
  //     .head {
  //       width: 90px;
  //       text-align: center;
  //       img {
  //         width: 32px;
  //         height: 32px;
  //       }
  //       } 
  //     }
  //     .list {
  //       display: flex;
  //       justify-content: space-between;
  //       flex-wrap: wrap;
  //       margin-left: 15px;
  //       .item {
  //         margin: 5px 20px;
  //         .icon {
  //         margin-right: 8px;
        
  //         span {
  //           font-size: 13px;
  //         }

  //       }
  //     }
  //   }
  // }
  .facility-inner {
    padding: 5px 0;
    border-radius: 6px;
    font-size: 12px;
    background-color: #f7f9fb;
    .item {
      display: flex;
      margin: 25px 0;
      .head {
        width: 90px;
        text-align: center;
        img {
          width: 20px;
          height: 20px;
        }
        .text {
          margin-top: 5px;
          color: #000;
        }
      }
      .list {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .item {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          width: 50%;
          margin: 4px 0;
        }
      }
    }
    
  } 
</style>
