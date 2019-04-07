<template>
  <v-container fluid>
    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">
            <v-icon>question_answer</v-icon> Новый тест
          </div>
        </div>
      </v-card-title>
      <v-subheader>Информация теста</v-subheader>
      <v-container>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field label="Название"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="Описание" multi-line></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>

      <v-subheader>Вопросы</v-subheader>
      <v-container>
        <v-layout wrap>
          <v-flex xs12>
            <v-expansion-panel focusable>
              <v-expansion-panel-content v-for="(item, i) in 5" :key="i">
                <div slot="header">
                  Сколько будет 1 + 1?
                </div>
                <v-card>
                  <v-card-text class="grey lighten-3">2</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
        </v-layout>
      </v-container>

      <v-layout>
        <v-btn flat class="mt-4">Добавить вопрос</v-btn>
      </v-layout>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat to="/quiz">Отмена</v-btn>
        <v-btn flat color="red">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "quiz_create"
};
</script>
