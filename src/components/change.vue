<template>
  <div class="app">
    <div>
      <background></background>
    </div>
  </div>
</template>

<script scoped lang="ts">
import background from './background.vue';

export default {
  name: 'app',
  components: {
    background
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
