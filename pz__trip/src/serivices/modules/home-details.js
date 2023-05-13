import hyRequestData from "../request/HY_Request";

  export function getDetailsData(houseId) {
    return hyRequestData.get({
      url: "/detail/infos",
      params: {
        houseId
      }
    })
  }