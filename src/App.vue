<template>
  <div id="app">
    <site-title title="QuiEz"></site-title>
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
@import "assets/css/fonts.css";

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: Righteous, sans-serif;
}
</style>
