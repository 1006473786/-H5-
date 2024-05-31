<template>
  <Home v-if="active === 0"></Home>
  <About v-else-if="active === 1"></About>
  <Mine  v-else-if="active === 3"></Mine>
  <Chat v-else></Chat>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search" dot>关于我们</van-tabbar-item>
    <van-tabbar-item icon="friends-o" badge="5">我的</van-tabbar-item>
    <van-tabbar-item icon="setting-o" badge="20">聊天</van-tabbar-item>
  </van-tabbar>
</template>
<script setup lang="ts" name="chart">
import Home  from "./mainMenu/Home.vue"
import About  from "./mainMenu/About.vue"
import Mine  from "./mainMenu/Mine.vue"
import Chat  from "./mainMenu/Chat.vue";
import { ref } from "vue";
const active = ref(0);
const icon = {
  active: "https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png",
  inactive: "https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png",
};
function onChange(){
  console.log(active.value);
}

</script>

