<template>
    <div class="largest">
      <div class="leftbox">{{msg}}</div>
      <div class="rightbox"></div>
    </div>
</template>

<script lang="ts">

export default {
  name: 'input',
  props: {
    ncIntPut: String,
    ncOutPut: String,
    msg:String
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .largest{
  width:840px;
  height:140px;
 }
 .leftbox{
float:left;
width: 281px;
height: 140px;
line-height: 52px;
border-radius: 10px 10px 10px 10px;
background-color: rgba(255, 255, 255, 1);
color: rgba(16, 16, 16, 1);
font-size: 36px;
text-align: center;
font-family: Roboto;
border: 5px solid rgba(16, 16, 16, 1);
 }
 .rightbox{
 float:right;
width: 539px;
height: 140px;
border-radius: 15px 15px 15px 15px;
color: rgba(16, 16, 16, 1);
font-size: 48px;
text-align: left;
font-family: Roboto;
background-color: rgba(255, 255, 255, 1);
border: 5px solid rgba(16, 16, 16, 1);
 }
</style>
