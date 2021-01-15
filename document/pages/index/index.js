// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    current: "homePage",
  },
  handleChange: function ({ detail }) {
    // var detail = _a.detail;

    if (detail.key == "mine") {
      wx.setNavigationBarTitle({ title: "我的" });
    }

    if (detail.key == "cart") {
      wx.setNavigationBarTitle({ title: "我的购物车" });
    }
    this.setData({
      current: detail.key,
    });
  },
  getData() {
    wx.request({
      url: "http://api_devs.wanxikeji.cn/api/goodType",
      data: {
        x: "",
        y: "",
      },
      header: {
        "content-type": "application/json", // 默认值
      },
      success(res) {
        console.log(res.data.data);
      },
    });
  },
});
