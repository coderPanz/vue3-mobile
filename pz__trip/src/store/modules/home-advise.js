import { defineStore } from 'pinia'
import { getHotSuggestsURL, getHomeCategories, getHouseList } from '@/serivices/index'

  const useHomeAdviseStore = defineStore("home-advise", {
    state() {
      return {
        hotSuggests: [ {text:"北京"}, {text:"上海"}, {text:"广州"}, {text:"深圳"}, {text:"杭州"}, {text:"重庆"}, {text:"成都"}, {text:"贵阳"}, {text:"大理"}, {text:"天津"}, {text:"长沙"}, {text:"武汉"}, {text:"南京"}, {text:"拉萨"}, {text:"台湾"}, {text:"荔波"} ],
        categories: [],
        // 分页处理进行数据请求
        // 使用场景: 下拉页面加载更多的数据页面, 并把新加载好的数据和原先数据都保存到数组中
        houseList: [],
        // 记录服务器数据页数
        currentPage: 1
      }
    },
    actions: {
      // 注意, 在actions中使用我们的state数据的时候, 需要this.的方式获取
      async fetchHotSuggestData() {
        const res = await getHotSuggestsURL()
        this.hotSuggests = res.data
      },
      async fetchHomeCategories() {
        const res = await getHomeCategories()
        this.categories = res.data.data
      },
      async fetchHouseList() {
        const res = await getHouseList(this.currentPage)
        // 所以这里是push追加进来数据并且为了防止houseList变为二维数组,需要对数据进行解构出来单个元素在push进去,若使用赋值符号就会替换掉原来的数据
        this.houseList.push(...res.data.data) 
        // 完成一次加载数据页数加一
        this.currentPage++
      }
    }
  })
export default useHomeAdviseStore