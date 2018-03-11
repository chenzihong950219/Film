Component({
  properties: {
    film: {
      type: Object,
      value: {}
    }
  },
  //点击事件
  methods: ({
    showDetail({ currentTarget: { dataset: { id } } }) {
    wx.navigateTo({
      url:`/pages/filmDetail/filmDetail?id=${id}`,
      success(){
        wx.showToast({
          title: '加载中',
          icon: 'loading',
          duration: 2000
        })
      }
    });
    }
  })
})