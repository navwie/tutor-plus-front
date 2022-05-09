<template>
<div class="page">
  <div class="info-boxes">

    <div class="profile-info">
      <h3 class="profile-info-title">Профіль</h3>
      <img src="../../image/teacher.svg" alt="" class="profile-info-img">
      <div class="grid-info">
        <p>Ім'я:</p><p>Єкатерина</p>
        <p>Прізвище:</p><p>Іванова</p>
        <p>E-mail:</p><p>katy.iv@gmail.com</p>
        <p>Рейтинг:</p><div><img src="../../image/star.svg" alt=""><img src="../../image/star.svg" alt=""><img src="../../image/star.svg" alt=""></div>
      </div>
    </div>

    <div class="profile-info">
      <h3 class="profile-info-title">Предмети і спеціалізація</h3>
      <img src="../../image/books.svg" alt="" class="profile-info-img">
      <div class="grid-info">
        <p>Українська</p><p>Підготовка до ЗНО</p>
        <p>Англійська</p><p>Шкільна програма</p>
        <p>Німецька</p><p>Підготовка до міжнародних екзаменів</p>
      </div>
    </div>

  </div>
  <a href="" class="edit-button">Редагувати</a>
</div>
</template>

<script>
export default {
  name: "TeacherProfileComponent"
}
</script>

<style scoped>
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
}
</style>