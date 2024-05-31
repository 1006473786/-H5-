

<template>
  <div class="body">
    <div class="chatBox" id="scrollDiv">
      <div @click="goWelcome">进入番外篇</div>
      <router-view></router-view>
      <div class="scrollBot">
        <div v-for="(item, index) in chatData" :key="index">
          <li class="" :class="item.userId === '1' ? 'NoUser' : 'User'">
            <div class="listSty" v-if="item.userId === '1'">
              <img src="../assets/images/leftCat.png" class="iconHeard" />
              <span class="leftval">{{ item.chatVal }}</span>
            </div>
            <div class="listSty" v-else>
              <span class="rightVal">{{ item.chatVal }}</span>
              <img src="../assets/images/rightCat.png" class="iconHeard" />
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
<script setup lang="ts" name="chart">
import router from "@/router";
import { ref, reactive, onMounted, nextTick } from "vue";
const chatData = reactive([
  { chatVal: "您好，欢迎来到有事您就说，但是我不管栏目", userId: "1" },
  // { chatVal: "就是肯定会发生", userId: "2" },
  // { chatVal: "你说了也白说", userId: "1" },
  // { chatVal: "您好，欢迎来到有事您就说，但是我不管栏目", userId: "2" },
  // { chatVal: "因为我就不知道哦", userId: "1" },
  // { chatVal: "您好，欢迎来到有事您就说，但是我不管栏目", userId: "2" },
  // { chatVal: "您好，欢迎来到有事您就说，但是我不管栏目", userId: "2" },
  // { chatVal: "因为我就不知道哦", userId: "1" },
  { chatVal: "因为我就不知道哦", userId: "1" },
]);
const newVal = ref("");
const scrollDiv = ref();

function scrollToBottom() {
  nextTick(() => {
    let scrollElem = scrollDiv.value;
    if (scrollElem) {
      console.log("54564");
      scrollElem.scrollTop = scrollElem.scrollHeight;
    }
  });
}
function goWelcome() {
  router.replace("about");
}
function send() {
  console.log("sdhsjkhfs", newVal.value);
  let list = {
    chatVal: newVal.value,
    userId: "2",
  };
  newVal.value = "";
  chatData.push(list);
}
onMounted(() => {
  console.log("hdskjfhskh ");
  scrollToBottom();
});
</script>
<style lang="less" scoped>
.body {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  border: 10px solid skyblue;
  box-sizing: border-box;
  #scrollDiv {
    height: 1000px;
    box-sizing: border-box;
    overflow-y: scroll;
    .scrollBot {
      padding-bottom: 50px;
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
        background: url("../assets/images/leftIcon.png") no-repeat;
        background-size: 100% 100%;
        padding: 10px 20px 20px 20px;
        text-align: center;
        color: #fff;
      }
    }
    .User {
      display: flex;
      justify-content: right;
      width: 80%;
      margin-left: 20%;
      .rightVal {
        background: rgb(160, 243, 204);
        background: url("../assets/images/rightIcon.png") no-repeat;
        background-size: 100% 100%;
        padding: 35px 20px 20px 20px;
        text-align: center;
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
      height: 100px;
      overflow-x: scroll;
      box-sizing: border-box;
    }
    .send {
      width: 200px;
      height: 100px;
    }
  }
}
</style>

