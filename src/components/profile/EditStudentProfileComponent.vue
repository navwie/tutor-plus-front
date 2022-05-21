<template>
<div class="page">

  <div class="profile-info">
    <h3 class="profile-info-title">Профіль</h3>
    <img src="../../image/student.svg" alt="" class="profile-info-img">
    <div class="grid-info">
      <p>Ім'я:</p><input type="text" name="name" v-model="name" class="input"/>
      <p>Прізвище:</p><input type="text" name="name" v-model="surname" class="input"/>
      <p>E-mail:</p><input type="text" name="name" v-model="email" class="input"/>
    </div>
  </div>
  <a href="" class="edit-button">Зберегти</a>
</div>
</template>

<script>
export default {
  name: "EditStudentProfileComponent",
  data() {
    return {
      name: 'Єкатерина',
      surname: 'Іванова',
      email: 'katy.iv@gmail.com'
    }
  },
}
</script>

<style scoped>
.profile-info {
  width: 485px;
  height: 532px;
  background: #DBB1AF;
  border-radius: 14px;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
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
.input {
  background: #D79C9C;
  border-bottom-color: #2E9067;
  border-top: 0;
  border-left: 0;
  border-right: 0;
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
</style>