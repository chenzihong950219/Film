function loadData(base, success, data) {
  let url = `https://m.douban.com/rexxar/api/v2/subject_collection/${base}/items`;
  wx.request({
    url,
    data,
    success
  })
}
//主页
function homeLoadData(base, that, data = { start: 3, count: 6 }) {
  let dataList = `types.${base}.list`;
  let dataFlag = `types.${base}.flag`;
  function success({ data: { subject_collection_items } }) {
    that.setData({
      [dataList]: subject_collection_items,
      [dataFlag]: true
    })
  }
  loadData(base, success, data);
}
// 电影列表
function filmListLoadData(base, that, data = { start: 3, count: 6 }) {
  function success({ data: { subject_collection_items } }) {
    that.setData({
      "films": that.data.films.concat(subject_collection_items),
      "flag": true
    })
  }
  loadData(base, success, data);
}
//电影详情
function filmDetail(id,that,base){
  var url = `https://m.douban.com/rexxar/api/v2/movie/${id}`
  wx.request({
    url,
    success({ data }) {
      that.setData({
        [base]: data
      })
    }
  })
}
//评价
function filmcomment(id, that, base, data = { count: 6, order_by: "hot", start: 0 }){
  wx.request({
    url: `https://m.douban.com/rexxar/api/v2/movie/${id}/interests`,
    data,
    success({ data }) {
      that.setData({
        [base]: that.data.comment.concat(data.interests),
        "total": data.total
      })
    }
  })

}
//电影列表
function filmLists(id, that, base) {
  var url = `https://m.douban.com/rexxar/api/v2/movie/${id}`
  wx.request({
    url,
    success({ data }) {
        that.setData({
          [base]: that.data.filmlist.concat([data])
        })
        console.log(that.data.filmlist);
    }
  })
}
module.exports = { homeLoadData, filmListLoadData, filmDetail, filmcomment, filmLists};