// miniprogram/pages/aboutUs/about.js
Page({
  data: {
    rankArray: [{
      usrName: '张德永',
      lossNum: '-2.5',
      usrIcon: 'https://img.yzcdn.cn/vant/cat.jpeg'
    }, {
      usrName: 'Charles',
      lossNum: '-1.5',
      usrIcon: 'https://img.yzcdn.cn/vant/cat.jpeg'
    }]
  },

  /*点击分类标签切换排行榜*/
  onClick(event){
    console.log(event)
    wx.showToast({
      title: `${event.detail.index}`,
      icon: 'none',
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})