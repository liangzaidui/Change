<template>
  <div class="square">
    <div class="title">
      <div class="title_text">数字大小写转换器</div>
        <inputing></inputing>
        <error></error>
        <output></output>
        <result></result>
    </div>
  </div>
</template>

<script lang="ts">
import result from './result.vue';
import error from './error.vue';
import inputing from './input.vue';
import output from './output.vue';

export default {
  name: 'app',
  props: {
  },
  components:{
    result,
    output,
    error,
    inputing,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.square {
  margin-left: 240px;
  margin-top: 10px;
  width: 1024px;
  height: 769px;
  line-height: 20px;
  border-radius: 24px;
  background-color: white;
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 5px solid rgba(187, 187, 187, 1);
  box-shadow: 00010px white;
  outline: dashed 10px white;
}

.title {
  margin-left: 96px;
  margin-top: 27px;
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

.title_text {
  margin-left: 216px;
  margin-top: 27px;
  padding-top: 28px;
  width: 568px;
  height: 118px;
  color: rgba(255, 255, 255, 1);
  font-size: 48px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
</style>
