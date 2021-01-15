// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    current: "homepage",
  },
  handleChange: function (_a) {
    var detail = _a.detail;
    this.setData({
      current: detail.key,
    });
  },
 
})
