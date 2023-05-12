import { ref, onMounted, onUnmounted } from "vue"
// 导入节流函数库提高滚动性能
import { throttle } from "underscore"

// 判断滚动对象, windows or element
export default function scrollListener(element) {
  // 默认el = window
  let el = window
  // 定义ref数据对象, 并返回出去, 在外部用watch监听并执行相应操作

  // 创建一个ref记录是否滑到底部, 再把它返回出去, 在外部进行监听, 若滑动到底部后调用该hooks
  const isBottom = ref(false)

  const clientHeight = ref(0)
  // 实现下滑到一定位置后顶部弹出搜索框的功能----监听滑动位置scrollTop
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollEventListener = throttle(() => {
    if(el == window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
      // console.log(clientHeight, scrollTop, scrollHeight)
      if(scrollTop.value + clientHeight.value >= scrollHeight.value - 1) {
        // 调用函数
        console.log("滑动到底部~")
        isBottom.value = true
      }
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
      if(scrollTop.value + clientHeight.value >= scrollHeight.value - 1) {
        // 调用函数
        console.log("滑动到底部~")
        isBottom.value = true
      }
    }

  }, 200)
  
  // 组件挂载到DOM时添加监听
    onMounted(() => {
      if(element) el = element.value
      el.addEventListener("scroll", scrollEventListener)
    })
    // 离开页面,移除监听, 防止在另外页面进行监听时, 该页面会同步监听
    onUnmounted(() => {
      el.removeEventListener("scroll", scrollEventListener)
    })


  // 注意返回值是一个响应式数据对象
  return {
    isBottom,
    scrollTop
  }
}