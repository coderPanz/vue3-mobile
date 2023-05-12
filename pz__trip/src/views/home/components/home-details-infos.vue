<template>
  <div class="infos">
    <div class="name">{{ infosData.houseName }}</div>
    <div class="tags">
      <template v-for="(item, index) in infosData.houseTags" :key="index">
        <span 
        class="item"
        :style="{ color: item?.tagText?.color, background: item?.tagText?.background?.color }"
        >{{ item?.tagText?.text }}
        </span>
      </template>
    </div>
    <div class="comment">
      <div class="left">
        <span class="score">{{ infosData.commentBrief.overall }}</span>
        <span class="scoreTitle">{{ infosData.commentBrief.scoreTitle }}</span>
        <span class="brief">“{{ infosData.commentBrief.commentBrief }}”</span>
      </div>
      <div class="right">
         <span class="count">{{ infosData.commentBrief.totalCount }}
           条评论
           <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="locaton comment">
      <div class="left">
        <span class="address">{{ infosData.nearByPosition.address }}</span>
      </div>
      <div class="right">
        <span class="position">
          地图·周边
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>

  defineProps({
    infosData: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<style lang="less" scoped>
  .infos {
    padding: 10px 15px;
    .name {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .tags {
      margin-bottom: 8px;
      .item {
        font-size: 13px;
        margin: 0 4px;
      }
    }
    .comment {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      line-height: 40px;
      background-color: #fafafa;
      padding: 0 10px;
      border-radius: 10px;
      .left {
        .score {
          font-size: 18px;
          font-weight: 700;
        }
        .scoreTitle {
          font-size: 12px;
          font-weight: 700;
          margin: 0 4px;
        }
        .brief {
          font-size: 12px;
          color: #666;
        }
      }
      .right {
        .count {
          color: #ff9645;
        }
      }
    }
    .locaton {
      margin-top: 15px;

      .left {
        .address {
          font-size: 12px;
          font-weight: 700;
        }

      }
      .right {
        color: #ff9645;
      }
    }
  }
</style>
