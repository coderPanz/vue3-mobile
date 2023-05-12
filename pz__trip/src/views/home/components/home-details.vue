<template>
  <div class="details" ref="element">
    <tabCtrl :ListConent="names" 
            class="tabs-ctrl"
            v-if="showTabCtrl"
            @listDesc="listDescJump"
            ref="tabCtrlRef"
            />
    <van-nav-bar
    title="房屋详情"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    />
  <!-- 当mainPar有值的时候才访问内部数据, 这样就解决了多个 ?. 的写法 -->
    <div class="main" v-if="mainPart">
      <!-- 轮播图组件 -->
      <homeDetailsSwipe 
      :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <!-- 内容 -->
      <homeDetailsInfos 
      :ref="getSectionRef" 
      name="内容"
      :infos-data="mainPart.topModule"/>
      <!-- 房屋设施 -->
      <homeDetailsFacility
      :ref="getSectionRef" 
      name="房屋"     
      :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <!-- 房东信息 -->
      <homeDetailsHost 
      :ref="getSectionRef" ref="hoster" 
      name="房东"
      :landlord="mainPart.dynamicModule?.landlordModule"/>
      <!-- 热门评论 -->
      <homeDetailsComment 
      :ref="getSectionRef"
      name="评论"
      :comment="mainPart.dynamicModule?.commentModule"/>
      <!-- 预定须知 -->
      <homeDetailsNotice 
      :ref="getSectionRef"
      name="预定"
      :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
      <!-- 周边地图 -->
      <homeDetailsMap 
      :ref="getSectionRef"
      name="周边"
      :position="mainPart.dynamicModule.positionModule"/>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import homeDetailsSwipe from './home-details-swipe.vue';
import useDetailsStore from '@/store/modules/home-details'
import homeDetailsInfos from './home-details-infos.vue';
import homeDetailsFacility from './home-details-facility.vue';
import homeDetailsHost from './home-details-host.vue';
import homeDetailsComment from './home-details-comment.vue'
import homeDetailsNotice from './home-details-notice.vue'
import homeDetailsMap from './home-details-map.vue';
import tabCtrl from '@/components/tab-bar/tab-ctrl.vue';
import scrollListener from '@/hooks/scroll_Listener'
import { computed, ref, watch } from 'vue';
  const route = useRoute()
  console.log(route.params.id)

  // 点击返回
  const router =  useRouter()
  function onClickLeft() {
    router.back()
  }

  // 从仓库获取数据传入子组件
  const detailsStore = useDetailsStore()
  const mainPart = detailsStore?.detailsData?.mainPart

  // 滚动到指定位置从顶部弹出导航条
  const element = ref()
  const { scrollTop } = scrollListener(element)
  const showTabCtrl = computed(() => {
    return scrollTop.value > 300
  })

  // 点击对应导航条自动跳转到相应展示区模块

  // 1.1给每个组件动态绑定一个相同的ref,值为一个函数, 传过来的value就是对应的组件对象, 后面只需要一个变量就可以控制我们每个组件的滚动距离, 但是这里有一个bug就是只要我们进行滚动就会执行getSectionRef函数(本来是有在多少个组件中绑定该函数就执行多少次), 所以我们使用v-memo对其进行修复

  // 1.2.进一步封装, 让导航更加具备灵活性, 后期若要添加一个新的组件在页面上, 只需要在组件中添加对应属性, 添加的属性会传递到组件根元素中(这里我们定义一个name属性)就可以让组件的描述直接显示在导航栏上

  const sectionEls = ref({})

  // 获取组件根元素中的name属性
  const getSectionRef = (value) => {
    // 当卸载组件时, 绑定在组件上的getSectionRef发生变化故调用该函数, 而传递过来的value此时为空, 所以需要进行判断
    if(!value) return
    const name = value.$el.getAttribute("name")
    // 把获取到的name作为对象的key, 根元素作为value
    sectionEls.value[name] = value.$el
  }

  // 获取对象中的所有key
  const names = computed(() => {
    return Object.keys(sectionEls.value)
  })

  // 2.点击对应导航条自动跳转到相应展示区
  let isClick = false   //修复小bug:如果时点击切换就不需要执行滚动自动匹配的那个模块了
  let currentDistance = 0
  const listDescJump = (index) => {
    const key = Object.keys(sectionEls.value)[index]
    const el = sectionEls.value[key]
    let distance = el.offsetTop
    if(index !== 0) {
      distance = distance - 56
    }
    isClick = true
    currentDistance = distance
    // element.value是获取该组件, 但我们需要的是组件内部的根元素(.$el)的滚动相对距离
    element.value.scrollTo({
      top: distance,
      // 平滑滚动
      behavior: "smooth"
    })
  }

  // 开发模块: 当滚动到指定模块时, 上方导航栏随之切换(一个算法)
  const tabCtrlRef = ref()
  watch(scrollTop, newValue => {
    if(currentDistance === newValue) {
      isClick = false
    }
    if(isClick) return

   // 2.获取各个组件在页面中的相对位置并存放到一个数组中
    // 从sectionEls对象中获取value, value的集合就是渲染出来的所有组件的根元素
    const itemArr = Object.values(sectionEls.value)
    // 获取每个根元素的位置(组件位置)
    const itemSectionArr = []
    for(let i = 0; i < itemArr.length; i++) {
      // 把每个元素的相对位置添加到数组中去
      itemSectionArr.push(itemArr[i].offsetTop)
    }

    // 开始执行查找算法
    let index = itemSectionArr.length - 1  //初始默认值
    for(let i = 0; i < itemSectionArr.length; i++) {
      if(newValue < itemSectionArr[i]) {
        index = i - 1
        break
      }
    }
    tabCtrlRef.value?.setCurrentIndex(index)
  })

</script>

<style lang="less" scoped>
.details {
  height: 100vh;
  overflow-y: auto;
  .tabs-ctrl {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
    background-color: #fff;
  }
}
  
</style>
