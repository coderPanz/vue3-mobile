import { defineStore } from "pinia";
import { getOrderData } from '@/serivices/index'

  const useOrderStateStore = defineStore("order-state", {
    state: () => ({
      orderData: []
    }),
    actions: {
      async fetchGetOrderData(typeData) {
        const res = await getOrderData(typeData)
        this.orderData = res.data.data.data.orders
        console.log(res.data.data.data.orders)
      }
    }
  })

  export default useOrderStateStore