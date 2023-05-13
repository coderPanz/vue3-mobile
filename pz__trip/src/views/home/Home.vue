<template>
  <div class="home" ref="homeRef">
    <!-- <home-nav-bar /> -->
    <home-banner />
    <home-search-box />
    <div class="search-bar" v-if="isShow">
      <search-box />
    </div>
    <home-categories />
    <home-content />
  </div>
</template>
<script>
  export default {
    name: 'home'
  }
</script>
<script setup>
  import HomeNavBar from './components/home-nav-bar.vue';
  import HomeBanner from './components/home-banner.vue';
  import HomeSearchBox from './components/home-search-box.vue';
  import useHomeAdviseStore from '@/store/modules/home-advise'
  import HomeCategories from '@/views/home/components/home-categories.vue'
  import HomeContent from '@/views/home/components/home-content.vue'
  import { watch, computed, ref, onActivated } from 'vue';
  import scrollListener from '@/hooks/scroll_Listener'
  import SearchBox from '@/components/search-box/search-box.vue'
  
  // 在父组件中发送网络请求
  // const homeAdviseStore = useHomeAdviseStore()
  // homeAdviseStore.fetchHotSuggestData()

  const homeAdviseStore = useHomeAdviseStore()
  homeAdviseStore.fetchHomeCategories()
  homeAdviseStore.fetchHouseList()

  // 点击按钮加载分页数据
  // function getData() {
  //   homeAdviseStore.fetchHouseList()
  // }


  /**
   * 注意哈: 本人开发时在这里被坑过, 发现当滑动到底部时我们的scrollTop + clientHeight并不等于scrollHeight, scrollTop竟然是一个小数而且非常接近理想值(我们想要的值)数据如下, 也就是发生了误差. 844 2297.60009765625 3142: 发生这种情况的原因最终被杀伐果断的我找到原因

   方法一(失败!):我们开发tab-bar的时候使用了:placeholder="true"这个参数,:组件下方添加一个占位元素，设置其高度与 <van-tabbar> 组件相同，并使其透明, 就是因为添加了这个参数后使得我们的scrollTop变小了亿点点.解决方法: 去掉该参数, 在home组件添加一个大于tab-bar高度的padding-bottom
   */

  // 问题好像没有那么简单......

//  方法二(失败)-- chatGPT:当 document.documentElement.clientHeight + document.documentElement.scrollTop 不等于 document.documentElement.scrollHeight 时，可能是因为文档中存在一些不能滚动的元素（例如固定定位的元素），这些元素占据了一部分页面空间，导致整个文档的高度大于可视区域的高度加上滚动位置所在的高度。
// 实际上，当滚动到页面底部时，document.documentElement.clientHeight + document.documentElement.scrollTop 应该等于 document.documentElement.scrollHeight。但是，如果存在不能滚动的元素或固定定位的元素，会导致页面的总高度超过文档总高度，从而导致二者不相等。
// 解决这个问题的方法是统计所有固定定位元素的高度，并将它们从文档的总高度中减去，再进行比较。可以使用 JavaScript 获取所有固定定位元素的高度并计算它们的总和，然后将这个值从 document.documentElement.scrollHeight 中减去即可。
 // let fixedElementsHeight = 0;
    // const elements = document.querySelectorAll('*');
    // elements.forEach(el => {
    //   const styles = getComputedStyle(el);
    //   if (styles.position === 'fixed') {
    //     fixedElementsHeight += el.offsetHeight;
    //   }
    // });
    // console.log('所有固定定位元素的高度：', fixedElementsHeight);

// 我只能说是浏览器的问题了, 还是不行, 我tm裂开......
// 最后的结论不同浏览器使用访问scrollTob由于图形显示方式和屏幕分辨率的不同会出现误差


  // 首先明确是某个元素内部在滚动还是整个window窗口在滚动, 在使用对应的api监听滚动
  // 监听窗口滚动到底部后调用函数加载更多数据
  // 由于scrollHeight在不同环境会出现不同程度的误差, 结经过测试大部分误差都在0~1这个范围, 所以用scrollHeight减去一能解决大部分使用场景
  // 进行hooks抽取
  // const scrollEventListener = () => {
  //   const clientHeight = document.documentElement.clientHeight
  //   const scrollTop = document.documentElement.scrollTop
  //   const scrollHeight = document.documentElement.scrollHeight
  //   console.log(clientHeight, scrollTop, scrollHeight)
  //   if(scrollTop + clientHeight >= scrollHeight - 1) {
  //     // 调用函数
  //     homeAdviseStore.fetchHouseList()
  //   }
  // }
 
  // // 组件挂载到DOM时添加监听
  // onMounted(() => {
  //   window.addEventListener("scroll", scrollEventListener)
  // })
  // // 离开页面,移除监听, 防止在另外页面进行监听是该页面回同步监听
  // onUnmounted(() => {
  //   window.removeEventListener("scroll", scrollEventListener)
  // })

  const homeRef = ref()
  const { isBottom, scrollTop } = scrollListener(homeRef)
  // 外部进行监听, 若滑动到底部后调用该hooks
  watch(isBottom, (newValue) => {
    if(newValue) {
      // 当fetchHouseList()请求成功返回数据后,调用then()在把isbottom改为false比较科学
      homeAdviseStore.fetchHouseList().then(() => {
        // 加载页面后, 底部已经不在是底部
        isBottom.value = false
      })
    }
  })

  // 实现下滑到一定位置后顶部弹出搜索框的功能
  // 方法一
  // const isShow = ref(false)
  // watch(scrollTop, (newValue) => {
  //   if(newValue > 200) {
  //     isShow.value = true
  //   } else {
  //     isShow.value = false
  //   }
  // })
  // 方法二-计算属性(推荐)
  // 推荐理由, 因为计算属性是的返回值是我们所依赖的变量, 而watch中, 是直接执行相关的js代码不需要利用返回值
  const isShow = computed(() => {
    return scrollTop.value >= 200
  })

  // 返回到首页时,回到离开前的位置
  onActivated(() => {
    homeRef.value?.scrollTo({
      top: scrollTop.value
    })
  })
  
</script>

<style lang="less" scoped>
  .home {
    // 设置在home组件内滚动
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
    // 解决van-tabbar>组件应用在页面上时, 覆盖掉页面底部部分内容
    padding-bottom: 60px;
    button {
      font-size: 32px;
    }
    .search-bar {
      position: fixed;
      display: flex;
      align-items: center;     /* 垂直居中 */
      z-index: 9;
      top: 0;
      left: 0;
      right: 0;
      background-color: #fff;
      height: 45px;   
      padding: 16px 16px 10px;
    }
  }
</style>
