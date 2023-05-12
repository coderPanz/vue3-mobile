import hyRequestData from '../request/HY_Request'

  export function getHouseItems() {
    return hyRequestData.get({url: "/favor/list"})
  }