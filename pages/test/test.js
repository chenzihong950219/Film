import {filmListLoadData} from "../../dataServer/dataServer.js";
Page({
  data: {
      title:"",
      films:[],
      flag:false,
      baseUrl:"",
      num: { start: 0, count: 9 }
  },
  onLoad(option){
    console.log(option.baseUrl);
    this.setData({
      "title": option.title,
      "baseUrl": option.baseUrl
    });
    filmListLoadData(option.baseUrl, this, this.data.num);
  },
  onReachBottom(){
    this.setData({
      "num.start": this.data.num.start + this.data.num.count,
      "flag": false
    });
    filmListLoadData(this.data.baseUrl, this, this.data.num);
  }
})


