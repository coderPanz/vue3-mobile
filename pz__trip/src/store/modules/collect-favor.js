import { defineStore } from "pinia";
import { getHouseItems } from "@/serivices/index";

  const useCollectFavorStore = defineStore("collect-favor", {
    state() {
      return {
        houseItem: []
      }
    },
    actions: {
      async fetchgetHouseItems() {
        const res = await getHouseItems()
        this.houseItem = res.data.data.data.items
        console.log(res.data.data.data.items)
      }
    }
  })

  export default useCollectFavorStore