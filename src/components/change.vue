<template>
  <div class="app">
    <div>
      <background></background>
      <square>
        <inputing></inputing>
        <error></error>
        <output></output>
        <result></result>
      </square>

    </div>
  </div>
</template>

<script lang="ts">
import background from './background.vue';
import result from './result.vue';
import error from './error.vue';
import inputing from './input.vue';
import output from './output.vue';
import square from './square.vue'
export default {
  name: 'app',
  components: {
    background,
    result,
    error,
    inputing,
    output,
    square
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
