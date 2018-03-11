import { filmDetail, filmcomment } from "../../dataServer/dataServer.js";
const app = getApp();
Page({
  data: {
    detail: {},
    comment: [],
    num: { count: 6, order_by: "hot", start: 0 }
  },
  //获取详情的ID
  onLoad: function ({ id }) {
    filmDetail(id, this, "detail");
    filmcomment(id, this, "comment");
    this.setData({
      id
    });
    this.setData({
      userInfo: app.userInfo,
      isLogin: app.isLogin
    })
  },
  onReachBottom() {
    this.setData({
      "num.start": this.data.num.start + this.data.num.count,
    });
    filmcomment(this.data.id, this, "comment", this.data.num);
  },
  doLogin() {
    if(!this.data.isLogin){
      wx.switchTab({
        url: '/pages/my/my',
      })
    }else{
      let temp=[];
      wx.setStorageSync('wantlist', this.data.id);
      let wantlist = wx.getStorageSync("wantlist");
      temp.push(wantlist);
      if (!wx.getStorageSync("want")){
        wx.setStorageSync('want', temp);
      }else{
        let temps = wx.getStorageSync("want");
        if (temps.indexOf(wantlist)!=-1){
          wx.showToast({
            title: '已添加关注',
          })
          return;
        }
        temps.push(wantlist);
        wx.setStorageSync('want', temps);
      }
      console.log(wx.getStorageSync("want"));
    }
  }

})