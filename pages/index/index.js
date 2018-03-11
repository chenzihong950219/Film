const dataServer=require("../../dataServer/dataServer.js");
Page({
  data: {
   types: {
     movie_showing: { "tite": "热门电影", flag: false },
     movie_free_stream: { "tite": "免费电影", flag: false },
     movie_latest: { "tite": "最新电影", flag: false }
   }
  },
  onLoad() {
    dataServer.homeLoadData("movie_showing",this);
    dataServer.homeLoadData("movie_free_stream",this);
    dataServer.homeLoadData("movie_latest",this);
  }
})

