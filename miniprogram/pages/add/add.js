const db = wx.cloud.database()
const productsCollection = db.collection('products')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  addData:function(event){
    // wx.cloud.callFunction({
    //   name:'addData'
    // }).then(res => {
    //   console.log(res)
    // })
    // console.log(event)
    // productsCollection.add({
    //   data:{
    //     title:"Prodoct 2",
    //     image:"https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=18100816",
    //     tags:["tag1","tag3"],
    //     price:20.12,
    //     color:'blue'
    //   }
    // }).then( res => {
    //   console.log(res)
    // })
    productsCollection.add({
      data: {
        title: "Prodoct " + (Math.random() * 100).toString(),
        image: "https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=18100816",
        tags: ["tag123", "tag23"],
        price: Math.random() * 100,
        color: 'blue',
        view:Math.floor(Math.random()*10)
      }
    }).then(res => {
      console.log(res)
    })
  }
})