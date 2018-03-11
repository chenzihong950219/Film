//logs.js
Page({
  data: {
    recommend_feeds:[],
    date:""
  },
  onLoad(){
    this.loadRecomments();
  },
  onReachBottom() {
    this.loadRecomments();
  },
  loadRecomments(){
    //console.log(1);
    wx.request({
      url: "https://m.douban.com/rexxar/api/v2/recommend_feed",
      data: { next_date:this.data.date},
      success:({data})=>{
        console.log(data);
        this.setData({
          "recommend_feeds": this.data.recommend_feeds.concat([data]),
          "date":data.date

        });
      }
    })
  }
})
