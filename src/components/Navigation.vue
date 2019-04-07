<template>
  <v-toolbar dark color="red">
    <router-link to="/">
      <v-toolbar-title to="/" class="font-weight-black display-1 white--text"
        >QuiEz</v-toolbar-title
      >
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn to="/about" flat>О проекте</v-btn>
      <v-btn to="/logout" flat>Выйти</v-btn>
      <v-btn to="/login" flat>Войти</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
