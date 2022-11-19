<template>
  <div class="error" v-show="IsShow">
    <img src="../assets/error.png" alt="">
    <div class="con">请输入正确格式</div>
  </div>
</template>

<script >
  export default{
    name:'error',
    data(){
      return{
        IsShow:true,
      }
    },
    methodes:{
      ChangeIsShow() {
        this.IsShow = !this.IsShow//使false变为true显示
      },
    }
  }
  
</script>

<style scoped>
.error{
display: inline-block;
border: #f26161;
background-color: #fEEEEE;
color: #f26161;
position: relative;
width: 315px;
height: 62px;
}
.con{
  display: inline;
  position: relative;
  font-size: 20px;
  top:7px;
}
img{
  width: 31px;
  height: 31px;
  display: inline-block;
  position: relative;
  top:16px;
  left: -8px;
}
</style>