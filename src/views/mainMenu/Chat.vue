

<template>
  <div class="body">
    <div class="chatBox" id="scrollDiv">
      <!-- <div @click="goWelcome">进入番外篇</div>
       <router-view></router-view> -->
      <div class="scrollBot">
        <div v-for="(item, index) in chatStore.chatData" :key="index">
          <li class="" :class="item.userId === '1' ? 'NoUser' : 'User'">
            <div class="listSty" v-if="item.userId === '1'">
              <img src="../../assets/images/leftCat.png" class="iconHeard" />
              <span class="leftval">{{ item.chatVal }}</span>
            </div>
            <div class="listSty" v-else>
              <span class="rightVal">{{ item.chatVal }}</span>
              <img src="../../assets/images/rightCat.png" class="iconHeard" />
            </div>
          </li>
        </div>
      </div>
    </div>
    <div class="inputBox">
      <textarea class="textareaBox" v-model="newVal"></textarea>
      <button class="send bg-primary" @click="send">发送</button>
    </div>
  </div>
</template>
  <script setup lang="ts" name="Chat">
import router from "@/router";
import { ref, reactive, onMounted, nextTick } from "vue";
import { useChatStore } from '../../stores/counter'
import { radomChineseNum ,printOneByOne} from '../../assets/ts/utils/utils'
import { log } from "console";
const chatStore = useChatStore()  // 获取pinia里面的所有东西
console.log(chatStore,'chatData')
const newVal = ref("");  // 输入框的内容
// 盒子直接滚动到底部事件
const scrollDiv = ref();
function scrollToBottom() {
  nextTick(() => {
    let scrollDiv = document.getElementById("scrollDiv");
    if(scrollDiv){
      scrollDiv.scrollTop = scrollDiv.scrollHeight;
    }
  });
}

// 发送之后，修改pinia内的数据
function send() {
  chatStore.sendData()
  console.log("sdhsjkhfs", newVal.value);
  if (newVal.value) {
    let list = {
      chatVal: newVal.value,
      userId: "2",
    };
    newVal.value = "";
    chatStore.chatData.push(list);
    setTimeout(() => {
      // 获取随机一句话
      let chatVal =[]
      let abc = radomChineseNum();
      console.log(abc,'46545555555');
      
      let bc =printOneByOne(abc,500)
      console.log(bc);
      

      // let list = {
      //   chatVal: abc,
      //   userId: "1",
      // };
      // chatStore.chatData.push(list);
      scrollToBottom();
    }, 1000);
    scrollToBottom();
  }
}
// 页面进入后执行一次，
onMounted(() => {
  console.log("hdskjfhskh ");
  scrollToBottom();
});
</script>

<style lang="less" scoped>
.body {
  position: relative;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  box-sizing: border-box;
  #scrollDiv {
    height: 90%;
    box-sizing: border-box;
    overflow-y: scroll;
    .scrollBot {
      padding-bottom: 10px;
    }
    .listSty {
      display: flex;
      margin: 10px 0 10px 0px;
    }
    .iconHeard {
      width: 60px;
      height: 60px;
      margin: 0 5px;
    }
    .NoUser {
      display: flex;
      justify-content: left;
      width: 80%;
      .leftval {
        min-width: 80px;
        min-height: 20px;
        background: rgb(88, 121, 134);
        padding: 10px ;
        border-radius: 10px;
        text-align: left;
        color: #fff;
      }
    }
    .User {
      display: flex;
      justify-content: right;
      width: 80%;
      margin-left: 20%;
      .rightVal {
        background: rgb(103, 241, 84);
        min-width: 80px;
        padding: 10px;
        border-radius: 10px;
        text-align: right;
        color: #211a29;
      }
    }
  }
  .inputBox {
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0%;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    display: flex;
    .textareaBox {
      padding: 5px 5px;
      width: 550px;
      height: 50px;
      overflow-x: scroll;
      box-sizing: border-box;
    }
    .send {
      width: 200px;
      height: 50px;
    }
  }
}
</style>
