import Vue from "vue";
import Fly from "flyio/dist/npm/wx.js";
const fly = new Fly();

//添加拦截器
fly.interceptors.request.use((config, promise) => {
  //给所有请求添加自定义header
  config.headers["X-Tag"] = "flyio";
  return config;
})
//配置请求基地址
Vue.prototype.$http = fly
fly.config.baseURL = "http://baobab.wandoujia.com/api/v1/video"

export default fly
