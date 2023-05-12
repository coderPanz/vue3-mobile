import hyRequestData from "../request/HY_Request";

  export function getcityData() {
    return hyRequestData.get({
      url: "/city/all"
    })
  }

  