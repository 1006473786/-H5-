

<template>
  <div>关于我们是做什么的</div>
  <!-- <div class="box"></div> -->

  <button @click="goMiniprogram">去小程序</button>
</template>
  <script setup lang="ts" name="About">
import { reactive } from "vue";
import { log } from "console";
let signParams = reactive({
  url: "",
});
interface LabelledValue {
  label?: string;
  num?: number;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
function addNum(num: LabelledValue) {
  console.log(num);
  console.log(num.num);
}
function goMiniprogram() {
  window.location.href = 'https://wxaurl.cn/Sf7evbOZz3m'
}
// let myObj2 = { num: 1 };
addNum({ num: 1 });

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
</script>
  <style lang="less" scoped>
.box {
  width: 200px;
  height: 200px;
  background: skyblue;
  box-shadow: 0 0 10px #ddd;
  margin-left: 30px;
}
</style>
  
  