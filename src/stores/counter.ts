import { defineStore } from 'pinia'

export const useChatStore = defineStore('chatData', {
  // 第一种数据写法
  // state: () => ({
  //   chatData: [
  //     { chatVal: "您好，欢迎来到有事您就说，但是我不管栏目", userId: "1" },
  //     { chatVal: "就是肯定会发生", userId: "2" },
  //     { chatVal: "因为我就不知道哦", userId: "1" },
  //     { chatVal: "因为我就不知道哦", userId: "1" },
  //   ],
  //   count: '1'
  // }),
  // 第二种数据声明方法
  state() {
    return {
      chatData: [
        { chatVal: "您好，欢迎来阿达萨达萨达撒大大阿收到甲方公司均可发生口角福克斯 即使对方还是客服电话是客户反馈是达阿达啊大到有", userId: "1" },
        { chatVal: "就是肯定会发生", userId: "2" },
        { chatVal: "因为我就不知道哦", userId: "1" },
        { chatVal: "因为我就不知道哦", userId: "1" },
      ],
      count: '1'
    }
  },
  actions: {
    sendData() {
      console.log('点击发送', this.count+=1)
    }
  }

})



export const useStore = defineStore('main', {
  // state  
  state: () => ({
    count: 0,
  }),
  // actions  
  actions: {
    increment() {
      this.count++
    }
  }
})
