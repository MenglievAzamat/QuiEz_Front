<template>
  <div id="app">
    <vue-title title="QuiEz"></vue-title>
    <navigation></navigation>
    <router-view class="pa-5"></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: { Navigation }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
</style>
