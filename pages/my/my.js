const app = getApp()
import { filmLists} from "../../dataServer/dataServer.js";
Page({
  data: {
    filmlist:[]
  },
  onLoad(){
    this.setData({
      userInfo: app.userInfo,
      isLogin: app.isLogin
    });
    var filmid=wx.getStorageSync("want");
    for (var i = 0; i < filmid.length;i++){
      filmLists(filmid[i], this, "filmlist");
    }
  },
  getUserInfo: function () {
    wx.getUserInfo({
      success: ({ userInfo})=> {
        this.setData({
          userInfo,
          isLogin: true
        });
        app.userInfo = userInfo;
        app.isLogin = true;
      },
      fail() {
        wx.openSetting({})
      },
      
    })
  }
})
