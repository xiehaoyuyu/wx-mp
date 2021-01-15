// pages/search/search.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hotArray: [
      { id: 1, title: "AJ11白蓝康扣" },
      { id: 2, title: "白蓝康扣" },
      { id: 3, title: "AJ11白蓝扣" },
      { id: 4, title: "1康扣" },
      { id: 5, title: "白蓝扣" },
      { id: 6, title: "AJ11康扣" },
      { id: 7, title: "AJ11白蓝扣" },
      { id: 8, title: "AJ11扣" },
    ],
    historyArray: [],
    searchValue: "",
  },
  hotKeyword: function (e) {
    console.log(e);
  },
  handleValue(e) {
    this.setData({
      searchValue: e.detail.value,
    });
    // if(!this.data.searchValue)
    console.log(this.data.searchValue);
    this.searchQuest(this.data.searchValue)
  },
  // *请求搜索数据
  async searchQuest(query){
    const res = await request({url:"http://api_devs.wanxikeji.cn/api/goodList/search",data:{query}});
    console.log(res);

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: "搜索",
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
