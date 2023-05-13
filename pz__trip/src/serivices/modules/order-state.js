import hyRequestData from "../request/HY_Request";

  export function getOrderData(typeData) {
    return hyRequestData.get({
      url: "/order/list",
      params: {
        type: typeData
      }
    })
  }