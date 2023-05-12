import useMainStore from "@/store/modules/main";
import axios from "axios";
import { BASE_URL, TIME_OUT } from "./config";

  const mainStore = useMainStore()
  class HY_Request {
    // 对baseURL进行封装, 到时候就可以传入指定的baseURL创建实例
    constructor(baseURL, timeout=2000) {
      // 创建新的axios实例
      this.instance = axios.create({
        baseURL,
        timeout
      })
      // 配置实例拦截器, 操作isLoading
      // 请求拦截
      this.instance.interceptors.request.use(config => {
        // 发送网络请求前操作isLoading, 使页面出现加载效果
        mainStore.isLoading = true
        return config
      }, err => {
        return err
      })

      // 响应拦截
      this.instance.interceptors.response.use(res => {
        // 收到数据后操作isLoading 让加载效果消失
        mainStore.isLoading = false
        return res
      }, err => {
        mainStore.isLoading = false
        return err
      })
    }
    // 封装request实例方法方法, 实例(对象)直接调用
    // 传入的config需要是一个对象
    // 注意: 为了开发优秀的代码, 要记住对应的模块只负责做对应的事情, 不要把多余的操作加进来. 这里是专门负责网络请求的模块, 所以isLoading的操作不推荐加进来, 我们可以在拦截器中操作isloading

    request(config) {
      // return axios.request(config)
      // 是一个基于 promise 网络请求库, 所以我们可以进行进一步的封装
      return new Promise((resolve, reject) => {
        this.instance.request(config).then(res => {
          // 调用resolve, 传入res.data, then回调传入的参数, 所以可以在resolve中对数据进行一定的优化处理
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    }

    // 封装get方法
    // 传入的config需要是一个对象
    get(config) {
      return this.instance.request({...config, method: "get"})
    }   

    // post方法
    // 传入的config需要是一个对象
    post(config) {
      return this.instance.request({...config, method: "post"})
    }
  }

  // 创建HY_Request实例, 并指定baseURL,timeout等, 并返回该实例
  const hyRequestData = new HY_Request(BASE_URL, TIME_OUT)

export default hyRequestData