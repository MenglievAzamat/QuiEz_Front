<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-btn
        absolute
        dark
        fab
        bottom
        right
        color="red"
        to="/quiz/new"
        class="mb-5"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "quiz_home"
};
</script>
