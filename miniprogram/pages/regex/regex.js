const db = wx.cloud.database();
const emailCollection = db.collection('email');
Page({
  onLoad: function (options) {
    emailCollection.count().then(res =>{
      console.log("数据总量",res.total);
    })
    emailCollection.get().then(res => {
      console.log("全部数据",res.data);
    })
    emailCollection.where({
      address: db.RegExp({
          regexp:"foxmail"
        })
    }).get().then(res => {
      console.log("regex搜索 foxmail 数据",res.data)
    })
    emailCollection.where({
      address: /gmail/i
    }).get().then(res => {
      console.log("regex搜索 gmail 数据", res.data)
    })
  },
})