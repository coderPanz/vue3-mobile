import hyRequestData from '../request/HY_Request'

  export function getHotSuggestsURL() {
    return hyRequestData.get({ url: "/home/hotSuggests" })
  }
  export function getHomeCategories() {
    return hyRequestData.get({url: "/home/categories"})
  }
  export function getHouseList(currentPage) {
    return hyRequestData.get({
      url: "/home/houselist",
      params: {
        page: currentPage
      }
    })
  }
