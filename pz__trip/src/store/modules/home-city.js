import { getcityData } from "@/serivices/index";
import { defineStore } from "pinia";

  const useCityStore = defineStore("city", {
    state() {
      return {
         allCities: {},
         clickCity: { cityName: "广州" }
      }
    },
    // 注意多一个s
    actions: {
      async fetchAllCityDataAction() {
        const res = await getcityData()
        this.allCities = res.data.data
      }
    }
  })

  export default useCityStore