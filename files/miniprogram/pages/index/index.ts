// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
    data:{
      current: 'homepage'
    },
    //导航按钮
    handleChange ({ detail }:any) {
      this.setData({
          current: detail.key
      });
    console.log(this.data.current);
    
  }
})
