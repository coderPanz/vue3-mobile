import { getDetailsData } from "@/serivices";
import { defineStore } from "pinia";

  const useDetailsStore = defineStore("details", {
    state() {
      return {
        detailsData: {}
      }
    },
    actions: {
      async fetchgetDetailsData(houseId) {
        const res = await getDetailsData(houseId)
        this.detailsData = res.data.data
        console.log(res.data.data)
      }
    }
  })

  export default useDetailsStore