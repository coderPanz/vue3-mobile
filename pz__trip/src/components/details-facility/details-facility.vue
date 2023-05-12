<template>
  <div class="facility">
    <div class="facility-inner">
      <h2>{{ title }}</h2>
    </div>
    <div class="details-facility">
      <slot>
        <span>默认插槽</span>
      </slot>
    </div>
    <div class="footer" v-if="infos.length">
      <span class="infos">
        {{ infos }}
        <van-icon name="arrow" />
      </span>
    </div>
  </div>
</template>

<script setup>

  defineProps({
    title: {
      type: String,
      default: "默认标题"
    },
    infos: {
      type: String,
      default: ""
    }
  })
</script>

<style lang="less" scoped>
  .facility {
    padding: 0 10px;
    .details-facility {
      border-top: 2px solid #f0f0f0;
      margin-top: 12px;
      padding-top: 5px;
    }
    .footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 13px;
      .infos {
        color: #ff9645;
      }
    }
  }
</style>
