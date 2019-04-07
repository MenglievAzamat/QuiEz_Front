<template>
  <v-container fluid>
    <h1>Домашняя страница</h1>
    <br>
    <h1 class="green--text" v-if="token">Добро пожаловать</h1>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  computed: {
    token: () => {
      return localStorage.token !== undefined;
    }
  }

};
</script>
