<template>
  <div class="page">
    <div class="info-boxes">

      <div class="profile-info">
        <h3 class="profile-info-title">Профіль</h3>
        <img src="../../image/teacher.svg" alt="" class="profile-info-img">
        <div class="grid-info">
          <p>Ім'я:</p><input type="text" name="name" v-model="name" class="input"/>
          <p>Прізвище:</p><input type="text" name="name" v-model="surname" class="input"/>
          <p>E-mail:</p><input type="text" name="name" v-model="email" class="input"/>
        </div>
      </div>

      <div class="profile-info">
        <h3 class="profile-info-title">Предмети і спеціалізація</h3>
        <img src="../../image/books.svg" alt="" class="profile-info-img">
        <div class="subjects">
          <div><input type="checkbox" id="zno" class="checkboxes-el" :checked="true"><label for="zno">Підготовка до ЗНО</label></div>
          <div><input type="checkbox" id="school-program" class="checkboxes-el" :checked="true"><label for="school-program">Шкільна програма</label></div>
          <div><input type="checkbox" id="international-exam" class="checkboxes-el"><label for="international-exam">Підготовка до між. екз.</label></div>

          <Multiselect
              v-model="subjectsSelected"
              :options="subjectsAll"
              searchable=true
              mode="tags"
              class="input margin-top"
              placeholder="Оберіть предмети"
              name="subject"
          />

        </div>
      </div>

    </div>
    <a href="" class="edit-button">Зберегти</a>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect";
export default {
  name: "EditTeacherProfileComponent",
  components: {
    Multiselect
  },
  data() {
    return {
      name: 'Єкатерина',
      surname: 'Іванова',
      email: 'katy.iv@gmail.com',
      subjectsSelected: null,
      subjectsAll: null
    }
  },
  mounted() {
    this.subjectsSelected = ['Хімія', 'Історія України']
    this.subjectsAll = ['Німецька мова', 'Хімія', 'Фізика', 'Англійська мова', 'Французська мова', 'Математика', 'Іспанська мова', 'Історія України', 'Українська мова та література']
  }
}
</script>

<style scoped>
@import '../../../node_modules/@vueform/multiselect/themes/default.css';

.info-boxes {
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
.profile-info {
  width: 485px;
  height: 532px;
  background: #DBB1AF;
  border-radius: 14px;
  margin-top: 90px;
}
.profile-info-title {
  font-family: Helvetica;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  padding-top: 30px;
}
.profile-info-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 19px;
}
.grid-info {
  display: grid;
  column-gap: 40px;
  row-gap: 15px;
  grid-template-columns: auto auto;
  width: 310px;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
.subjects {
  font-size: 20px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}
.edit-button {
  font-family: 'JejuMyeongjo';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  color: #FFFFFF;
  background: #7F72B1;
  border-radius: 10px;
  padding: 5px;
  text-decoration: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 130px;
  margin-top: 20px;
  text-align: center;
}
.input {
  background: #D79C9C;
  border-bottom-color: #2E9067;
  border-top: 0;
  border-left: 0;
  border-right: 0;
}
.margin-top {
  margin-top: 30px;
}
</style>