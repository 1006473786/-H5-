
<template>
  <div>首页主要功能</div>
  <div class="imgBox">

  <img v-for="(img,index) in imageList" v-lazy="img" :key="index" class="imgLazy"/>
  </div>
  <van-empty description="描述文字" />

  <!-- <button @click="oneCd">末日审判</button>
  <button @click="twoCd">致盲</button> -->
</template>
  <script setup lang="ts" name="Home">
import { round } from "../../assets/ts/utils/utils";
import { ref, reactive } from "vue";
const num = ref(3.54);

function oneCd() {
  console.log("末日审判");
  let muum = round(num.value);
  console.log(muum, "muum");
}
function twoCd() {
  console.log("致盲");
}
const imageList = reactive([
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
  "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
]);
</script>
  <style lang="less" scoped>
  .imgBox{
    overflow: hidden;
    .imgLazy{
      width: 375px;
    }
  }
</style>
  
  