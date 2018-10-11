const db = wx.cloud.database()
const productsCollection = db.collection('products')
const _ = db.command
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    productsCollection.doc(options.id).field({
      color:true,
      price:true,
      title:true,
      tags:true
    }).get({
      success: res => {
        this.setData({
          product: res.data,
          id: options.id
        })
      }
    })

  },

  addtag:function(event){
    productsCollection.doc(this.data.id).update({
      data: {
        tags: _.push(['mini-program', 'cloud'])
      }
    }).then( res => {
      console.log(res)
    })
  },
  deltag:function(event){
    // productsCollection.doc(this.data.id).update({
    //   data: {
    //     tags: _.shift()
    //   }
    // })
    productsCollection.doc(this.data.id).update({
      data: {
        tags: _.pop()
      }
    })
  },
  update:function(event){
    productsCollection.doc(this.data.id).update({
      data:{
        title:"更新后的title2",
        price:123.321
      }
    }).then(res => {
      console.log(res)
    })
  },
  batchUpdate:function(event){
    wx.cloud.callFunction({
      name:'batchUpdate',
      success: res => {
        console.log(res)
      }
    })
  },
  delete:function(event){
    productsCollection.doc(this.data.id).remove().then(res => {
      console.log(res);
    })
  },
  batchDelete:function(event){
    wx.cloud.callFunction({
      name:'batchDelete'
    }).then( res => {
      console.log(res)
    })
  }
})