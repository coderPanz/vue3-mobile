<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="2500" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item class="swipe-item">
          <img :src="item?.url" alt="">
        </van-swipe-item>
      </template>
      <!-- 插槽-显示指示器 (自己定义)-->
      <!-- <template #indicator="props">
        <span class="custom-indicator">{{ props.active }}/{{ props.total }}</span>
      </template> -->
      <!-- 使用vant库中的插槽 -->
      <template #indicator="{ active }">
        <!-- <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div> -->
        <div class="custom-indicator">
          <template v-for="(value, key, index) in swipGroup" :key="key">
            <!-- active: swipeData[active].enumPictureCategory == key表示当前处于active状态的索引也就是处于显示状态的图片的索引对应的enumPictureCategory等于当前swipGroup中的key，添加选中样式， 注意key为字符串， 这里不能用===， 使用==可以进行类型转换 -->
            <div class="item"
                 :class="{ active: swipeData[active]?.enumPictureCategory == key }">
                 <span class="text">{{ getName(value[index]?.title) }}</span>
                 <span class="count" 
                        v-if="swipeData[active]?.enumPictureCategory == key">
                        {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
                  </span>
            </div>

          </template>
        </div>

      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { formToJSON } from 'axios'


  const props =  defineProps({
    swipeData: {
      type: Array,
      default: () => []
    }
  })

  // 对数据进学校转换, 在一个对象数组中, 把每个对象的类型id抽取出来作为key, 然后再把相同id的对象push进入一个数组作为对应id的value... 逻辑较为复杂
  const objArr = [ { id: 1, name: "卫生间" }, { id: 2, name: "卧室" } ]
  const obj = {}
  const swipGroup = {}
  for (const item of props.swipeData) {
    // 先从swipgroup取到value赋值给一个valueArray
    let valueArray = swipGroup[item.enumPictureCategory]
    // valueArray可能取到undefined, 若取到undefined则给它赋值一个空数组
    if(!valueArray) { 
      valueArray = []
      swipGroup[item.enumPictureCategory] = valueArray
    }
    // 以上操作确保swipGroup中的value为一个数组, 接下来就是按照key把对应的item放入数组里面
    swipGroup[item.enumPictureCategory].push(item)
  }
  console.log(swipGroup)

  // 对数据进行处理(例如去掉title中的冒号)
  const getName = (name) => {
    return name.replace("：", "").replace("【", "").replace("】", "")
  }

  // 处理图片处于active时是具体类型中的具体第几张 
  function getCategoryIndex(item) {
    const valueArray = swipGroup[item.enumPictureCategory]
    return (valueArray.findIndex(data => data === item) + 1)
  }  
</script>

<style lang="less" scoped>
  .swipe {
    .swipe-list {
      .swipe-item {
        img {
          width: 100%;
        }
      }
    }
    .custom-indicator {
      display: flex;
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);
      .item {
        margin: 0 5px;
      }
      .active {
        background-color: #fff;
        color: black;
        padding: 1px 3px;
        border-radius: 4px;
      }
  }
  }
  
</style>
