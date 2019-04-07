<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="secondary">
            <v-toolbar-title>Войти</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                v-model="email"
                prepend-icon="mail"
                name="email"
                label="Эл. почта"
                type="email"
                :rules="emailRules"
              ></v-text-field>

              <v-text-field
                v-model="password"
                prepend-icon="lock"
                name="password"
                label="Пароль"
                type="password"
                :rules="passwordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/register">Зарегистрироваться</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="red white--text" @click="submit">Войти</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    {{ response }}
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    response: "",
    valid: false,
    email: "",
    emailRules: [
      v => !!v || "Введите почту",
      v => /.+@.+\..{2,}/.test(v) || "Неправильное значение поля"
    ],
    password: "",
    passwordRules: [v => !!v || "Введите пароль"],
    username: "",
    usernameRules: [v => !!v || "Введите имя пользователя"]
  }),
  methods: {
    submit() {
      if (this.valid) {
        let data = {
          username: this.email,
          email: this.email,
          password: this.password
        };

        this.$store.dispatch("login", data).then(
          result => {
            this.response = result;
          },
          error => {
            this.response = "NO: " + error;
          }
        );
      }
    }
  }
};
</script>

<style scoped></style>
