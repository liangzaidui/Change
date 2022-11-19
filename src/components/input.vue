
  <template>
    <div class="largest">
      <div class="left">{{msg}}</div>
      <input class="right">
    </div>
</template>


<script lang="ts">

export default {
  name: 'input',
  data() {
    return{
      ncIntPut: String,
    ncOutPut: String
    }
    
  },
  props:{
        msg:String
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .largest{
  width:860px;
  height:140px;
 }
 .left{
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
 .right{
 float:right;
width: 539px;
height: 140px;
border-radius: 15px 15px 15px 15px;
color: rgba(16, 16, 16, 1);
font-size: 48px;
text-align: left;
font-family: Roboto;
border: 5px solid rgba(16, 16, 16, 1);
 }
</style>
