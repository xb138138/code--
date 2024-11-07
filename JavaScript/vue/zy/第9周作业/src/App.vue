<template>
  <div id="app">
    <h2>测试题</h2>
    <subject></subject>
    <div>
      <flag></flag>
    </div>
  </div>
</template>

<script>
import subject from './components/SubjectItem.vue';
export default {
  name: 'App',
  data() {
    return {

    };
  },
  components: {
    subject
  }
};
</script>

<style>
body {
  background-color: #eee;
}

#app {
  background-color: #fff;
  width: 500px;
  margin: 50px auto;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 2em;
}
</style>
