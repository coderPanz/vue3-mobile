<template>
  .
  <!-- 我的位置 -->
  <div class="home-search-box">
    <div class="location">
      <div class="city" @click="getPositionList">{{ clickCity.cityName }}</div>
      <div class="position" @click="getPosition">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>

  <!-- 住宿日期 -->
  <div class="date-range" @click="onConfirm">
    <div class="star">
      <span class="in com">入住</span>
      <span>{{ startDateStr }}</span>
    </div>
    <div class="stay">
      <span class="all">共{{ stayCount }}晚</span>
    </div>
    <div class="end">
      <span class="in leave com">离店</span>
      <span>{{ endDateStr }}</span>
    </div>
  </div>

  <!-- 弹出日历 -->
  <van-calendar 
  v-model:show="showDate" 
  type="range" 
  @confirm="onConfirm"
  color="#ff9854" />

  <!-- 关键字 -->
  <div class="price-counter-section date-range ">
    <div class="price">价格不限</div>
    <div class="counter">人数不限</div>
  </div>
  <div class="section com">关键字/位置/名宿</div>
  
  <!-- 热门推荐 -->
  <div class="hot-advise">
    <template v-for="(item, index) in hotSuggests" :key="index">
      <!-- 开发思路, 如果利用v-for获取数组某个数据, 先判断该数组是否为空, 在获取 -->
      <div class="hot-city" @click="hotCityBtn(itme?.text)">{{ item.text }}</div>
    </template>
  </div>
  
  <!-- 搜索按钮 -->
  <div class="search-start" @click="searchStart">
    <div class="btn">开始搜索</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia'; 
import  useCityStore  from '@/store/modules/home-city'
import { ref, toRefs, computed  } from 'vue';
import { formatMonthDay, getDiffDays } from '@/utils/format_date'
import useHomeAdviseStore from '@/store/modules/home-advise'
import useMainStore from '@/store/modules/main';
  const router = useRouter()
  // 获取位置信息
  function getPosition() {
    navigator.geolocation.getCurrentPosition(res => {
      console.log("获取位置成功!", res)
    }, err => {
      console.log("获取位置失败~", err)
    })
  }
  // 获取位置列表
  function getPositionList() {
    // 注意细节: push组件的时候不能使用用连接线, 否则无法解析
    router.push("/HomeCity")
  }

  // 获取当前城市
  const cityStore = useCityStore()
  const { clickCity } = storeToRefs(cityStore)

  // 日期范围的处理(已经放入仓库)
  // const nowDate = new Date()
  // const newDate = new Date()
  // 更加严加的设置离开天数, 在当前的天数的基础上设置离开后的日期.
  // newDate.setDate(nowDate.getDate() + 1)
  const mainStore =  useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)

  // 对从仓库返回格式进行处理(startDateStr依赖startDate, 用计算属性处理比较好)
  const startDateStr = computed(() => formatMonthDay(startDate.value))
  const endDateStr = computed(() => formatMonthDay(endDate.value))

  // 计算出两个日期相差的天数
  const stayCount = ref(getDiffDays(startDate.value, endDate.value))

  // 设置日历
  const showDate = ref(false)
  // 点击住宿时间显示日历
  function onConfirm(values) {
    // 点击弹出点击确认弹入
    showDate.value = !showDate.value
    // 设置日期
    const startSearchDate = values[0]
    const endSearchDate = values[1]
    mainStore.startDate = startSearchDate
    mainStore.endDate = endSearchDate

    // 共几晚
    stayCount.value = getDiffDays(startSearchDate, endSearchDate)
  }

  // 热门建议
  // 尽量避免在子组件中发送网络请求, 在父组件发送即可
  const homeAdviseStore = useHomeAdviseStore()

  // 方法一: 从pinia仓库获取数据并把state中的数据结构出来
  const { hotSuggests } = toRefs(homeAdviseStore)

  // 方法二: 创建计算属性来提取仓库中数组的所有元素并在模板中进行遍历
  // const itemNames = computed(() => {
  //     return homeAdviseStore.hotSuggests.map(item => item.text);
  // });

  // 点击热门城市, 回显到我的位置中
  function hotCityBtn(cityName) {
    cityStore.clickCity.cityName = cityName 
  }
  // 点击进入开始搜索页面
  function searchStart() {
    // 传递参数给子页面的写法
    router.push({
      path: "/home-search-start",
      query: {
        startDate: startDate.value,
        endDate: endDate.value
      }
    })
  }
</script>

<style lang="less" scoped>
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 18px;
    .city {
      flex: 1;
    }
    .position {
      width: 74px;
      display: flex;
      span {
        position: relative;
        top: 2px;
      }
      img {
        width: 18px;
        height: 18px;
      }
    }
}
  .date-range {
    display: flex;
    height: 44px;
    padding: 0 17px;
  }
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
    margin-top: 20px;
  }
  .end {
    margin-right: 17px;
  }
  .in {
    display: block;
    margin-bottom: 4px;
  }
  .com {
    font-size: 12px;
    color: #888;
  }

  .price-counter-section {
    justify-content: space-between;
    font-size: 12px;
    color: #888;
    margin-top: 20px;
  }
  .counter {
    margin-right: 30px;
  }

  .section {
    padding-left: 17px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }

  .hot-advise {
    display: flex;
    margin-top: 18px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
  .hot-city {
    display: flex;
    justify-content: center;
    background-color: #f1f3f5;
    align-items: center;
    width: 60px ;
    height: 24px;
    border: 1px solid #f1f3f5;
    border-radius: 25px;
    margin: 5px 5px;
  }

  .search-start {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    line-height: 38px;
    height: 38px;
    background-image: var(--tjc-theme-linear-gradient);
    color: #fff;
    border-radius: 20px;
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
  }
</style>
 