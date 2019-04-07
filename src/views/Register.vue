<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="secondary">
            <v-toolbar-title>Зарегистрироваться</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                v-model="username"
                prepend-icon="person"
                name="username"
                label="Имя"
                type="text"
                :rules="usernameRules"
                color="red red--text"
              ></v-text-field>

              <v-text-field
                v-model="surname"
                prepend-icon="person"
                name="surname"
                label="Фамилия"
                type="text"
                :rules="usernameRules"
                color="red red--text"
              ></v-text-field>

              <v-text-field
                v-model="email"
                prepend-icon="email"
                name="email"
                label="Эл. почта"
                type="email"
                :rules="emailRules"
                color="red red--text"
              ></v-text-field>

              <v-text-field
                v-model="password"
                prepend-icon="lock"
                name="password"
                label="Пароль"
                type="password"
                :rules="passwordRules"
                color="red red--text"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="submit" type="submit" color="red white--text"
              >Вперед</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    valid: false,
    email: "",
    emailRules: [
      v => !!v || "Введите почту",
      v => /.+@.+\..{2,}/.test(v) || "Неправильное значение поля"
    ],
    password: "",
    passwordRules: [v => !!v || "Введите пароль"],
    username: "",
    usernameRules: [v => !!v || "Поле не должно быть пустым"],
    surname: ""
  }),
  methods: {
    submit() {
      if (this.valid) {
        let data = {
          first_name: this.username,
          last_name: this.surname,
          email: this.email,
          password: this.password
        };

        return this.$store.dispatch("register", data);
      }
    }
  }
};
</script>

<style scoped></style>
