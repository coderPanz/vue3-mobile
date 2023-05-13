<template>
  <div class="city cover-page">
    <div class="top">
      <!-- 搜索框 -->
      <van-search 
      v-model="searchValue" 
      placeholder="请输入搜索关键词" 
      show-action
      @cancel="cancelBtn"
      shape="round" />

      <!-- tab切换 -->
      <van-tabs v-model:active="tabAction" color="#ff9854">
        <!-- for循环对象时需要注意-->
        <template v-for="(value, key, index) in allCities" :key="key"> 
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <!-- 热门城市 -->
    <!-- currentGroup?.hotCities: 表示当currentGroup不为空时才取读属性 -->
    <van-index-bar :sticky="false">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(itme, index) in currentGroup?.hotCities">
          <div class="list-city" @click="clickCity(itme)">{{ itme.cityName }}</div>
        </template>
      </div>
    </van-index-bar>

    <!-- tab切换后的内容显示 -->
    <div class="content">
      <van-index-bar :sticky="false">
        <template v-for="(group, index) in currentGroup?.cities" :key="index">
          <van-index-anchor :index="group.group" />
          <template v-for="(city, indey) in group.cities" :key="indey">
            <van-cell @click="clickCity(city)" :title="city.cityName" />
          </template>
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import  useCityStore  from '@/store/modules/home-city'
import { storeToRefs } from 'pinia'; 

  const router = useRouter()
  // 搜索框
  const searchValue = ref("")
  function cancelBtn() {
    router.back() 
  }
  // tab切换
  const tabAction = ref()

  /**
   * 网络请求(对网络请求进行掩盖--就是继续封装)
   * 直接在组件中使用网络请求有弊端, 特别是在一个大项目中的时候, 因为如果一个vue组件中是包含大量的逻辑结构的, 不能够好好的进行管理, 那么将越来越复杂, 不利于后期管理
   * 1.如果组件网络请求太多, 那么组件就包含了太多vue需要处理的网络请求的逻辑以及数据
   * 2.如果子组件需要这些数据, 那么则需要一步步将数据传递过去
   * 所以需要将网络请求放到状态管理库中的actions进行统一管理
   * const allCity = ref()
  cityData().then(res => {
    allCity.value = res.data.data
  })
   */
  
  /**
   * 将网络请求放到状态管理库中的actions
   从Store中获取网络请求的数据
  */ 
  const cityStore = useCityStore()
  cityStore.fetchAllCityDataAction()
  const { allCities } = storeToRefs(cityStore)

  // 切换tab标签获取数据展示
  // 1.设置:name绑定key即可让tabAction绑定key
  // 2.根据key获取数据, 默认数据不是响应式的, 所以使用competed包裹
  const currentGroup = computed(() => allCities.value[tabAction.value])

  /**
   * 解决展示城市数据右边的字母索引和对应数据不匹配, 因为indexBar索引栏<van-index-bar>与<van-index-anchor index="A" />它们是按顺序进行监听控制的, 比如点击B就跳到第二组,  故点击某个字母就切换到对应的数据进行展示, 若没有对应数据或者多了某段数据就会出现匹配错乱的现象,而写入热门城市模块的时候也是使用<van-index-bar>但是没有与他与之匹配的字段.所以它们的映射关系会不对应起来.所以实际开发中需要把存在的数据的group抽出来在重新渲染一个list映射导航表
   * 
   *  */ 
  // const indexList =computed(() => {
  //     const list = list = allCities.value.cities.map(item => item.group)
  //     // 在A前加一个#
  //     list.unshift("#")
  //     return list
  // })

  // 监听城市的点击
  function clickCity(city) {
    console.log(city)
    router.back()
    // 把点击城市的数据传入到pinia仓库
    cityStore.clickCity = city
  }

</script>
<style lang="less" scoped>
  .city {
    --van-tabs-line-height: 48px;
  } 
  .top {
    position: relative;
    z-index: 9;
  }
  // 设置热门样式
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;
  }
  .list-city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    line-height: 28px;
    margin: 8px 0;
    text-align: center;
    background-color: #fff4ec;
  }
  // content局部滚动
  .content {
    height: calc(100vh - 102px);
    overflow-y: auto;
  }

</style>
