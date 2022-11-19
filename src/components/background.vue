<template>
  <div class="box1">
    <!-- <img src="../assets/图片.png" alt=""> -->
      <square>
      </square>
  </div>
</template>
// import Vue from 'vue';

<script lang="ts">

import square from './square.vue'
export default {
  name: "background",
  components:{
    square
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box1 {
  top:500px;
  left: 950px;
  width: 1440px;
  height: 900px;
  line-height: 20px;
  background-color: rgba(102, 102, 102, 0.2);
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 1);
  position: absolute;
}
.box2 {
  left: 220px;
  top: 116px;
  width: 1024px;
  height: 769px;
  line-height: 20px;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(187, 187, 187, 1);
  position: absolute;
}
.box3 {
  left: 336px;
  top: 150px;
  width: 849px;
  height: 124px;
  line-height: 20px;
  border-radius: 15px 15px 15px 15px;
  background-color: rgba(16, 16, 16, 1);
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(187, 187, 187, 1);
  position: relative;
}
</style>
