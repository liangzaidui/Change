<template>
  <div class="Result">
    <div class="con"> 点击输出结果</div>
  </div>
</template>

<script>
  export default{
    name:'result'
  }
</script>

<style scoped>
div{
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -o-border-radius: 10px;
}

.Result{
  height:89px;
  width: 508px;
  position: absolute;
  display: inline-block;
  top:727px;
  left: 498px;
  background-color: black;
  color: white;
  font-size: 48px;
  text-align: center;
}
.con{
  position: relative;
  top:10px;
}
</style>