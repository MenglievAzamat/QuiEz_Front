<template>
  <v-toolbar dark color="red">
    <router-link to="/">
      <v-toolbar-title to="/" class="font-weight-black display-1 white--text"
        >QuiEz</v-toolbar-title
      >
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="(link, i) in links" :key="i" :to="`${link.link}`" flat>{{
        link.title
      }}</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        { title: "О проекте", link: "/about" },
        { title: "Войти", link: "/login" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
