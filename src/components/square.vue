<template>
  <div class="square">
    <div class="title">
      <div class="title_text">数字大小写转换器</div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'app',
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.square {
  margin-left: 240px;
  margin-top: 123px;
  width: 1024px;
  height: 769px;
  line-height: 20px;
  border-radius: 24px;
  background-color: rgba(255, 255, 255, 1);
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 5px solid rgba(187, 187, 187, 1);
  background:
    linear-gradient(to top, #7e807a, #7e807a, 10px, transparent 10px),
    linear-gradient(to right, #bcc7bc, #b9caba 10px, transparent 10px),
    linear-gradient(to bottom, black, black 10px, transparent 10px),
    linear-gradient(to left, rgb(89, 84, 84), rgb(89, 84, 84)10px, transparent 10px);

  box-shadow: 00010px grey;
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
