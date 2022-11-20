<template>
    <div class="back">
    <div class="inside">
      <div class="head">数字大小写转换器</div>
      <div class="put">
        输入<input id="data" type="text" name="fname" v-model="inputInfo"><br>
        <input class="out" type="submit" value="点击输出结果"  @click="transform">
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/change.vue'; // @ is an alias to /src
import { judge } from '@/algorithm/comfirm';
import { low2Up, up2Low } from '@/algorithm/transform';

export default Vue.extend({
  name: 'IndexView',
  data() {
    return {
        inputInfo: ""
    }
  },
  methods: {
    transform() {
        let judgeInfo: string = judge(this.inputInfo)
        if (judgeInfo == "输入正确") {
            let lowRe: string = "\\d+"
            let upRe: string = "[零壹贰叁肆伍陆柒捌玖拾佰仟万亿元整]+"
            if (this.inputInfo.search(lowRe) != -1) {
                alert(low2Up(this.inputInfo))
                this.inputInfo = ""
            } else {
                alert(up2Low(this.inputInfo))
                this.inputInfo = ""
            }
        }
        else{
            alert(judgeInfo)
        }
        // console.log(this.inputInfo.search("\\d"))
        // console.log(this.inputInfo)
        // console.log(judge(this.inputInfo))
        // console.log(this.inputInfo.search("[零壹贰叁肆伍陆柒捌玖拾佰仟万亿元整]"))
        // console.log(up2Low(this.inputInfo))
        // console.log(low2Up(this.inputInfo))
    }
  }
  
});
// let tokenRe: string = "[^0-9零壹贰叁肆伍陆柒捌玖拾佰仟万亿元整]"
// console.log("123".search(tokenRe))

// console.log(up2Low("玖仟玖佰玖拾玖亿玖仟玖佰玖拾玖万玖仟玖佰玖拾玖元整") == 999999999999)
// console.log(low2Up("999999999999"))
</script>

<style scoped>
.back{
  display: inline-block;
  position: relative;
  border-radius: 24px;
  width: 1000px;
  height: 500px;
  background-color: #666666;
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 1);
}
.inside{
  top:85px;
  width: 800px;
  height: 330px;
  position: relative;
  display: inline-block;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 1);
}
.head{
  border-radius: 15px 15px 15px 15px;
  background-color: rgba(16, 16, 16, 1);
  color: white;font-size:48px ;
  width: 500px;
  height: 75px;
  display: inline-block;
  position: relative;
  top:50px;
}
.put{
  border-radius: 15px 15px 15px 15px;
  background-color: rgba(16, 16, 16, 1);
  color: white;font-size:48px ;
  width: 500px;
  height: 75px;
  display: inline-block;
  position: relative;
  top:80px;
}
input{
  width: 300px;
  height: 50px;
  position: relative;
  top:-3px;
  font-size: 30px;
  margin-bottom: 10px;
}
.out{
  background-color: black;
  color: white;
  border-radius: 15px 15px 15px 15px;
  position: relative;
  top:15px
} 
</style>