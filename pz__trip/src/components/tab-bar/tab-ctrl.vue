<template>
  <div class="list">
    <p class="list-nav" 
       v-for="(item, index) in ListConent" :key="item"
       @click="btnClick(index)"
       :class="{ active: index===currentIndex }">
       {{ item }}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      ListConent: {
        type: Array,
        // 默认返回一个空数组, 如果没用从父组件中传入数据的时候
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    emits: ["listDesc"],
    methods: {
      btnClick(index) {
        this.currentIndex = index
        this.$emit("listDesc", index)
      },
      setCurrentIndex(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .list {
    display: flex;
    text-align: center;
  }
  .list-nav {
    flex: 1;
  }
  .active {
    color: var(--primary-color);
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 8px;
  }
</style>