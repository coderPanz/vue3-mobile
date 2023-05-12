import { defineStore } from "pinia";

  const startDate = new Date()
  const endDate = new Date()
  endDate.setDate(startDate.getDate() + 1)
  
  const useMainStore = defineStore("main", {
    state() {
      return {
        startDate: startDate,
        endDate: endDate,

        // 存放网络请求加载状态, isLoading依赖网络请求, 所以需要在service中去具体操作isLoading
        isLoading: false
      }
    }
  })
  export default useMainStore